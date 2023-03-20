---
date: '2023-03-05'
title: 'JavaScript Execution Context'
categories: ['JS']
summary: '자바스크립트 실행 컨텍스트와 스코프, 호이스팅에 관하여'
thumbnail: './JSlogo/js.png'
---

자바스크립트 실행 컨텍스트와 스코프, 호이스팅에 관한 정보를 정리하였습니다.

해당 글은 ES6 기준으로 하고, 흐름에 필요한 개념만 다루었기에 생략된 개념이 존재합니다.

혹 틀린 부분이 있다면 댓글 부탁드립니다.

---

#### Execution Context

**실행 컨텍스트**(Execution Context)는 **자바스크립트 코드가 실행되는 맥락을 관리하는 환경**을 의미합니다.

실행되는 코드의 상황을 추적하고, 코드가 실행될 때 사용되는 변수, 함수, 스코프, this와 같은 정보들을 관리합니다.

자바스크립트 엔진은 실행 컨텍스트를 객체의 형태로 관리합니다. 실제 객체는 아니기에 접근은 불가합니다.

<br>

자바스크립트 엔진이 <u>스크립트를 최초로 읽을 때,</u> **전역 실행 컨텍스트**(Global Execution Context)가 생성되어 콜 스택에 쌓입니다.

이후 <u>함수가 호출될 때,</u> **함수 실행 컨텍스트**(Function Execution Context)가 생성되어 콜 스택에 쌓입니다.

eval 함수가 호출될 때도 생성되지만 보안상 문제로 사용하지 않는 함수이니 다루지 않겠습니다.

<br>

#### 구성

- Lexical Environment

  - Environment Record

  - Reference to an outer Lexical Environment

- Variable Environment

  - Environment Record

  - Reference to an outer Lexical Environment

  <br>

#### 과정

###### 1. 생성 단계(Creation Phase)

\*_여기서 '저장'은 '메모리 할당'을 뜻합니다._

<br>

- Environment Record

  - **let**과 **const**로 선언된 식별자가 저장됩니다.

  - **var**로 선언된 식별자가 저장되고 undefined로 초기화됩니다.

  - **function**으로 선언된 함수(함수 선언)가 저장되고 해당 함수가 할당됩니다.

  - **this**가 바인딩 되어 저장됩니다.

- Reference to an outer Lexical Environment

  - 함수가 선언된 스코프의 상위 Lexical Environment를 참조합니다.

<br>

###### 2. 실행 단계(Execution Phase)

<br>

1. 저장된 식별자에 해당 값을 할당합니다.

   - Lexical Environment의 Environment Record

2. 변수와 함수를 사용하여 코드를 실행합니다.

3. 블록을 만나면 새로운 Lexical Environment를 생성합니다.

4. 함수의 반환 값을 반환(return)합니다.

   - 반환 값이 없으면 undefined를 반환합니다.

5. 해당 실행 컨텍스트의 메모리 공간을 해제하고, 콜 스택에서 해당 실행 컨텍스트를 제거합니다.

<br>

#### Lexical Environment(LE)와 Variable Environment(VE)

자바스크립트는 기본적으로 **함수 레벨 스코프**(Function-level scope)를 따릅니다.

하지만 ES6에서 **블록 레벨 스코프**(Block-level scope)를 따르는 let/const 문법이 도입되면서, 실행 컨텍스트의 구성이 둘로 나뉘었습니다.

함수 내에 블록이 있다면 해당 블록 스코프를 함수 스코프와 구분해야 하기 때문입니다.

<br>

생성 단계에서 LE와 VE는 동일한 환경(값)을 가집니다.

실행 단계에서 값의 할당이 LE에서만 이루어지고, VE는 생성 단계의 환경을 유지합니다.

블록을 만나면 LE를 추가 생성하여 새로운 LE를 참조하고, 블록이 종료되면 다시 기존의 LE를 참조합니다. 이 과정에서 VE가 쓰입니다.

<br>

#### Scope

자바스크립트는 **렉시컬 스코프**(Lexical scope)를 따릅니다.

렉시컬 스코프는 함수의 **선언 위치에 따라 결정**이 되기 때문에, 함수를 선언한 시점에 상위 스코프가 결정됩니다.

즉, 실행 컨텍스트의 외부 환경 참조(Reference to an outer Lexical Environment)는 해당 함수가 선언된 스코프의 상위 스코프에 있는 Lexical Environment를 가리킵니다.

이것이 단방향으로 연결되어 있어 Lexical nesting structure(혹은 Scope chain)라고 합니다.

<br>

#### Hoisting

호이스팅을 설명할 땐 주로 "변수의 선언과 할당을 분리한 후, 선언만 코드의 최상단으로 옮기는 것"으로 말합니다.

Hoisting이 "끌어 올리기"라는 뜻이기도 하고, 선언이 코드의 최상단으로 올라간 것처럼 동작하기 때문입니다.

<br>

코드를 실행하기 전, **실행 컨텍스트의 생성 단계에서 식별자의 메모리를 우선 할당**하기 때문에 호이스팅이 발생합니다.

따라서 해당 실행 컨텍스트 내에서 선언 코드 이전에 해당 선언을 참조할 수 있게 됩니다.

하지만 함수 선언의 경우에만 해당 값을 사용할 수 있습니다.

var로 선언된 변수를 참조하면 undefined가 반환되고, let과 const로 선언된 변수를 참조하면 Reference Error가 발생합니다.

값이 할당되지 않은 식별자를 참조하게 되면 Reference Error가 발생하는데, 해당 영역을 TDZ(Temporal Dead Zone)라고 합니다.

---

### 참고 링크

- [ECMAScript® 2015 Language Specification - Executable Code and Execution Contexts](https://262.ecma-international.org/6.0/#sec-executable-code-and-execution-contexts)

- [PoiemaWeb - 스코프](https://poiemaweb.com/js-scope)

- [JavaScript - Execute context](https://www.youtube.com/watch?v=QtOF0uMBy7k&ab_channel=%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9)

- [{풀스택} JavaScript 10강 - 실행 코드로 알아보는 실행컨텍스트 동작 원리](https://www.youtube.com/watch?v=pfQfEwnJHRs&ab_channel=%40%EC%8B%9C%EC%BD%94-%EC%8B%9C%EB%8B%88%EC%96%B4%EC%BD%94%EB%94%A9)

- [Understanding Execution Context and Execution Stack in Javascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)

- [[JavaScript] ES6의 Execution Context(실행 컨텍스트)의 동작 방식과 Lexical Nesting Structure(Scope chain)](https://m.blog.naver.com/dlaxodud2388/222655214381)

- [[JS] variableEnvironment과 LexicalEnvironment](https://velog.io/@roum02/JS-variableEnvironment)
