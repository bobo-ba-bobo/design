# Calm Dial

화려한 레퍼런스에서 **구조만** 가져오고 톤은 낮추는 방법. bosungbaik.com 같은 절제된 사이트에 쓴다.

## 전제

joel-jeon이 "잘 만들어 보이는" 이유는 라임색과 158px 헤드라인이 **아니다**. 그건 표면이다. 실제 원인은:

1. 위계가 명확하다 (중간 크기가 없다)
2. 여백이 크고 일정하다
3. 결정의 가짓수가 적다 (색 4개, 이징 1개, 호버 2개)
4. 줄길이가 글자수로 통제돼 있다

이 넷은 전부 색과 무관하다. 흑백으로 그대로 가져올 수 있다.

반대로 **못 가져오는 것**은 라임 액센트, 오렌지/라벤더 색 블록, Playfair 이탤릭, 인트로 커튼, 가로 스크롤 하이재킹, canvas 히어로다. 이건 톤을 낮추는 게 아니라 그냥 빼는 것이다.

## 변환표

| 화려한 쪽 | 차분한 쪽 | 이유 |
|---|---|---|
| 디스플레이 `clamp(64px,9.5vw,158px)` / `lh:.79` | `clamp(36px,5vw,64px)` / `lh:1.05` | 위계는 유지, 성량만 낮춤 |
| 대비율 15:1 | 대비율 6:1 | 중간이 여전히 비어 있으면 충분 |
| 액센트 라임 `#d6ff43` | 액센트 = `#000` 자기 자신 | 강조가 "색"이 아니라 "반전"이 됨 |
| 섹션 배경 오렌지/라벤더 | 명도 3단계 `#fff` / `#F7F7F7` / `#000` | 리듬은 명도만으로도 생김 |
| 여백 `22vh / 30vh` | `10vh / 14vh` | 스크롤이 과장되지 않음 |
| 모노 라벨 대문자 `+.12em` | 소문자 11px `+.06em`, `#858585` | 계측기 느낌 대신 각주 느낌 |
| `margin-left:-20vw` (그리드 밖) | `margin-left:auto` (한쪽 치우침) | 템플릿 느낌만 제거 |
| 이징 `cubic-bezier(.16,1,.3,1)` 1.1s | `cubic-bezier(.4,0,.2,1)` .5s | 오버슛 제거 |
| 클립 리빌 `yPercent:110` | `yPercent:24` + opacity 페이드 | "등장"이 아니라 "이미 있었던 것" |
| sticky 카드 겹쳐 쌓기 | sticky 유지, scale/opacity 제거 | 쌓임 대신 교체 |
| 가로 스크롤 pin | `overflow-x:auto` + scroll-snap | 하이재킹 없음 |
| 인트로 커튼 | 없음. 히어로 리빌 1회로 대체 | 대기 시간 0 |
| 그레인 `opacity:.24` | `opacity:.06` | 안 보이지만 평평함은 사라짐 |
| 그리드 오버레이 `5vw`, 알파 4% | `8vw`, 알파 2.5% | 있는지 모를 정도 |

## bosungbaik.com용 토큰

기존 [디자인 가이드](../../bosungbaik.com/docs/design-guide.md)의 3색 원칙을 토큰 구조로 옮긴 것. 값은 가이드에서 그대로 가져왔다.

```css
:root{
  /* 3색 원칙 */
  --paper:  #ffffff;
  --ink:    #000000;
  --ink-2:  #616161;   /* 보조 텍스트, 호버 */
  --ink-3:  #7a7a7a;   /* 3차 */
  --muted:  #858585;   /* 캡션, 마이크로 라벨 */
  --line:   #0000001a;

  /* 모션: 커브 하나, 시간 셋 */
  --ease:   cubic-bezier(.4, 0, .2, 1);
  --t-fast: .2s;
  --t-base: .35s;
  --t-slow: .5s;

  /* 여백 스케일 6개 */
  --s-1: 2vh;  --s-2: 5vh;  --s-3: 10vh;
  --s-4: 14vh; --s-5: 20vh; --gut: 120px;
}

/* 반전 섹션. 가이드의 On Black 값 */
.invert{
  --paper: #000000;
  --ink:   #ffffff;
  --ink-2: #e6e6e6;
  --ink-3: #bfbfbf;
  --muted: #9e9e9e;
  --line:  #ffffff1a;
  background: var(--paper);
  color: var(--ink);
}

@media (width <= 900px){ :root{ --gut: 24px } }
```

반전 규칙을 `.invert` 클래스 하나로 만들면 가이드의 "흑백 반전" 항목이 그대로 구현된다. [theme-token-block](patterns/theme-token-block.md)의 스코프 토블 방식이다.

## 타입 스케일

가이드는 행간 1.2-1.3em을 지정한다. 디스플레이만 그보다 좁게 간다.

```css
h1{ font-size: clamp(36px, 5vw, 64px); line-height: 1.02;
    letter-spacing: -.03em; font-weight: 500; max-width: 16ch }
h2{ font-size: clamp(24px, 2.6vw, 34px); line-height: 1.2;
    letter-spacing: -.02em; font-weight: 500; max-width: 20ch }
p { font-size: 16px; line-height: 1.6; max-width: 42ch; }   /* 본문만 1.6 */
.caption{ font-size: 11px; letter-spacing: .06em; color: var(--muted) }
```

`max-width`를 `ch`로 잡는 게 이 스케일에서 가장 큰 효과를 낸다. 120px 거터 안에서 줄이 너무 길어지는 걸 막아준다.

## 적용 순서

1. 토큰 블록을 넣고 하드코딩된 색을 전부 변수로 바꾼다
2. `max-width`를 px에서 `ch`로 바꾼다
3. 여백을 `--s-*` 6개 안으로 정리한다
4. 이징을 하나로 통일한다
5. 반전 섹션 하나를 만든다 (`.invert`)
6. 히어로에 [clip-line-reveal](patterns/clip-line-reveal.md) calm 변형 1회

1-4가 80%다. 5-6은 선택.

## 안 하는 것

- 컬러 액센트. 가이드의 금지 사항이고, 흑백 제약이 이 사이트의 정체성이다
- 스크롤 하이재킹
- 인트로 커튼
- 그림자로 깊이 만들기. 깊이는 반전과 여백으로 만든다
