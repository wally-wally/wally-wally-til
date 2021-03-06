# Chapter12. 함수

<br>

## 1. 함수란?

### (1) 함수 구성

```javascript
// f(x, y) = x + y
function add(x, y) {
  return x + y;
}

// f(2, 5) = 7
add(2, 5); // 7
```

- 프로그래밍 언어의 함수는 일련의 과정을 문(statement)으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.

- 함수를 구성하는 요소

  ![function](https://user-images.githubusercontent.com/52685250/154847515-c5720bed-c3e5-40dd-bac8-0b4165e57e95.JPG)

  - 함수 내부로 입력을 전달받는 변수를 <b>매개 변수(parameter)</b>, 입력을 <b>인수(argument)</b>, 출력을 <b>반환값(return value)</b>이라 한다.
  - 또한 함수는 값이며, 여러 개 존재할 수 있으므로 특정 함수를 구별하기 위한 식별자인 <b>함수 이름</b>을 사용할 수 있다.
  - 위 코드에서 `x`, `y`는 매개 변수, `2`, `5`는 인수, `x + y`는 반환 값, `add`는 함수 이름에 해당한다.

<br>

### (2) 함수의 정의 및 호출

```javascript
// 함수 정의
function add(x, y) {
  return x + y;
}

// 함수 호출
const result = add(2, 5);
console.log(result); // 7
```

<br>

## 2. 함수를 사용하는 이유

- 코드의 재사용
- 유지보수의 편의성
- 코드의 신뢰성
- 코드의 가독성 향상

<br>

## 3. 함수 리터럴

- 자바스크립트의 함수는 객체 타입의 값이다.
- 숫자, 객체와 같이 함수도 함수 리터럴로 생성할 수 있다.

```javascript
// 변수에 함수 리터럴을 할당
const f = function add(x, y) {
  return x + y;
}
```

- 함수 리터럴의 구성 요소

| 구성 요소     | 설명                                                         |
| ------------- | ------------------------------------------------------------ |
| 함수 이름     | <ul><li>함수 이름은 식별자다. 따라서 식별자 네이밍 규칙을 준수해야 한다.</li><li>함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.</li><li>함수 이름은 생략할 수 있다. 이름이 있는 함수를 기명 함수, 이름이 없는 함수를 익명 함수라 한다.</li></ul> |
| 매개변수 목록 | <ul><li>0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.</li><li>각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당된다. 즉, 매개변수 목록은 순서에 의미가 있다.</li><li>매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 매개변수도 식별자 네이밍 규칙을 준수해야 한다.</li></ul> |
| 함수 몸체     | <ul><li>함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.</li><li>함수 몸체는 함수 호출에 의해 실행된다.</li></ul> |

- 리터럴은 이전에 살펴보았듯이 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기 방식을 말한다.
  - 즉, 리터럴은 값을 생성하기 위한 표기법이다.
  - 따라서 함수 리터럴도 평가되어 값을 생성하며, 이 값은 객체다.
  - 즉, <b>함수는 객체다.</b>
- 하지만 함수는 일반 객체와는 다르다.
  - 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
  - 그리고 일반 객체에는 없는 함수 객체만의 고유한 프로퍼티(`arguments`, `caller`, `length`, `name`)를 갖는다.

<br>

## 4. 함수 정의

### (1) 함수 선언문 (function declaration)

```javascript
// 함수 정의(함수 선언문)
function add(x, y) {
  return x + y;
}

// 함수 호출
console.log(add(2, 5)); // 7
```

- 함수 선언문은 함수 리터럴과 형태가 동일하지만 함수 리터럴과 달리 함수 선언문은 <b>함수 이름을 생략할 수 없다.</b>
- 함수 선언문은 <b>표현식이 아닌 문</b>으로 함수 선언문을 실행하면 완료 값이 `undefined`로 출력된다.
- 하지만 여기서 의문이 드는 포인트가 있을 것이다.
  - 예전에 살펴보았듯이 표현식이 아닌 문은 변수에 할당할 수 없다고 했지만 아래 예제를 실행해보면 함수 선언문이 변수에 할당되는 것처럼 보일 것이다.

```javascript
const add = function add(x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7
```

- 위와 같이 동작하는 이유는 자바스크립트 엔진이 코드의 문맥에 따라 동일한 함수 리터럴을 <b>표현식이 아닌 문인 함수 선언문으로 해석하는 경우</b>와 <b>표현식인 문인 함수 리터럴 표현식으로 해석하는 경우</b>가 있기 때문이다.
  - 함수 이름이 있는 기명 함수 리터럴은 <b>함수 선언문 또는 함수 리터럴 표현식으로 해석될 가능성이 있다.</b>
- 코드의 문맥에 따라 기명 함수 리터럴이 다르게 해석이 될 수 있다.
  - 함수 이름이 있는 함수 리터럴을 단독으로 사용(값으로 평가되어야 할 문맥에서 함수 리터럴을 사용하지 않는 경우)하면 함수 선언문으로 해석하고, 함수 리터럴이 값으로 평가되어야 하는 문맥(함수 리터럴을 변수에 할당하거나 피연산자로 사용하는 경우)에서는 리터럴 표현식으로 해석한다.
  - 두 경우 함수가 생성되는 것은 동일하지만 함수를 생성하는 내부 동작에 차이가 있다.

```javascript
// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석
function foo() {
  console.log('foo');
}

foo(); // 'foo'

// 함수 리터럴을 피연산자로 사용하면 함수 리터럴 표현식으로 해석
(function bar() {
  console.log('bar');
});
bar(); // ReferenceError: bar is not defined
```

- `foo` 함수는 함수 선언문으로 해석되지만 그룹 연산자 내에 있는 함수 리터럴 `bar`는 함수 리터럴 표현식으로 해석된다.
  - 그룹 연산자의 피연산자는 값으로 평가될 수 있는 표현식이어야 한다.
  - 따라서 표현식이 아닌 문인 함수 선언문은 피연산자로 사용할 수 없다.
  - 함수 객체를 생성한다는 점에서 동일하지만 함수 선언문으로 생성된 `foo`는 호출할 수 있으나 함수 리터럴 표현식으로 생성된 `bar`는 호출할 수 없다.

![function01](https://user-images.githubusercontent.com/52685250/154842950-ea109688-db71-4088-a77a-e6b134acec33.JPG)

- 함수 `bar` 구문

  - 함수 리터럴에서 '함수 이름은 함수 몸채 내에서만 참조할 수 있는 식별자다'라고 했다.
    - 함수 몸체 외부에서는 함수 이름으로 함수를 참조할 수 없으므로 함수 몸체 외부에서는 함수 이름으로 함수를 호출할 수 없다는 의미다.
    - 즉, 함수를 가리키는 식별자가 없다는 것과 마찬가지다.

- 함수 `foo` 구문

  - 식별자 `foo`를 선언한 적도 없고 할당한 적도 없지만 `foo`는 자바스크립트 엔진이 암묵적으로 생성한 식별자다.
  - 자바스크립트 엔진은 함수 선언문을 해석해 함수 객체를 생성한다.
    - 이때 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름과는 별도로 생성된 함수 객체가 가리키는 식별자가 필요하다.
  - 그래서 <b>자바스크립트 엔진은 생성된 함수를 호출하기 위해 <u>함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당</u>한다.</b>

- <b>함수는 함수 이름으로 호출하는 것이 아니라 <u>함수 객체를 가리키는 식별자로 호출</u>한다.</b>

  - 함수 이름과 변수 이름이 일치하므로 함수 이름으로 호출되는 듯하지만 사실은 식별자로 호출된 것이다.

- 함수 선언문의 의사 코드

  ![function02](https://user-images.githubusercontent.com/52685250/154843607-a16c9cae-71d9-4e43-a94b-394285747a9d.JPG)

  - 위 의사 코드가 바로 다음에 살펴볼 함수 표현식이다.
  - 결론적으로 자바스크립트 엔진은 함수 선언문을 함수 표현식으로 변환해 함수 객체를 생성한다고 생각할 수 있다.

<br>

### (2) 함수 표현식 (function expression)

- 자바스크립트의 함수는 일급 객체다.
  - 자바스크립트의 함수는 값처럼 변수에 할당할 수도 있고 프로퍼티의 값이 될 수도 있으며 배열의 요소가 될 수도 있다.
  - 이처럼 값의 성질을 갖는 객체를 일급 객체라 한다.

```javascript
var add = function (x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7
```

- 함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
  - 이러한 함수 정의 방식을 함수 표현식이라 한다.
- 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
- 함수 선언문에서 살펴본 바와 같이 <b>함수를 호출할 때</b>는 함수 이름이 아니라 <b>함수 객체를 가리키는 식별자를 사용</b>해야 한다.

```javascript
var add = function foo(x, y) {
  return x + y;
}

console.log(add(2, 5)); // 7

console.log(foo(2, 5)); // Uncaught ReferenceError: foo is not defined
```

<br>

### (3) 함수 생성 시점과 함수 호이스팅

#### :pushpin: 함수 선언문 호이스팅

- 함수 선언식과 함수 표현식의 가장 큰 차이점은 호이스팅에 있다.
  - 함수 선언식은 호이스팅의 대상이고, 함수 표현식은 호이스팅되지 않는다.
  - 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문이다.

```javascript
// 함수 참조
console.dir(add); // f add(x, y)
console.log(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function(x, y) {
  return x - y;
}
```

- 함수 선언문은 런타임 이전에 자바스크립트 엔진에 먼저 실행되어 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고 생성된 함수 객체를 할당한다.
  - 이로 인해 함수 선언문은 코드의 선두로 끌어 올려진 것처럼 동작하는 호이스팅에 영향을 받는다.

<br>

#### :pushpin: `var` 키워드를 사용한 변수 선언문과 함수 선언문의 호이스팅 차이

- 공통점
  - 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행되어 식별자를 생성한다.
- 차이점
  - 변수 선언문은 `undefined`로 초기화되지만 함수 선언문은 암묵적으로 생성된 식별자는 함수 객체로 초기화되어 함수 선언문 이전에 호출하면 함수 호이스팅에 의해 호출이 가능하다.

<br>

#### :pushpin: 함수 표현식 자체는 호이스팅 대상이 아니다.

- 함수 표현식은 변수에 할당되는 값이 함수 리터럴인 문이다.
  - 따라서 변수 선언문과 변수 할당문을 한 번에 기술한 축약 표현과 동일하게 동작한다.
  - 변수 선언은 런타임 이전에 실행되어 `undefined`로 초기화되지만 <b>변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.</b>
- 따라서 함수 표현식으로 함수를 정의하면 엄밀히 말해서 <b>함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.</b>

![function03](https://user-images.githubusercontent.com/52685250/154846504-fbee9dd3-35ac-4675-8cdb-ca46723c3a26.JPG)

- 함수 표현식 이전에 함수를 참조하면 `undefined`로 평가된다.
  - 따라서 이때 함수를 호출하면 `undefined`를 호출하는 것과 마찬가지이므로 타입 에러가 발생한다.
  - 따라서 함수 표현식으로 정의한 함수는 반드시 <b>함수 표현식 이후에 참조 또는 호출</b>해야 한다.

<br>

### (4) `Function` 생성자 함수

- `Function` 생성자 함수에 매개변수 목록과 함수 몸체를 문자열로 전달하면서 `new` 연산자와 함께 호출하면 함수 객체를 생성해서 반환한다.

```javascript
var add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7
```

- `Function` 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다.
  - 지금까지 살펴본 함수 생성 방식과 다르게 동작하는 부분이 다소 존재한다.

<br>

### (5) 화살표 함수 (arrow function)

- ES2015에서 도입된 화살표 함수는 `function` 키워드 대신 화살표(`=>`)를 사용해 좀더 간략한 방법으로 함수를 선언할 수 있다.
- 화살표 함수는 항상 익명 함수로 정의한다.

```javascript
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7
```

- 화살표 함수는 기존의 함수 선언문 또는 함수 표현식을 완전히 대체한 것이 아니다.
  - 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화되어 있다.
- 그리고 기존 함수와 달리 `this` 바인딩도 다르고, `prototype` 프로퍼티가 없으며 `arguments` 객체를 생성하지 않는 등 다른 특징들을 가지고 있는데 화살표 함수에 대한 내용은 추후 'Chapter26'에서 자세히 살펴보도록 하자.

<br>

## 5. 함수 호출

### (1) 매개변수와 인수

- 함수를 실행하기 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는 경우, <b>매개변수(parameter)</b>를 통해 <b>인수(argument)</b>를 전달한다.
  - 이때 인수는 값으로 평가될 수 있는 표현식이어야 한다.
  - 인수는 함수를 호출할 때 지정하며, 개수와 타입에 제한이 없다.
- 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다.
  - 즉, <b>매개변수의 스코프는 함수 내부</b>다.

```javascript
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 호출
// 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

console.log(result); // 3

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined
```

- 함수는 <b>매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.</b>
  - 인수가 부족해서 인수가 할당되지 않은 매개변수의 값은 `undefined`이며 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
  - 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다고 했지만 모든 인수는 암묵적으로 함수 내부에서 `arguments` 객체의 프로퍼티로 보관된다.
  - 참고로 `arguments` 객체는 매개변수의 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용되고 <u>유사 배열 객체</u>라는 점도 잊지 말자.

```javascript
function add(x, y) {
  return {
    arguments,
    result: x + y,
  }
}

// 2 + undefined의 평가 결과는 NaN이다.
console.log(add(2)); // { arguments: Arguments [2, callee: ƒ, Symbol(Symbol.iterator): ƒ], result: NaN }

console.log(add(2, 5, 9)); // { arguments: Arguments [2, 5, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ], result: 7 }
```

<br>

### (2) 인수 확인

- 자바스크립트에서 함수는 아래와 같은 특징을 가진다.
  - 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
  - 자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.
- 따라서 자바스크립트의 경우 함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.
  - 만약 아래 코드에서 if문과 같은 타입 체크 로직이 없다면 console.log에 찍히는 결과는 각각 `NaN`, `'ab'`가 되어 숫자를 더하는 함수의 역할을 충실히 수행하지 못하는 `add` 함수가 될 것이다.

```javascript
function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
  }
    
  return x + y;
}

console.log(add(2)); // Uncaught TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); // Uncaught TypeError: 인수는 모두 숫자 값이어야 합니다.
```

- 사실 이러한 문제를 제일 깔끔하게 해결하는 방법은 정적 타입 언어인 타입스크립트를 사용해서 인수의 타입을 지정하는 것이다.
  - 만약 인수에 `number` 타입이 아닌 다른 타입의 값을 넘기면 코드를 실행하기 전 에디터상에서 에러를 내뿜을 것이다.

```typescript
function add(x: number, y: number) {
  return x + y;
}
```

- 이번에는 인수의 타입이 아닌 인수의 개수에 대해서 살펴보자.
  - 보통 `arguments` 객체를 통해 인수 개수를 확인할 수 있지만 인수가 전달되지 않은 경우 단축 평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다.

```javascript
function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
```

```javascript
// ES6에서 도입된 매개변수 기본값을 사용한 구문
// 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우와 undefined를 전달한 경우에만 유효하다.
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
```

```javascript
// (추가) arguments 객체를 이용하여 인수로 들어온 모든 값을 더하는 함수 만들기
// arguments를 사용하면 매개변수 a, b, c도 필요없게 된다.
function add() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
}
```

<br>

### (3) 매개변수의 최대 개수

- ECMAScript 사양에서는 매개변수의 최대 개수에 대해 명시적으로 제한하고 있지 않지만 너무 많은 매개변수를 지정하는 것은 좋지 않다.
- 매개변수는 순서에 의미가 있어 매개변수가 많아지면 함수를 호출할 때 인수의 순서를 고려해야한다.
  - 만약 순서가 변경되는 경우 함수의 호출 방법도 바뀌므로 함수를 사용하는 코드 전체가 영향을 받아 유지보수가 안 좋아진다.
- 함수의 매개변수는 코드를 이해하는 데 방해되는 요소이므로 이상적인 매개변수 개수는 0개이며 적을수록 좋다. 이는 리팩토링 관점에서 매우 중요한 부분이라 다시 한번 읽고 넘어가자.
  - 이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.
- 함수의 매개변수는 최대 3개 이상을 넘지 않는 것을 권장하고 그 이상 필요하다면 객체로 묶는 방법을 권장한다.

```javascript
// before
function setCookie(name, value, expires, path, domain, secure) {
  // 생략
}

// after
function setCookie({ name, value, expires, path, domain, secure }) {
  // 생략
}
```

- 객체를 인수로 사용하게 되면 프로퍼티 키만 정확히 지정하면 매개변수의 순서를 신경 쓰지 않아도 된다.
- 하지만 객체를 인수로 사용할 때 주의할 점은 함수 외부에서 내부로 전달한 객체를 내부에서 변경할 때 부수 효과가 발생할 수 있는데 이는 12.6 단락에서 자세히 살펴보자.

<br>

### (4) 반환문

- 함수는 `return` 키워드와 표현식으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환할 수 있다.
- 그리고 `return` 문 뒤에 작성된 구문들은 자연스레 무시되니 주의해야 한다.

```javascript
function multiply(x, y) {
  return x * y; // 반환문
}

// 함수 호출은 표현식이고 이는 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15
```

- 반환문의 역할 (1) - 함수의 실행을 중단하고 함수 몸체를 빠져나감

```javascript
function foo(x) {
  if (x < 10) {
    console.log('빠져 나감');
    return;
  }
    
  console.log('끝까지 실행됨');
}

foo(1); // 빠져 나감
foo(11); // 끝까지 실행됨
```

- 반환문의 역할 (2) - `return` 키워드 뒤에 오는 표현식을 평가해 반환함
  - 만약 아래 코드처럼 `return` 키워드 뒤에 명시적으로 표현식을 쓰지 않거나 `return` 키워드가 생략되면 `undefined`가 반환된다.

```javascript
function foo() {
  return;
}

function bar() {}

console.log(foo()); // undefined
console.log(bar()); // undefined
```

- 반환문은 함수 몸체 내부에서만 사용할 수 있다.
  - 전역에서 반환문을 사용하면 문법 에러(`SyntaxError: Illegal return statement`)가 발생한다.
  - 참고로 `Node.js`는 파일별로 독립적인 파일 스코프를 갖기 때문에 파일의 가장 바깥 영역에 반환문을 사용해도 에러가 발생하지 않는다.

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    return; // SyntaxError: Illegal return statement
  </script>
</body>
</html>
```

<br>

## 6. 참조에 의한 전달과 외부 상태의 변경

```javascript
function changePrimitive(value) {
  value = 'abc';
}

function changeObject(obj) {
  obj.a = 20;
}

var text = 'xyz';
var obj1 = {
  a: 10,
};

console.log(text); // 'xyz'
console.log(obj); // { a: 10 }

// 원시 값은 값 자체가 복사되어 전달된다.
changePrimitive(text);

// 객체는 참조 값이 복사되어 전달된다.
changeObject(obj1);

// 원시 값은 원본이 훼손되지 않는다.
console.log(text); // 'xyz'

// 객체는 원본이 훼손된다.
console.log(obj1); // { a: 20 }
```

- 원시 타입 인수를 전달받은 `changePrimitive` 함수에서는 원시 값은 변경 불가능한 값이므로 직접 변경할 수 없어 재할당을 통해 할당된 원시 값을 새로운 원시 값으로 교체했다.
  - 원시 타입 인수는 값 자체가 복사되어 매개변수에 전달되므로 함수 몸체에서 그 값을 변경해도 원본은 훼손되지 않는다.
- 객체 타입 인수를 전달받은 `changeObject` 함수에서는 객체는 변경 가능한 값이므로 직접 변경할 수 있기 때문에 재할당 없이 직접 할당된 객체를 변경했다.
  - 객체 타입 인수는 참조 값이 복사되어 매개변수에 전달되므로 함수 몸체에서 참조 값을 통해 객체를 변경할 경우 원본이 훼손된다.
- 객체를 함수의 인수로 전달하는 경우 참조에 의한 전달 방식으로 동작하기 때문에 부작용이 발생한다.
- 이러한 문제의 해결 방법 중 하나는 객체를 불변 객체로 만들어 사용하는 것이다.
  - 객체의 복사본을 새롭게 생성하는 비용은 들지만 객체를 마치 원시 값처럼 변경 불가능한 값으로 동작하게 만드는 것이다.
  - 원본 객체를 깊은 복사하여 새로운 객체를 생성하고 재할당을 통해 교체하면 외부 상태가 변경되는 부수 효과를 없앨 수 있다.
  - 이처럼 외부 상태를 변경하지 않고 외부 상태에 의존하지도 않는 함수를 순수 함수라 한다.

<br>

## 7. 다양한 함수의 형태

### (1) 즉시 실행 함수 (IIFE)

- <b>함수 정의와 동시에 즉시 호출</b>되는 함수를 <b>즉시 실행 함수(IIFE, Immediately Invoked Function Expression)</b>라고 한다.
- 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.
- 즉시 실행 함수는 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다.
  - 기명 함수로도 가능하지만 그룹 연산자 내의 기명 함수는 밖에서 다시 호출할 수 없다.
- 즉시 실행 함수는 반드시 그룹 연산자 ( ... )로 감싸야 한다. 그렇지 않으면 에러가 발생한다.
  - 그룹 연산자로 함수를 묶는 이유는 함수 리터럴을 평가해서 함수 객체를 생성하기 위해서다.

```javascript
// 익명 즉시 실행 함수
(function() {
  return 'abc';
}());

// 기명 즉시 실행 함수
(function foo() {
  return 'def';
}());

foo(); // ReferenceError: foo is not defined
```

```javascript
function () { // SyntaxError: Function statements require a function name
  // ...
}();

// 아래 코드에서 에러가 발생하는 이유는 자바스크립트의 ASI 기능에 의해 코드 블록을 받는 중괄호 뒤에 ';'이 암묵적으로 추가되기 때문이다.
function foo() {
  // ...
}(); // SyntaxError: Unexpected token ')'
```

- 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있고 인수를 전달할 수도 있다.

```javascript
var res1 = (function() {
  var a = 3;
  var b = 4;
  return a + b;
}());

console.log(res1); // 

var res2 = (function(a + b) {
  return a + b;
}(4, 6));

console.log(res2); // 10
```

- 즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수도 있는 변수나 함수 이름의 충돌을 방지할 수 있다.
  - 즉시 실행 함수로 감싸면 그 안에 있는 모든 변수는 즉시 실행 함수의 지역 변수가 되어 전역 변수의 사용을 제한할 수 있다.

```javascript
(function() {
  var a = 1; // 즉시 실행 함수의 지역 변수
  // ...
}());

console.log(a); // ReferenceError a is not defined
```

<br>

### (2) 재귀 함수 (Recursive Function)

- 함수가 자기 자신을 호출하는 것을 재귀 호출이라 하고 <b>재귀 함수(Recursive Function)</b>는 자기 자신을 호출하는 행위, 즉 <b>재귀 호출을 수행</b>하는 함수를 말한다.
- 아래 코드에서 `factorial` 함수 내부에서 자기 자신을 호출할 때 사용한 식별자` factorial`은 함수 이름이다.
  - 함수 이름은 함수 몸체 내부에서만 유효하기 때문에 함수 내부에서는 함수 이름을 사용해 자기 자신을 호출할 수 있다.
- 재귀 함수는 자기 자신을 무한 재귀 호출하기 때문에 반드시 함수 내에서 탈출 조건을 만들어야 하고 만약 탈출 조건이 없다면 stack overflow 에러가 발생한다.

```javascript
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) {
    return 1;
  }
    
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
```

- 함수 표현식으로 정의한 함수 내부에서는 함수 이름은 물론 함수를 가리키는 식별자로도 자기 자신을 재귀 호출할 수 있다.
  - 단, 함수 외부에서 함수를 호출할 때는 반드시 함수를 가리키는 식별자로 해야 한다.

```javascript
var factorial = function foo(n) {
  if (n <= 1) {
    return 1;
  }
  
  // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
  return n * factorial(n - 1);
    
  // 함수 이름으로 자기 자신을 재귀 호출할 수 있다.
  return n * foo(n - 1);
}

console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(foo(3)); // ReferenceError: foo is not defined
```

<br>

### (3) 중첩 함수 (Nested Function)

- <b>함수 내부에 정의</b>된 함수를 <b>중첩 함수(Nested Function)</b> 또는 내부 함수(Inner Function)라 한다.
- 일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.

```javascript
function outer() {
  var x = 1;
    
  function inner() {
    var y = 2;
      
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }
    
  inner();
}

outer();
```

- ES6부터는 if 문이나 for 문 등의 코드 블록 내에서도 함수를 정의할 수 있지만 호이스팅으로 인해 혼란이 발생할 수 잇으므로 이와 같은 패턴은 바람직하지 않다.
- 그리고 중첩 함수를 사용하는 경우 `this` 바인딩 관점에서도 다소 다르게 동작할 수 있기 때문에 이 부분은 주의해야 한다.

```javascript
var obj = {
  a: 1,
  b: function() {
    console.log(this.a);
      
    function c() {
      console.log(this.a);
    }
      
    c();
  },
};

obj.b(); // ?
```

<br>

### (4) 콜백 함수 (Callback Function)

- <b>함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수</b>를 <b>콜백 함수 (Callback Function)</b>라고 하며, <b>매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수</b>를 <b>고차 함수(Higher-Order Function, HOF)</b>라고 한다.
- 매개변수를 통해 함수를 전달받거나 반환값으로 함수를 반환하는 함수를 함수형 프로그래밍 패러다임에서 고차 함수라 한다.

```javascript
// repeat 함수가 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i += 1) {
    f(i); // i를 전달하면서 함수 f를 호출
  }
}

// logAll 함수가 콜백 함수
var logAll = function(i) {
  console.log(i);
}

repeat(5, logAll); // 0 1 2 3 4

var logOdds = function(i) {
  if (i % 2) {
    console.log(i);
  }
}

repeat(5, logOdds); // 1 3
```

---

### :heavy_plus_sign: 고차 함수 - 함수를 값으로 다루는 함수

> 참고로 `log` 함수는 `console.log`를 출력하는 함수로 간주하면 됩니다.

- 함수를 인자로 받아서 실행하는 함수(applicative programming)

```javascript
const apply1 = f => f(1); // 함수를 받아서 함수에 1을 적용하는 apply1 함수
const add2 = a => a + 2;

log(apply1(add2)); // 3으로 평가됨
log(apply1(a => a - 1)); // 0으로 평가됨
```

```javascript
const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
} // n 만큼 함수 f를 실행하는 times 함수

