# 03-21. 서로 다른 인터페이스의 대안 클래스들

<br>

## :hand: Intro

- 클래스를 사용할 때의 큰 장점은 필요에 따라 언제든 다른 클래스로 교체할 수 있다는 것이다.
  - 단, 교체하려면 인터페이스가 같아야 한다.
  - 따라서 '함수 선언 바꾸기'로 메서드 시그니처를 일치시킨다.

- 때로는 이것만으로 부족한데, 이럴 때는 '함수 옮기기'를 이용하여 인터페이스가 같아질 때까지 필요한 동작들을 클래스 안으로 밀어 넣는다.
  - 그러나 대안 클래스들 사이에 중복 코드가 생기면 '슈퍼클래스 추출하기'를 적용할지 고려해본다.
