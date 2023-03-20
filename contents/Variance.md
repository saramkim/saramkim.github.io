---
date: '2022-09-20'
title: 'TypeScript 타입 변성(Variance)'
categories: ['TS']
summary: '타입스크립트에서 다루는 타입 변성에 대하여'
thumbnail: './TSlogo/Typescript_logo_2020.png'
---

### Variance

타입 시스템에는 **변성**(**Variance**)의 개념이 존재합니다.

기저 타입(Base type)은 같지만, 타입 인자(Type argument)가 다른, 타입 간 호환성에 관한 개념입니다.

종류는 **공변성**(**Covariance**), **반공변성**(**Contravariance**), **이변성**(**Bivariance**), **불변성**(**Invariance**)이 있습니다.

<br>

또한 타입 시스템에는 **Subtyping**이라는 타입 간 관계의 개념이 존재합니다.

<u>A가 B를 대체할 수 있다면</u>, A는 B의 **Subtype**이 되고, B는 A의 **Supertype**이 됩니다. (표기 : `A <: B`)

<br><br>

- ##### 공변성(Covariance)

<br>

타입 간 관계(Subtype)가 **유지**되는 성질입니다.

ex) <u>A가 B의 서브타입이면</u>, `F<A>`가 `F<B>`의 서브타입.

    A <: B  =>  F<A> <: F<B>

<br>

- ##### 반공변성(Contravariance)

<br>

타입 간 관계(Subtype)가 **역전**되는 성질입니다.

ex) <u>A가 B의 서브타입이면</u>, `F<B>`가 `F<A>`의 서브타입.

    A <: B  =>  F<A> :> F<B>

<br>

- ##### 이변성(Bivariance)

<br>

공변성과 반공변성을 모두 갖는, **타입 간 호환이 자유로운 성질**입니다.

<br>

- ##### 불변성(Invariance)

<br>

타입 간 관계(Subtype)가 존재하지 않아서, 동일한 타입이 아니면 **타입 간 호환이 불가한 성질**입니다.

---

### In TypeScript

##### Structural type system

<br>

타입스크립트는 **구조적 타입 시스템**(**Structural type system** / **Structural Subtyping**)을 사용합니다.

이름이나 상속과 관계 없이, 타입의 내부 구조에 의해 타입 간 관계, 호환성이 결정됩니다.

따라서 <u>**Subtyping의 대체 가능성을 타입의 구조로 판단**</u>합니다.

<br><br>

##### strictFunctionTypes

```ts
class Animal {
  animal: undefined;
}
class Dog {
  animal: undefined;
  dog: undefined;
}
```

- 여기서 Dog가 Animal을 대체할 수 있으므로, <u>Dog는 Animal의 서브타입</u>입니다. `Dog <: Animal`

<br>

다음은 두 타입을 제네릭으로 사용하는 세 가지 경우입니다.

<br>

###### 1. 배열 값의 타입으로 사용하는 경우

```ts
let arr1: Array<Animal> = [];
let arr2: Array<Dog> = [];
arr1 = arr2; // Ok
arr2 = arr1; // Error with --strictFunctionTypes
```

- 타입 간 관계가 **유지**됩니다. 즉, **공변성**(Covariance)을 가집니다. `Array<Dog> <: Array<Animal>`

<br><br>

###### 2. 함수 반환값의 타입으로 사용하는 경우

```ts
type F1<T> = () => T;
let f1: F1<Animal> = () => new Animal();
let f2: F1<Dog> = () => new Dog();
f1 = f2; // Ok
f2 = f1; // Error with --strictFunctionTypes
```

- 타입 간 관계가 **유지**됩니다. 즉, **공변성**(Covariance)을 가집니다. `F1<Dog> <: F1<Animal>`

<br><br>

###### 3. 함수 매개변수의 타입으로 사용하는 경우

```ts
type F2<T> = (x: T) => void;
let f3: F2<Animal> = (x: Animal) => {};
let f4: F2<Dog> = (x: Dog) => {};
f3 = f4; // Error with --strictFunctionTypes
f4 = f3; // Ok
```

- 타입 간 관계가 **역전**됩니다. 즉, **반공변성**(Contravariance)을 가집니다. `F2<Dog> :> F2<Animal>`

<br><br>

타입스크립트의 타입은 기본적으로 공변성을 갖지만, 함수의 매개변수로 사용할 때 예외적으로 반공변성을 가집니다.

즉, <u>**타입이 출력에 사용되면 공변, 입력에 사용되면 반공변**</u>합니다.

<br>

타입스크립트 컴파일러는 `"strictFunctionTypes": true`인 경우, 이렇게 변성에 의한 타입을 검사합니다. (tsconfig에서 설정)

