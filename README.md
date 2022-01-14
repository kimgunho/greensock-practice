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
