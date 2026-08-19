# 스코프 토큰 블록으로 테마 갈아끼우기

**무엇** - 팔레트를 변수 4-6개로 좁혀두면 사이트 전체 리스킨이 그 변수만 덮어쓰는 일이 된다.

**두 가지 형태**

```css
/* A. 통째 교체 (joel-jeon) - 파일 뒤쪽에 두 번째 :root */
:root{ --ink:#11110f; --paper:#e9e6df; --acid:#d6ff43; --line:#11110f2e;
       font-family: Manrope }
/* ...전체 스타일... */
:root{ --ink:#f4f4f4; --paper:#050505; --acid:#fff;    --line:#27272a;
       font-family: Geist }
/* + 40줄 정도의 섹션별 오버라이드 */

/* B. 스코프별 테마 (capability-factory) - 라우트/섹션에 클래스 */
.continuum{ --acid:#e7ff62; --ink:#0a0a0a; --paper:#efebe0 }
.aura     { --acid:#06b6d4; --ink:#030712; --paper:#f8fafc;
            --aura-primary:#4f46e5 }
```

B가 더 낫다. A는 CSS 순서에 의존해서 깨지기 쉽다.

**다크모드에 그대로 쓰기**

```css
:root{ --ink:#111; --paper:#fafafa; --line:#1111111f }

@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --ink:#f4f4f4; --paper:#050505; --line:#ffffff1f;
  }
}
:root[data-theme="dark"]{
  --ink:#f4f4f4; --paper:#050505; --line:#ffffff1f;
}
```

토글과 시스템 설정 양쪽을 다 잡으려면 블록 세 개가 필요하다. 색은 반드시 bare `:root`에 먼저 정의하고 미디어 쿼리에선 덮어쓰기만 한다.

**전제** - 색을 하드코딩한 자리가 하나라도 있으면 이 방식이 안 통한다. joel-jeon도 섹션 배경(`#ff6635`, `#c7baff`)은 리터럴이라 다크 테마에서 따로 오버라이드해야 했다.

**출처** - capability-factory (주), joel-jeon