그리고 **strictFunctionTypes**를 활성화하지 않아도 변성을 검사할 수 있는 다른 방법이 존재합니다.

<br><br>

##### Optional Variance Annotations

<br>

TypeScript 4.7에서 도입된 **Optional Variance Annotation**을 사용하여, 매개변수의 변성을 명시할 수 있습니다.

```ts
type F1<out T> = () => T;
```

- **공변성**의 표기로 해당 타입 앞에 `out`을 사용할 수 있습니다.

```ts
type F2<in T> = (x: T) => void;
```

- **반공변성**의 표기로 해당 타입 앞에 `in`을 사용할 수 있습니다.

```ts
interface FF<in out T> {
  f1: () => T;
  f2: (x: T) => void;
}
```

- **불변성**의 표기로 해당 타입 앞에 `in out`을 사용할 수 있습니다.

<br>

다른 변성을 표기한다고 해서 변성이 바뀌지 않습니다. 오히려 에러만 뜹니다.

변성을 명시함으로써 독자가 <u>매개변수의 용도를 알기 쉽게</u> 하고, 컴파일 과정 중 <u>타입 검사 속도를 높이는</u> 역할을 합니다.

---

### Bivariance

공변성과 반공변성을 모두 갖는, **이변성(Bivariance)** 이 필요한 경우,

<br>

###### 1. strictFunctionTypes 비활성화

<br>

<u>**strictFunctionTypes**를 비활성화하면</u>, 컴파일러는 변성 타입 검사를 하지 않으므로 <u>**변성과 관계없이 타입을 사용**</u>할 수 있습니다.

물론 <u>**Optional Variance Annotation**이 사용되었다면</u>, 해당 변성에 맞게 타입을 사용해야 합니다.

<br><br>

###### 2. Shorthand for Method definition

```ts
interface Example<T> {
  f1: (x: T) => void; // Contravariance
  f2(x: T): void; // Bivariance
}
```

- <u>메서드의 타입을 정의할 때</u>, ES6에서 도입된 Shorthand 문법을 사용하면 해당 메서드의 매개변수는 이변성을 갖습니다.

<br><br>

###### 3. bivarianceHack

```ts
type Example<T> = { bivarianceHack(x: T): void }['bivarianceHack'];
```

- <u>함수의 타입을 정의할 때</u>, 위와 같은 형식으로 작성하면 해당 함수의 매개변수는 이변성을 갖습니다.

<br>

원리는 아래와 같습니다.

```ts
1. type Example<T> = { bivarianceHack(x: T): void }['bivarianceHack'];
2. type Example<T> = { bivarianceHack: (x: T) => void }['bivarianceHack'];
3. type Example<T> = (x: T) => void;
```

1. Shorthand 문법을 사용하여 이변성을 갖습니다.

2. Shorthand 문법을 풀고 기존 문법으로 치환해봅시다.

   - `{ key: value }['key'] = value;` 형식입니다.

3. key가 일치하므로 value인 함수가 도출됩니다.

<br>

**bivarianceHack**은 리액트 타입에서 쓰이고 있습니다.

```ts
// index.d.ts
type RefCallback<T> = { bivarianceHack(instance: T | null): void }['bivarianceHack'];
type EventHandler<E extends SyntheticEvent<any>> = {
  bivarianceHack(event: E): void;
}['bivarianceHack'];
```

---

### 참고 링크

- [What is the purpose of bivarianceHack in TypeScript types?](https://stackoverflow.com/questions/52667959/what-is-the-purpose-of-bivariancehack-in-typescript-types)

- [Strict function types](https://github.com/Microsoft/TypeScript/pull/18654)

- [Why are function parameters bivariant?](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-function-parameters-bivariant)

- [공변성이란 무엇인가](https://seob.dev/posts/%EA%B3%B5%EB%B3%80%EC%84%B1%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/)

- [TypeScript에서의 변성(Variance): 도대체 왜 이렇게 된 거야?](https://driip.me/d230be64-df1d-4e9a-a8c2-cba6bbc0ae15)

- [Typescript Type 시스템 이해하기 : Structural Typing](https://leestrument.tistory.com/entry/Typescript-Type-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-Structural-Typing)

- [TypeScript 4.7에 추가된 Type Parameters의 Variance Annotations](https://driip.me/644e7f06-8591-443e-9fca-44b0ab424fda)

- [Optional Variance Annotations for Type Parameters](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#optional-variance-annotations-for-type-parameters)

- [타입 호환성](https://radlohead.gitbook.io/typescript-deep-dive/type-system/type-compatibility)
