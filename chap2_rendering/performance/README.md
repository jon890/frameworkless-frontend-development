# 사용자 정의 성능 위젯

- requestAnimationFrame 콜백을 사용해 현재 렌더링 사이클과 다음 사이클 사이의 시간을 추적하고
- 콜백이 1초 내에 호출되는 횟수를 추적하면 된다

- 책의 내용에 더불어 전역 오염을 방지하기 위해서 PerformanceMonitor 내부에 변수들을 감췄다

- 그로 인해 this를 바인딩 하는 방법을 더욱더 공부하게 되었다
- Function.bind(thisArg) => 해당 argument를 this에 bind한 함수를 반환
- Function.call(thisArg) => 해당 argument를 this에 bind하고 함수를 실행
