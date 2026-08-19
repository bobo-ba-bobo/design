# Patterns

레퍼런스 사이트에서 뽑아낸 재사용 가능한 기법. 각 파일은 붙여넣을 수 있는 코드와 **calm 변형**(톤을 낮춘 버전)을 같이 담는다.

## 기초 (거의 항상 쓴다)

| 패턴 | 한 줄 |
|---|---|
| [type-scale-contrast](type-scale-contrast.md) | 디스플레이와 마이크로 라벨만, 중간을 비운다 |
| [vh-spacing-rhythm](vh-spacing-rhythm.md) | 세로 여백을 스크롤 시간으로 잰다 |
| [single-accent-token](single-accent-token.md) | 팔레트 변수 4개, 액센트 하나 |
| [asymmetric-measure](asymmetric-measure.md) | 가운데 정렬을 버리고 줄길이는 ch로 |
| [motion-discipline](motion-discipline.md) | 이징 커브 하나, duration 세 개 |

## 구조

| 패턴 | 한 줄 |
|---|---|
| [color-block-sections](color-block-sections.md) | 섹션마다 full-bleed 배경, 구분선 없음 |
| [mono-micro-labels](mono-micro-labels.md) | 9-11px 모노 라벨을 네 코너에 |
| [theme-token-block](theme-token-block.md) | 스코프 토큰으로 리스킨 / 다크모드 |

## 텍스처

| 패턴 | 한 줄 |
|---|---|
| [grain-overlay](grain-overlay.md) | SVG 노이즈 + soft-light |
| [grid-overlay-masked](grid-overlay-masked.md) | 옅은 격자 + 페이드 마스크, 궤도 링 |

## 모션

| 패턴 | 한 줄 | 비용 |
|---|---|---|
| [clip-line-reveal](clip-line-reveal.md) | 헤드라인 한 줄씩 올라옴 | 낮음 |
| [scroll-progress-bar](scroll-progress-bar.md) | 1px 진행 표시 | 낮음 |
| [sticky-card-stack](sticky-card-stack.md) | 카드가 겹쳐 쌓임 | 중간, CSS만으로 80% |
| [css-var-runtime-channel](css-var-runtime-channel.md) | JS는 변수만, 스타일은 CSS가 | 중간 |
| [horizontal-rail](horizontal-rail.md) | 세로 스크롤을 가로 이동으로 | 높음, 하이재킹 |
| [intro-curtain](intro-curtain.md) | 로드 커튼 | 높음, 대체로 비추천 |

## 쓰는 순서

1. 기초 5개를 먼저 적용한다. 이것만으로 대부분의 "잘 만든 느낌"이 나온다
2. 구조 패턴으로 섹션을 나눈다
3. 텍스처는 히어로에만
4. 모션은 비용 낮은 것부터. 낮음 두 개면 충분한 경우가 많다

## 새 패턴 추가 기준

- 서로 다른 사이트 **2곳 이상**에서 봤을 때만 추가한다. 한 곳에서만 본 건 그 사이트 spec.md에 남긴다
- 반드시 calm 변형을 같이 쓴다. 낮출 방법이 없는 기법은 재사용 가치가 낮다는 뜻이다