times(log, 3); // 0, 1, 2가 차례대로 출력됨
times(a => log(a + 10), 3); // 10, 11, 12가 차례대로 출력됨
```

- 함수를 만들어서 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
  - 클로저는 '함수'와 '그 함수가 선언될 당시의 환경정보' 사이의 조합 즉, 선언 당시의 환경에 대한 정보를 담은 객체(구성 환경)를 말한다.

```javascript
const addMaker = a => b => a + b; // 함수를 리턴하는 함수
// 즉 addMaker는 함수를 리턴하는 함수이자 b => a + b 함수 내에서 a를 기억하는 클로저이다.
// 클로저는 함수가 만들어질 때 환경인 a와 b => a + b 함수 자체 객체를 함께 통칭해서 말한다.
// 함수가 함수를 리턴할 때는 클로저를 만들어서 리턴한다.

const add10 = addMaker(10);
log(add10); // b => a + b 함수를 리턴함
log(add10(5)); // 15가 출력됨
```

---

- 콜백 함수는 고차 함수에 전달되어 헬퍼 함수의 역할을 하고 콜백 함수는 함수 외부에서 고차 함수 내부로 주입되어 자유롭게 교체할 수 있다.
  - 즉, <u>고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.</u>
- 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
  - 다시 말해, 콜백 함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.
    - 참고로 엄밀히 말하면 `setTimeout` 함수의 콜백 함수가 `setTimeout` 함수를 호출하지 않는 것과 같이 모든 콜백 함수가 고차 함수에 의해 호출되는 것이 아니다.
  - 따라서 고차 함수에 콜백 함수를 전달할 때 콜백 함수를 호출하지 않고 <u>함수 자체를 전달</u>해야 한다.
- 보통은 콜백 함수가 고차 함수 내부에서만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하지만 만약 여러 번 호출되어야 한다면 별도의 콜백 함수를 정의해서 고차 함수에 넘기는 것이 좋다.
- 콜백 함수의 다양한 예시

```javascript
// (1) DOM 요소 이벤트 핸들러 함수
document.querySelector('.btn').addEventListener('click', function(){
  console.log('clicked!');
});

