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

## Tween

지정된 타겟이 동시에 동작하도록 하는 기능

## timeline

단계의 프레임처럼 지정된 순차대로 동작하는 기능

## ScrollTrigger plugin

스크롤을 기반으로 애니매이션을 제작할 수 있도록 지원합니다.

````js

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
    ```
````
