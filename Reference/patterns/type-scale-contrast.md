# 타입 스케일 대비

**무엇** - 디스플레이와 마이크로 라벨만 두고 중간을 비운다. 크기 비율 15:1 이상, 트래킹은 반대 방향.

**왜 먹히나** - "잘 만들었다"는 인상의 대부분이 여기서 나온다. 중간 크기(24-40px)를 많이 쓰면 화면이 균질해지고 위계가 안 보인다.

```css
/* 디스플레이: 크게, 좁게, 붙여서 */
.display{
  font-size: clamp(64px, 9.5vw, 158px);
  line-height: .79;          /* 1 미만이 핵심. .78-.88 */
  letter-spacing: -.075em;   /* 클수록 더 좁혀야 함 */
  font-weight: 500;          /* 700 아님. 크면 굵을 필요 없음 */
  max-width: 12ch;
}

/* 마이크로: 작게, 넓게, 대문자, 모노 */
.label{
  font: 10px/1.5 "DM Mono", monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
}

/* 본문은 딱 하나 */
.body{ font-size: 16px; line-height: 1.55; max-width: 42ch }
```

**규칙**
- 크기가 커질수록 `letter-spacing`은 음수로, `line-height`는 1 아래로 간다
- 줄길이는 `px`가 아니라 `ch`로 잡는다. 디스플레이 `12-18ch`, 본문 `39-42ch`
- 굵기는 500 언저리. 큰 글씨에 700을 쓰면 촌스러워진다

**calm 변형** - 비율만 낮추고 구조는 유지한다. 디스플레이 `clamp(36px,5vw,64px)` / `line-height:1.05` / `letter-spacing:-.03em`, 라벨은 모노 대신 본문 폰트 11px `letter-spacing:.08em`. 대비 6:1 정도면 조용하면서 위계는 살아 있다.

**출처** - joel-jeon, capability-factory
