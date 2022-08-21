---
date: '2022-08-21'
title: 'Web Worker Timer'
categories: ['React', 'TS']
summary: '[React&TS] web worker를 이용한 타이머 만들기'
thumbnail: './WebWorkerTimer/20220821_230348.jpg'
---

### Timer 제작 변천사

> setInterval -> useInterval -> Web worker

[TimeLog](https://saramkim.github.io/time-log)에 들어갈 타이머를 만드는 과정의 경험을 공유하고자 합니다.

처음은 누구나 그러하듯이 setInterval로 시작했습니다.

하지만 생각처럼 구현되지 않아 검색을 해보니 setInterval에 몇가지 문제가 있었는데, 그 해결책으로 useInterval이라는 custom hook이 있었습니다. (문제에 관한 내용은 아래 참고 링크에 있습니다.)

즉시 useInterval로 바꾸었고, 타이머가 잘 동작하여 뿌듯했습니다.

허나 저의 뿌듯함을 비웃듯 타이머는 다른 문제를 가져왔습니다.

오래 작동해보니 타이머에 지연이 생긴 것입니다.

그래서 검색을 통해 원인을 찾았습니다.

- CPU가 과부하 상태인 경우
- 브라우저 탭이 백그라운드 모드인 경우
- 노트북이 배터리에 의존해서 구동 중인 경우

위의 경우 브라우저 내 타이머가 느려져 setInterval의 지연 간격이 길어진다는 것을 알았습니다.

useInterval도 결국은 setInterval을 이용하는 것이니 말입니다.

저의 경우는 <브라우저 탭이 백그라운드 모드인 경우>에 해당했습니다.

무수한 검색을 하다 Web worker를 발견했습니다.

자바스크립트의 single thread와 별개로 동작하여 브라우저가 백그라운드 모드가 되어도 상관이 없었습니다.

개별 thread인 worker에서 setInterval을 작동하면 문제가 없겠습니다.

그럼 어서 적용합시다.

```json
// tsconfig.json
{
  "compilerOptions": {
    ...
    "lib": [ ... "WebWorker"],
    ...
    }
}
```

```js
// worker.ts
const self = globalThis as unknown as DedicatedWorkerGlobalScope;
let time = 0;

self.onmessage = () => {
  setInterval(() => {
    time++;
    self.postMessage(time);
  }, 100);
};
export {};

```

```js
// Timer.tsx
function Timer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const timeSecond = Math.floor(time / 10);

  const timerStart = () => {
    setTimerOn(true);
  };
  const timerStop = () => {
    setTimerOn(false);
  };

  useEffect(() => {
    const worker = new Worker(new URL('./worker', import.meta.url));
    if (timerOn === true) {
      worker.postMessage('timer start');
      worker.onmessage = (e: MessageEvent<string>) => {
        setTime(time + Number(e.data));
      };
    }
    return () => {
      worker.terminate();
    };
  }, [timerOn]);

  return (
    <div className='App'>
      <div className='timer'>{timeSecond}</div>
      <div>
        <button onClick={timerStart}>Start</button>
        <button onClick={timerStop}>Stop</button>
      </div>
    </div>
  );
}

export default Timer;
```

---

### 참고 링크

[코좀봐코 - React에서의 타이머 part 1 : setInterval 말고 이것!](https://www.youtube.com/watch?v=2tUdyY5uBSw)

[Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

[setTimeout과 setInterval을 이용한 호출 스케줄링](https://ko.javascript.info/settimeout-setinterval)
