# React greensock

## 기본설치

```
npm i gsap
```

## 사용법

```
import { gsap } from 'gsap';

//만약 타 플러그인을 사용하고싶다면 아래 import 추가 ex : ScrollTrigger

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

```

## GSAP 옵션 기능 기록

### method

1. from : 애니메이션 설정 상태 -> 초기 상태
2. to : 애니메이션 초기상태 -> 설정상태 **from 반대**
3. fromTo : 애니메이션 설정상태 -> 설정상태 **사용자가 애니매이션 시작, 끝 구간 설정으로 구분**

```js
gsap.fromTo(
  item,
  {
    x: 100,
    y: 20,
  },
  {
    x: 200,
    y: 100,
    duration: 1,
  },
);
```

4. yoyo : 재생이 만약 반복된다면 초기상태와 변경된 속성 상태가 번갈아 재생 (repeatRefresh랑 같이쓰면 효과가 없음)
5. repeat : 반복횟수 / -1 = 무한
6. repeatRefresh : 기존 속성(vars)을 유지한상태에서 새로운 값을 추가로 덮어동작합니다. 예시 S03
7. stagger : 각각의 애니매이션 타겟대상들의 시작시간을 조정합니다. 동시작동하는 애니매이션 각 요소마다 지연을 줄수있습니다.

## callback

1. onComplete : 애니메이션은 완료된 후 출력
2. onStart : 애니메이션이 시작할때 출력
3. onUpdate : 애니매이션이 업데이트 될 때마다 호출(모든 프레임)
4. onReverseComplete : 역방향으로 진행된 애니메이션이 완료된 후 출력

## Tween

지정된 타겟이 동시에 동작하도록 하는 기능

## timeline

단계의 프레임처럼 지정된 순차대로 동작하는 기능, 애니메이션 그룹을 전체적으로 제어

## ScrollTrigger plugin

스크롤을 기반으로 애니매이션을 제작할 수 있도록 지원합니다.

```js
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // 스크롤트리거 플러그인 불러오기
gsap.registerPlugin(ScrollTrigger); // 적용

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: model.current, // 동작 기준점 타켓
    start: 'top center', // 동작 시작지점
    end: 'top top', // 동작 끝 지점
    scrub: true, // 스크롤 올릴시 복구
    markers: true, // 마커표기
  },
});

// 아래 순차들이 프레임형식으로 순차적 진행
tl.from(titleRef.current, {
  autoAlpha: 0,
  y: `-1000px`,
  duration: 1,
});
tl.to(titleRef.current, { scale: 1.5, duration: 2 }, 1); // 마지막 1을 넣은 각 to들의 프레임은 동시진행
tl.to(containerRef.current, { backgroundColor: '#000', duration: 2 }, 1);
tl.to(titleRef.current, { color: '#fff', duration: 2 }, 1);
```

## tip

### 현재 속성값 기준에서 데이터 재 리턴

**이방법 사용시 repeatRefresh을 해주면 더 자연스러운 효과가 나타난다.**
이해가 안된다면 체험후 사용권장

```js
x: '+=' + `random(1,10)`; // value에서 +=, -=를 넣으면 현재값에서 값을 더한값 또는 뺀값을 리턴합니다.
```
