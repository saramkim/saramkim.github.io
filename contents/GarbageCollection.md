---
date: '2023-03-20'
title: 'JavaScript Garbage Collection'
categories: ['JS']
summary: '자바스크립트 가비지 컬렉션과 클로저에 관하여'
thumbnail: './JSlogo/js.png'
---

자바스크립트 엔진(V8)은 자바스크립트 코드를 컴파일 및 실행하고, 메모리를 자체 관리합니다.

[이벤트 루프](https://saramkim.github.io/Thread&EventLoop/), [실행 컨텍스트](https://saramkim.github.io/ExecutionContext/)에 이어 자바스크립트 엔진의 메모리 관리, Garbage Collection과 Closure에 관한 정보를 정리하였습니다.

전체적인 흐름을 이해하기 위한 내용이라 생략된 개념이 존재합니다.

혹 틀린 부분이 있다면 댓글 부탁드립니다.

---

#### 메모리 생존 주기

1. 메모리 **할당**: 실행 컨텍스트의 생성 단계에서 이루어지는 과정입니다. ([실행 컨텍스트](https://saramkim.github.io/ExecutionContext/) 참조)

2. 메모리 **사용**: 실행 컨텍스트의 실행 단계에서 이루어지는 과정입니다. 할당된 메모리를 읽고 쓰는 것을 의미합니다.

3. 메모리 **해제**: 할당된 메모리가 더 이상 사용되지 않을 때, Garbage Collection을 통해 메모리를 해제합니다.

<br>

#### 메모리 구조

V8의 메모리는 크게 스택 영역과 힙 영역으로 나뉩니다.

- 스택(Stack): **원시 타입**의 값과 객체를 가리키는 **포인터**와 같은 **정적 데이터**를 저장합니다.

- 힙(Heap): **참조 타입**의 값과 같은 **동적 데이터**를 저장합니다.

<br>

#### Garbage Collection

V8은 내장된 Garbage Collection(이하 GC)을 이용해 더 이상 **사용하지 않는 메모리를 탐지하고 해제**하여 메모리를 자체 관리합니다.

이를 위해 메모리 사용 상황을 계속 모니터링하면서 **도달 가능성이 없는 객체**를 탐지하는데, 이때 [Mark-and-Sweep](https://www.geeksforgeeks.org/mark-and-sweep-garbage-collection-algorithm/) 알고리즘을 사용합니다.

또한, V8의 메인 스레드(코드를 실행하는 스레드)는 단일 스레드이기 때문에 별개의 스레드에서 GC를 수행하여 블로킹을 줄입니다.

<br>

#### 과정

1. 초기 마크: root 객체들을 찾아서 마크합니다. root 객체는 전역 객체나 현재 실행 컨텍스트의 지역 변수를 말합니다.

2. 동시 마크: 메인 스레드에서 실행 중인 자바스크립트 코드를 간섭하지 않고, 마크되지 않은 객체들을 마크합니다.

3. 스왑: 메인 스레드와 스왑하여, 메인 스레드에서 변경된 참조 관계를 GC 스레드에서 사용할 수 있도록 합니다.

4. 초기 스윕: 마크되지 않은 객체들을 메모리에서 해제합니다. 이 과정에서 메인 스레드에서 변경된 참조 관계가 반영됩니다.

5. 동시 스윕: 메인 스레드에서 실행 중인 자바스크립트 코드에서 객체를 생성하거나 참조를 해제하면, 이를 감지하고 동시 스윕을 하여 메모리를 해제합니다.

<br>

#### Closure

클로저는 반환된 내부 함수가 자신이 **선언된 스코프를 기억**하여 밖에서 호출되어도 선언 스코프에 접근할 수 있는 함수를 말합니다.

보통 실행 컨텍스트가 콜 스택에서 제거되면 GC로 인해 해당 환경의 데이터 메모리는 모두 해제됩니다.

하지만 <u>클로저 외부 함수의 경우</u>, 실행 컨텍스트가 콜 스택에서 제거되어도 해당 환경의 메모리가 해제되지 않습니다.

그렇게 참조 가능한 외부 함수의 변수를 자유변수(Free variable)라고 합니다.

---

### 참고 링크

- [자바스크립트의 메모리 관리](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)

- [How JavaScript works: memory management + how to handle 4 common memory leaks](https://medium.com/sessionstack-blog/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)

- [JavaScript's Memory Management Explained](https://felixgerschau.com/javascript-memory-management/)

- [Understanding Memory Leaks in Nodejs](https://blog.bitsrc.io/memory-leaks-in-nodejs-54ac7bbd4173)

- [자바스크립트의 가비지 컬렉션](https://yceffort.kr/2020/12/javascript-garbage-collection)

- [클로저](https://poiemaweb.com/js-closure)