// (2) 비동기 처리
setTimeout(function() {
  console.log('1초 경과!');
}, 1000);

// (3) 배열 고차 함수
var res = [1, 2, 3].map(function (item) {
  return item * 3;
});
console.log(res); // [3, 6, 9]
```

<br>

### (5) 순수 함수 (Pure Function)와 비순수 함수(Impure Function)

- 용어 정의

| 용어                         | 정의                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| 순수 함수(Pure Function)     | 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수 |
| 비순수 함수(Impure Function) | 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수 |

- 순수 함수는 동일한 인수가 전달되면 언제나 동일한 값을 반환하는 함수다.
  - 즉, 순수 함수는 어떤 외부 상태에도 의존하지 않고 오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존해 반환값을 만든다.
- 반면 비순수 함수는 함수 내부에서 외부 상태를 직접 참조하여 외부 상태에 의존하기 때문에 반환값이 변할 수 있고, 외부 상태도 변경될 수 있다.
  - 함수 내부에서 외부 상태를 직접 참조하지 않더라도 매개변수를 통해 객체를 전달받으면 이 경우도 비순수 함수가 된다.

```javascript
var count = 0;

// 순수 함수
function increase(n) {
  return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2
```

```javascript
var count = 0;

// 비순수 함수
function increase() {
  return ++count;
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2
```

- 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 외부 상태를 변경하는 부수 효과를 최소화해서 불변성(immutability)을 지향하는 프로그래밍 패러다임이다.
  - 로직 내에 존재하는 조건문과 반복문을 제거해서 복잡성을 해결하며, 변수 사요을 억제하거나 생명주기를 최소화해서 상태 변경을 피해 오류를 최소화하는 것을 목표로 한다.
