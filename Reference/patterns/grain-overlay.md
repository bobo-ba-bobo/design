# 그레인 오버레이

**무엇** - SVG `feTurbulence` 노이즈를 인라인 데이터 URI로 얹어 필름 그레인을 만든다. 이미지 파일 없음, 요청 없음.

```css
.grain::after{
  content:"";
  position:absolute; inset:0; z-index:-2;
  pointer-events:none;
  opacity:.24;
  mix-blend-mode: soft-light;     /* 이게 핵심 */
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E");
}
.grain{ position:relative; isolation:isolate }   /* blend가 밖으로 안 새게 */
```

**왜 soft-light인가** - `normal`로 얹으면 화면 전체가 뿌옇게 더러워진다. `soft-light`는 밑에 있는 명암에 반응해서 어두운 데는 덜, 밝은 데는 더 앉는다. 실제 필름 그레인의 거동이다.

**파라미터**
| 값 | 효과 |
|---|---|
| `baseFrequency` .6-.9 | 낮을수록 굵고 뭉친 노이즈 |
| `baseFrequency` .9-1.2 | 곱고 촘촘한 그레인 (권장 .95) |
| `numOctaves` 1-4 | 높을수록 결이 복잡해짐. 4면 충분 |
| `opacity` (CSS) .1-.3 | .24 넘으면 티가 나기 시작 |

**주의**
- `isolation:isolate`를 부모에 안 주면 blend가 페이지 전체로 샌다
- 큰 면적에 깔면 저사양 기기에서 페인트 비용이 든다. 히어로 정도로 제한
- 다크 배경에서 훨씬 잘 보인다. 밝은 배경이면 `opacity`를 더 낮춘다

**같이 쓰는 층** - capability-factory는 히어로에 세 겹을 겹친다.
```css
background: radial-gradient(circle at 77% 55%, rgba(231,255,98,.07), transparent 22rem), #090909;
/* + 위의 그레인 ::after */
/* + canvas에 mask-image 페이드 */
```

**calm 변형** - `opacity:.08`, `baseFrequency:'.8'`. 눈에 안 보이지만 순색 배경의 "디지털한 평평함"은 사라진다. 흑백 사이트에서 특히 유효하다.

**출처** - capability-factory
