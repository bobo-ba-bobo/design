# 모노 마이크로 라벨

**무엇** - 9-11px 모노스페이스 대문자 라벨을 구조물처럼 배치한다. 인덱스 번호, 좌표, 섹션 이름, 상태 표시.

**왜 먹히나** - 노력 대비 효과가 가장 큰 기법. 계측기/도면 같은 인상을 주고, 디스플레이 타입과의 대비를 만들어준다 ([type-scale-contrast.md](type-scale-contrast.md)).

```css
.label{
  font: 10px/1.5 "DM Mono", "JetBrains Mono", monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
}
```

**쓰는 자리**
```html
<span class="label">01</span>              <!-- 아이템 인덱스 -->
<span class="label">52.4831° N</span>      <!-- 좌표 (장식) -->
<span class="label">Selected work / 2026</span>
<span class="label">Scroll <i></i></span>  <!-- 스크롤 큐 + 선 -->
<span class="label">Available for work</span>
```

**배치** - 코너에 절대 위치로 박는다. 콘텐츠 흐름 안이 아니라 프레임에 붙어 있어야 "계측기" 느낌이 난다.

```css
.hero-kicker    { position:absolute; top:118px;   left:3.2vw }
.hero-coordinate{ position:absolute; top:118px;   right:3.2vw; text-align:right }
.hero-index     { position:absolute; bottom:34px; right:3.2vw }
.scroll-cue     { position:absolute; bottom:34px; left:3.2vw }
```

네 코너를 다 쓰면 프레임이 완성된다.

**라이브 도트**
```css
.available i{
  width:7px; height:7px; border-radius:50%;
  background:#56b75e; box-shadow: 0 0 0 5px #56b75e21;   /* 알파 후광 */
}
```

**calm 변형** - 모노를 유지하되 대문자와 트래킹을 줄인다. 11px, `letter-spacing:.06em`, 소문자. 또는 본문 폰트로 11px `color:#999`. 코너 배치는 그대로 가져가도 조용하다.

**출처** - joel-jeon, capability-factory
