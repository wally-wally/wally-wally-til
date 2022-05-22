# Chapter14. 전역 변수의 문제점

<br>

## 1. 변수의 생명 주기

### (1) 지역 변수의 생명 주기

- 변수 선언은 선언문이 어디에 있든 상관없이 가장 먼저 실행된다.
  - 다시 말해, 변수 선언은 코드가 한 줄씩 순차적으로 실행되는 시점인 런타임에 실행되는 것이 아니라 런타임 이전 단계에서 자바스크립트 엔진에 의해 먼저 실행된다.
  - 하지만 엄밀히 말하자면 이는 전역 변수에 한정된 것이다.
  - 함수 내부에서 선언한 변수는 함수가 호출된 직후에 함수 몸체의 코드가 한 줄씩 순차적으로 실행되기 이전에 자바스크립트 엔진에 의해 먼저 실행된다.
- 함수 내부에서 선언된 지역 변수는 함수가 호출되어 실행되는 동안에만 유효하다.
  - 즉, 지역변수의 생명 주기는 함수의 생명 주기와 일치한다.
- 함수 내부에서 선언된 지역 변수는 함수가 생성한 스코프에 등록된다.
  - 함수가 생성한 스코프는 렉시컬 환경이라 부르는 물리적인 실체가 있다고 했다.
  - 따라서 변수는 자신이 등록된 스코프가 소멸(메모리 해제)될 때까지 유효하다.
  - 할당된 메모리 공간은 더 이상 그 누구도 참조하지 않을 때 가비지 콜렉터에 의해 해제되어 가용 메모리 풀에 반환된다.                            
  - 누군가 스코프를 참조하고 있으면 스코프는 소멸하지 않고 생존하게 된다.

```javascript
var x = 'a';

function foo() {
  console.log(x); // (a)
  var x = 'b';
}

foo();
```

- 위 코드에서 (a)는 어떤 결과가 출력될까?
  - (a) 시점에서는`foo` 함수 내부에서 선언된 지역 변수 `x`를 참조하고 이 때 이미 선언되어 있어 `undefined`로 초기화되어 있다.
  - 따라서 지역 변수 `x` 값을 참조하여 `undefined`가 출력된다. (변수 할당문이 실행되기 이전까지는 `undefined`)

<br>

### (2) 전역 변수의 생명 주기

- 함수와 달리 전역 코드는 명시적인 호출 없이 실행된다.
  - 다시 말해, 전역 코드는 함수 호출과 같이 전역 코드를 실행하는 특별한 진입점이 없고 코드가 로드되자마자 곧바로 해석되고 실행된다.
- `var` 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 된다.
  - 이는 전역 변수의 생명 주기가 전역 객체의 생명 주기와 일치한다는 것을 말한다.
- 브라우저 환경에서 전역 객체는 `window` 이므로 브라우저 환경에서 `var` 키워드로 선언한 전역 변수는 전역 객체 `window`의 프로퍼티다.
  - 전역 객체 `window`는 웹페이지를 닫기 전까지 유효하다.
  - 따라서 브라우저 환경에서 `var` 키워드로 선언한 전역 변수는 웹페이지를 닫을 때까지 유효하다.

<br>

## 2. 전역 변수의 문제점

### (1) 암묵적 결합

- 전역 변수를 선언하게 되면 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용하게 된다.
- 변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.

<br>

### (2) 긴 생명 주기

- 전역 변수는 생명 주기가 길어서 메모리 리소스도 오랜 기간 소비한다.
- 또한 전역 변수의 상태를 변경할 수 있는 시간도 길고 기회도 많다.
- 더욱이 `var` 키워드는 변수의 중복 선언을 허용하므로 생명 주기가 긴 전역 변수는 변수 이름이 중복될 가능성이 있다.

<br>

### (3) 스코프 체인 상에서 종점에 존재

- 전역 변수는 스코프 체인 상에서 종점에 존대한다.
- 이는 변수를 검색할 때 전역 변수가 가장 마지막에 검색된다는 것을 말한다.
- 즉, 전역 변수의 검색 속도가 가장 느리다.
- 검색 속도의 차이는 그다지 크지 않지만 속도의 차이는 분명히 있다.

<br>

### (4) 네임스페이스 오염

- 자바스크립트는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유하여 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.

<br>

## 3. 전역 변수의 사용을 억제하는 방법

### (1) 즉시 실행 함수

- 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
- 이 방법을 사용하면 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용된다.

```javascript
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ...
}());

console.log(foo); // ReferenceError: foo is not defined
```

<br>

### (2) 네임스페이스 객체

- 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.
- 식별자 충돌 방지 효과는 있으나 네임스페이스 객체 자체가 전역 변수에 할당되므로 그다지 유용해 보이지는 않는다.

```javascript
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.title = 'user';
MYAPP.person = {
  name: 'wally',
  code: 12345,
};

console.log(MYAPP.title); // user
console.log(MYAPP.person.code) // 12345
```

<br>

### (3) 모듈 패턴

- 모듈 패턴은 클래스를 모방해서 고나련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
- 이는 자바스크립트의 클로저를 기반으로 동작하고 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다.
- 캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다.(정보 은닉에도 강력한 이점이 있음)

```javascript
var Counter = (function() {
  // private member
  var num = 0;
    
  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환(public member)
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
}());

// private 변수는 외부로 노출 안 됨
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
```

<br>

### (4) ES6 모듈

- ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다.
- ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
- 따라서 모듈 내에서 `var` 키워드로 선언한 변수는 더는 전역 변수가 아니며 `window` 객체의 프로퍼티도 아니다.
- 하지만 이 기능은 IE에서는 사용할 수 없으니 주의해야 한다.
- `script` 태그에 `type="module"` attribute를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다.

```html
<script type="module" scr="app.js"></script>
<script type="module" scr="lib.js"></script>
```

- 자세한 내용은 [여기](https://helloworldjavascript.net/pages/293-module.html) 혹은 [여기](https://ko.javascript.info/modules-intro)를 참고해도 좋을 것 같다.