디자인 패턴 실습 보고서


번호 | 패턴명 | 파일명 | 주요 내용
-----|--------|--------|---------
1 | 싱글톤 (Singleton) | Singleton.ts | 인스턴스를 하나만 생성하고 전역적으로 공유
2 | 팩토리 메서드 (Factory Method) | Factory.ts | 객체 생성 로직을 하위 클래스에 위임
3 | 어댑터 (Adapter) | Adapter.ts | 서로 다른 인터페이스를 변환하여 연결
4 | 데코레이터 (Decorator) | Decorator.ts | 기존 객체에 동적으로 기능을 추가
5 | 옵저버 (Observer) | Observer.ts | 주체의 상태 변화를 여러 객체에 통보
6 | 비지터 (Visitor) | Visitor.ts | 데이터 구조와 연산을 분리하여 확장 용이

실행 결과

모든 예제는 다음 명령으로 실행하였다.

npx ts-node 파일명.ts

예시 실행 결과는 images 폴더에 저장하였다.

패턴 | 실행 명령 | 결과 이미지
------|-------------|-------------
Singleton | npx ts-node Singleton.ts | src/patterns/images/Singleton.png
Factory | npx ts-node Factory.ts | src/patterns/images/Factory.png
Adapter | npx ts-node Adapter.ts | src/patterns/images/Adapter.png
Decorator | npx ts-node Decorator.ts | src/patterns/images/Decorator.png
Observer | npx ts-node Observer.ts | src/patterns/images/Observer.png
Visitor | npx ts-node Visitor.ts | src/patterns/images/Visitor.png

 디자인 패턴 세 가지 요약

1) Builder: c -> cpp

2) Facade: 랜덤 성경 말씀 뽑기

3) Chain of Responsibility: 저녁 메뉴 추천(조건에 따라)
