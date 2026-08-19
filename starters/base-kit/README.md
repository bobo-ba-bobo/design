# base-kit

새 사이트 시작할 때 복사해 넣는 두 파일. npm 프로젝트가 아니라 드롭인이다. 의존성이 썩지 않는다.

```
tokens.css   토큰 4개 + 모션 3개 + 여백 6개 + 타입 스케일 + 호버 2종 + reduced-motion
motion.js    GSAP ScrollTrigger 최소 설정, 폴백 포함
```

## 쓰기

```html
<link rel="stylesheet" href="tokens.css">
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script type="module" src="motion.js"></script>
```

GSAP를 안 붙이면 `motion.js`가 IntersectionObserver 폴백으로 리빌만 처리한다.

## 데이터 속성

| 속성 | 하는 일 |
|---|---|
| `data-reveal` | 안의 `.clip > span`을 한 줄씩 올림 |
| `data-reveal-now` | 스크롤 대기 없이 즉시 (히어로용) |
| `data-progress` | scaleX 진행 바 |
| `data-stack` | 자식 카드에 축소/페이드 |
| `data-rail` | 가로 스크롤 핀. 모바일에서 자동 비활성 |

## 마크업 예시

```html
<h1 class="display" data-reveal data-reveal-now>
  <span class="clip"><span>Continue past</span></span>
  <span class="clip"><span>the edge</span></span>
</h1>

<div data-stack>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

## 톤 바꾸기

`tokens.css` 맨 위 변수 4개만 바꾼다. 차분하게 가려면 [calm-dial.md](../../Reference/calm-dial.md)의 토큰 블록으로 통째 교체.
