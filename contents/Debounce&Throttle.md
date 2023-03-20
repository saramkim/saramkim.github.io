---
date: '2022-09-18'
title: 'Debounce & Throttle 함수 만들기'
categories: ['JS', 'TS', 'React']
summary: 'Debounce & Throttle 함수를 만드는 과정, 그 과정에서 얻은 지식'
thumbnail: './Debounce/20220919_024155.jpg'
---

### Debounce & Throttle

**디바운스(Debounce)** 는 이벤트를 그룹화하여 마지막 함수만 호출되도록 하는 이벤트 제어 기술입니다.

이벤트 발생 후 일정 시간 동안 이벤트가 발생하지 않을 때, 콜백 함수를 호출합니다.

<br>

**쓰로틀(Throttle)** 은 일정 시간 동안 함수를 한 번만 호출되도록 하는 이벤트 제어 기술입니다.

이벤트 발생 후 일정 시간 동안 모든 이벤트를 무시하고, 이후 콜백 함수를 호출합니다.

<br>

보통 Change event나 Scroll event에서 낭비를 줄이고, 성능 저하를 방지하기 위해 사용합니다.

자바스크립트와 리액트에는 해당 기능을 하는 함수가 없어 직접 선언하거나 라이브러리를 이용해야 합니다.

<br>

본 게시글에서는 함수 `debounce()`와 `throttle()`을 만드는 과정, 그 과정에서 얻은 지식을 공유합니다.

<br>

우선 해당 함수를 사용할 EventListener에 대해 알아볼 것입니다.

타입스크립트 개발자는 타입 선언 파일과 친해야 한다고 합니다.

F12를 눌러 우리 친구 **d.ts** 를 보러 갑시다.

---

### EventListener Type

```js
addEventListener(type, listener);
```

- 먼저 자바스크립트 `addEventListener()` 메서드의 listener 타입입니다.

```ts
// lib.dom.d.ts
type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface EventListener {
  (evt: Event): void;
}
interface EventListenerObject {
  handleEvent(object: Event): void;
}
```

listener는 **콜백 함수**, 또는 **handleEvent() 메서드(콜백 함수)를 포함하는 객체**를 받습니다.

그리고 해당 콜백 함수는 Event를 매개변수로 받고, 아무것도 반환하지 않습니다.

<br><br>

```js
onChange = { listener };
```

- 다음은 리액트 `onChange` 이벤트의 listener 타입입니다.

```ts
// index.d.ts
type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;

type EventHandler<E extends SyntheticEvent<any>> = {
  bivarianceHack(event: E): void;
}['bivarianceHack'];

interface SyntheticEvent<T = Element, E = Event>
  extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}
```

[bivarianceHack?](https://saramkim.github.io/Variance/)

상당히 복잡합니다. 알아보기 쉽도록 Generic을 없애고 간소화해봅시다.

```ts
type ChangeEventHandler = EventHandler;

type EventHandler = (event: Event) => void;
```

그러니 `addEventListener()` 메서드에서 listener 타입의 첫 번째 경우와 동일합니다.

> ###### listener는 콜백 함수를 받고, 그 콜백 함수는 Event를 매개변수로 받으며 반환 값은 없습니다.

다음은 함수를 만드는 과정입니다. (리액트의 `onChange` 이벤트와 `console.log()`를 예로 합니다)

먼저 함수를 호출하는 코드를 적은 후, 해당 코드에 맞게 함수를 선언해봅시다.

---

### debounce()

```js
onChange={(event) => { console.log(event.target.value) }};
```

이벤트 함수의 기본 형태입니다. 해당 listener에 debounce 함수를 적용합니다.

```js
onChange={debounce((event) => { console.log(event.target.value) })};
```

listener의 위치에 `debounce()`가 들어가면서, 본래 listener였던 콜백 함수가 debounce의 인자가 됩니다.

그 다음 원하는 일정 시간(delay)을 두 번째 인자로 넘깁니다.

```js
onChange={debounce((event) => { console.log(event.target.value)}, 500) };
```

- ###### 그럼 이 코드가 동작하도록 함수 `debounce()`를 만들어 봅시다.

<br><br>

1. 매개변수를 입력합니다.

```js
function debounce(callback, delay) {}
```

2. listener는 콜백 함수를 받으므로, 콜백 함수를 반환합니다.

```js
function debounce(callback, delay) {
  return () => {};
}
```

3.  그 콜백 함수는 Event를 매개변수로 받으므로, 반환하는 콜백에 매개변수를 입력합니다.

```js
function debounce(callback, delay) {
  return (event) => {};
}
```

4. 이벤트 발생 시 delay 이후에 callback을 호출하도록 합니다. 이때 event 매개변수를 `callback()`의 인자로 넘깁니다.

```js
function debounce(callback, delay) {
  return (event) => {
    setTimeout(() => callback(event), delay);
  };
}
```

5. delay 중에 이벤트가 발생하면 기존 timer를 없애고, `setTimeout()`을 다시 실행합니다.

```js
function debounce(callback, delay) {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    tiemr = setTimeout(() => callback(event), delay);
  };
}
```

완성입니다.

<br>

\+ type

```ts
function debounce<Event>(callback: (event: Event) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return (event: Event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(event), delay);
  };
}
```

<br>

<details>
<summary>다른 선언 방법</summary>

<br>

setTimeout 메서드의 타입을 보면 세 번째 매개변수부터는 모두 콜백의 인자로 사용되는 것을 알 수 있습니다.

```ts
// timer.d.ts
function setTimeout<TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  ms?: number,
  ...args: TArgs
): NodeJS.Timeout;
```

따라서 이렇게 선언 가능합니다.

```js
function debounce(callback, delay) {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay, event);
  };
}
```

\+ type

```ts
function debounce<Event>(callback: (event: Event) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return (event: Event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay, event);
  };
}
```

</details>

---

### throttle()

```js
onChange={throttle((event) => { console.log(event.target.value)}, 500) };
```

- ###### 같은 방법으로 함수 `throttle()` 또한 이 코드가 동작하도록 만들어 봅시다.

<br>
<br>

1. `debounce()`와 달리 delay 중에 발생하는 이벤트는 무시합니다.

```js
function throttle(callback, delay) {
  let timer;
  return (event) => {
    if (timer) return;
    tiemr = setTimeout(() => callback(event), delay);
  };
}
```

2. delay 이후 callback을 호출하고, timer의 값을 비움으로써 다음 이벤트 발생 시 `setTimeout()`이 호출되도록 합니다.

```js
function throttle(callback, delay) {
  let timer;
  return (event) => {
    if (timer) return;
    tiemr = setTimeout(() => {
      callback(event);
      timer = null;
    }, delay);
  };
}
```

완성입니다.

<br>

\+ type

```ts
function throttle<Event>(callback: (event: Event) => void, delay: number) {
  let timer: NodeJS.Timeout | null;
  return (event: Event) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(event);
      timer = null;
    }, delay);
  };
}
```

<br>
<br>

---

### 참고 링크

- [클라이언트 개발자도 알아야 할 Debounce & Throttle](https://www.youtube.com/watch?v=Mg5dOUd8pWM)
