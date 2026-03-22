// bosungbaik.com Design Deck — 10 slides
// Auto-generated Figma plugin

const W = 1440;
const H = 900;
const GAP = 80;
const M = 120; // margin

const C = {
  black:     { r: 0,    g: 0,    b: 0    },
  white:     { r: 1,    g: 1,    b: 1    },
  darkGray:  { r: 0.2,  g: 0.2,  b: 0.2  },
  lightGray: { r: 0.88, g: 0.88, b: 0.88 }, // dividers on white
  faintGray: { r: 0.96, g: 0.96, b: 0.96 }, // subtle bg on white

  // ── On WHITE backgrounds ──────────────────────────────────
  // Text needs to be DARK enough to read on white
  wSub:   { r: 0.38, g: 0.38, b: 0.38 }, // #616161 — secondary   ✓
  wTert:  { r: 0.48, g: 0.48, b: 0.48 }, // #7A7A7A — tertiary
  wMuted: { r: 0.52, g: 0.52, b: 0.52 }, // #858585 — muted/caption

  // ── On BLACK backgrounds ──────────────────────────────────
  // Text needs to be LIGHT enough to read on black
  bSub:   { r: 0.90, g: 0.90, b: 0.90 }, // #E6E6E6 — secondary (near-white)
  bTert:  { r: 0.75, g: 0.75, b: 0.75 }, // #BFBFBF — tertiary
  bMuted: { r: 0.62, g: 0.62, b: 0.62 }, // #9E9E9E — muted
  bDiv:   { r: 0.28, g: 0.28, b: 0.28 }, // dividers on black

  gray:      { r: 0.38, g: 0.38, b: 0.38 }, // legacy alias
};

async function main() {
  // Load fonts — graceful fallback
  const fontList = [
    { family: "Inter", style: "Light" },
    { family: "Inter", style: "Regular" },
    { family: "Inter", style: "Medium" },
    { family: "Inter", style: "Bold" },
    { family: "Noto Sans KR", style: "Light" },
    { family: "Noto Sans KR", style: "Regular" },
    { family: "Noto Sans KR", style: "Bold" },
  ];
  for (const f of fontList) {
    try { await figma.loadFontAsync(f); } catch (_) {}
  }

  const page = figma.currentPage;
  page.name = "Design Deck";

  // ── Helpers ──────────────────────────────────────────────────────────────

  function mkFrame(name, idx, bg) {
    const f = figma.createFrame();
    f.name = name;
    f.resize(W, H);
    f.x = idx * (W + GAP);
    f.y = 0;
    f.fills = [{ type: "SOLID", color: bg || C.white }];
    f.clipsContent = true;
    page.appendChild(f);
    return f;
  }

  function mkRect(parent, x, y, w, h, color, opacity) {
    const r = figma.createRectangle();
    parent.appendChild(r);
    r.x = x; r.y = y;
    r.resize(w, h);
    r.fills = [{ type: "SOLID", color: color || C.black, opacity: opacity || 1 }];
    return r;
  }

  function mkText(parent, str, x, y, size, style, color, family, wrap, lineH, letterS) {
    const t = figma.createText();
    parent.appendChild(t);
    const fam = family || "Inter";
    const sty = style || "Regular";
    // Try requested font, fall back to Inter Regular
    try { t.fontName = { family: fam, style: sty }; }
    catch (_) { try { t.fontName = { family: "Inter", style: sty }; } catch (_2) { t.fontName = { family: "Inter", style: "Regular" }; } }
    t.characters = str;
    t.fontSize = size || 16;
    t.fills = [{ type: "SOLID", color: color || C.black }];
    t.x = x; t.y = y;
    if (wrap) { t.textAutoResize = "HEIGHT"; t.resize(wrap, 100); }
    if (lineH) t.lineHeight = { unit: "PERCENT", value: lineH };
    if (letterS !== undefined) t.letterSpacing = { unit: "PIXELS", value: letterS };
    return t;
  }

  // Shorthand — Korean text with Noto Sans KR
  function mkKo(parent, str, x, y, size, style, color, wrap, lineH) {
    return mkText(parent, str, x, y, size, style || "Regular", color, "Noto Sans KR", wrap, lineH);
  }

  function slideNum(f, n) {
    mkText(f, `${String(n).padStart(2,"0")} / 10`, M, 80, 12, "Light", C.bMuted);
  }

  function divider(f, y, color) {
    mkRect(f, M, y, W - M * 2, 1, color || C.lightGray);
  }

  // ── Slide 01: Cover ───────────────────────────────────────────────────────
  {
    const f = mkFrame("01 · Cover", 0, C.white);

    // Large headline
    mkText(f, "DESIGN", M, 270, 180, "Bold", C.black, "Inter", null, 90, -10);

    // Thin accent line
    mkRect(f, M, 482, 560, 1, C.lightGray);

    // Sub info
    mkText(f, "bosungbaik.com", M, 500, 17, "Light", C.gray);
    mkText(f, "Design System & Visual Language", M, 528, 13, "Light", C.wMuted);

    // Bottom right
    mkText(f, "Bosung Baik  ·  2026", W - M - 220, H - 60, 12, "Light", C.wTert);

    // Slide dot / index marker top right
    mkText(f, "01", W - M - 24, 80, 12, "Light", C.wMuted);
  }

  // ── Slide 02: Philosophy ─────────────────────────────────────────────────
  {
    const f = mkFrame("02 · Philosophy", 1, C.black);
    slideNum(f, 2);

    mkKo(f, "절제된\n깔끔함", M, 150, 108, "Bold", C.white, null, 100);

    mkText(f, "Design Philosophy", M, 418, 12, "Light", C.bMuted);
    mkRect(f, M, 444, W - M * 2, 1, C.bDiv);

    const cols = [
      ["01", "Content First",        "콘텐츠가 주인공이고\n디자인은 방해하지 않는다"],
      ["02", "Static over Dynamic",  "과한 인터랙션보다\n정돈된 정적 레이아웃"],
      ["03", "Whitespace as Design", "빈 공간이\n고급스러움을 만든다"],
    ];
    cols.forEach(([num, en, ko], i) => {
      const x = M + i * 400;
      mkText(f, num, x, 472, 10, "Light", C.bMuted);
      mkText(f, en,  x, 492, 16, "Medium", C.bSub);
      mkKo(f, ko,    x, 522, 13, "Light",  C.bTert, 360, 160);
    });
  }

  // ── Slide 03: Color Palette ───────────────────────────────────────────────
  {
    const f = mkFrame("03 · Color", 2, C.white);
    slideNum(f, 3);

    mkText(f, "Color", M, 150, 80, "Bold", C.black, "Inter", null, null, -4);
    mkKo(f, "흑/백 배경에 따라 회색이 달라진다", M, 260, 15, "Light", C.wSub);
    divider(f, 298);

    // ── Left panel: On White ──────────────────────────────────────────────
    const panelW = 560;

    mkText(f, "On White", M, 320, 11, "Medium", C.wTert);
    mkRect(f, M, 340, panelW, 1, C.lightGray);

    const onWhite = [
      { v: 0,    hex: "#000000", role: "Primary text" },
      { v: 0.38, hex: "#616161", role: "Secondary / Hover" },
      { v: 0.48, hex: "#7A7A7A", role: "Tertiary" },
      { v: 0.52, hex: "#858585", role: "Muted / Caption" },
    ];
    onWhite.forEach((s, i) => {
      const y = 358 + i * 100;
      const sw = panelW - 160;
      // Swatch bar
      mkRect(f, M, y, 120, 72, { r: s.v, g: s.v, b: s.v });
      // Labels
      mkText(f, s.hex,  M + 140, y + 10, 14, "Medium", C.black);
      mkText(f, s.role, M + 140, y + 34, 12, "Light",  C.wTert);
    });

    // ── Right panel: On Black ─────────────────────────────────────────────
    const rx = M + panelW + 80;

    mkRect(f, rx, 312, panelW + 80, H - 312, { r: 0.04, g: 0.04, b: 0.04 }); // dark bg area

    mkText(f, "On Black", rx + 20, 320, 11, "Medium", C.bMuted);
    mkRect(f, rx + 20, 340, panelW, 1, C.bDiv);

    const onBlack = [
      { v: 1,    hex: "#FFFFFF", role: "Primary text" },
      { v: 0.90, hex: "#E6E6E6", role: "Secondary" },
      { v: 0.75, hex: "#BFBFBF", role: "Tertiary" },
      { v: 0.62, hex: "#9E9E9E", role: "Muted / Caption" },
    ];
    onBlack.forEach((s, i) => {
      const y = 358 + i * 100;
      mkRect(f, rx + 20, y, 120, 72, { r: s.v, g: s.v, b: s.v });
      mkText(f, s.hex,  rx + 160, y + 10, 14, "Medium", C.white);
      mkText(f, s.role, rx + 160, y + 34, 12, "Light",  C.bTert);
    });

    mkText(f, "금지 — 컬러 액센트  ·  그라디언트  ·  과도한 섀도우", M, H - 48, 12, "Light", C.wMuted);
  }

  // ── Slide 04: Typography ─────────────────────────────────────────────────
  {
    const f = mkFrame("04 · Typography", 3, C.black);
    slideNum(f, 4);

    mkText(f, "Typography", M, 148, 72, "Bold", C.white, "Inter", null, null, -3);
    divider(f, 258, C.bDiv);

    // Font specimens
    const specimens = [
      { label: "Inter — English", sample: "Aa Bb Cc  1 2 3", fam: "Inter",        sty: "Bold" },
      { label: "Noto Sans KR — 한글 (→ Pretendard)", sample: "가나다라마바사아자차", fam: "Noto Sans KR", sty: "Bold" },
    ];
    specimens.forEach((sp, i) => {
      const y = 288 + i * 180;
      mkText(f, sp.label, M, y, 11, "Light", C.bMuted);
      mkText(f, sp.sample, M, y + 26, 56, sp.sty, C.bSub, sp.fam, null, null, -2);
    });

    divider(f, 666, C.bDiv);

    // Type scale
    const scale = [
      { name: "H1",      weight: "Bold / Medium",        usage: "페이지 제목" },
      { name: "H2",      weight: "Medium",                usage: "섹션 제목" },
      { name: "Body",    weight: "Regular / Light · 15–16px", usage: "본문" },
      { name: "Caption", weight: "ExtraLight / Light",    usage: "부가 정보" },
    ];
    scale.forEach((s, i) => {
      const x = M + i * 300;
      mkText(f, s.name,   x, 686, 11, "Light",   C.bMuted);
      mkText(f, s.weight, x, 706, 12, "Regular", C.bTert, "Inter", 280);
      mkKo(f,   s.usage,  x, 736, 11, "Light",   C.bMuted);
    });
  }

  // ── Slide 05: Layout ─────────────────────────────────────────────────────
  {
    const f = mkFrame("05 · Layout", 4, C.white);
    slideNum(f, 5);

    mkText(f, "Layout", M, 150, 80, "Bold", C.black, "Inter", null, null, -4);
    divider(f, 260);

    // Wireframe diagram area
    const dA = { x: M, y: 280, w: W - M * 2, h: 380 };
    mkRect(f, dA.x, dA.y, dA.w, dA.h, C.faintGray);

    // Desktop mockup
    const dM = { x: dA.x + 50, y: dA.y + 40, w: 560, h: 300 };
    mkRect(f, dM.x, dM.y, dM.w, dM.h, C.white);

    // Margin indicators
    mkRect(f, dM.x,        dM.y, 50, dM.h, { r: 0.92, g: 0.92, b: 0.92 });
    mkRect(f, dM.x + dM.w - 50, dM.y, 50, dM.h, { r: 0.92, g: 0.92, b: 0.92 });

    // Content blocks
    const cx = dM.x + 60; const cw = dM.w - 120;
    mkRect(f, cx, dM.y + 20, cw, 14, { r: 0.88, g: 0.88, b: 0.88 }); // nav
    mkRect(f, cx, dM.y + 54, cw, 70, { r: 0.82, g: 0.82, b: 0.82 }); // hero
    mkRect(f, cx, dM.y + 144, cw,      10, { r: 0.88, g: 0.88, b: 0.88 });
    mkRect(f, cx, dM.y + 162, cw * 0.72, 10, { r: 0.88, g: 0.88, b: 0.88 });
    mkRect(f, cx, dM.y + 180, cw * 0.5,  10, { r: 0.88, g: 0.88, b: 0.88 });

    // Margin label
    mkText(f, "120px", dM.x + 4, dM.y + dM.h / 2 - 6, 10, "Light", C.gray);

    // Desktop label
    mkText(f, "Desktop — 1200px content width", dM.x, dM.y + dM.h + 12, 11, "Light", C.gray);

    // Specs table (right side)
    const tX = dA.x + 660;
    const specs = [
      { device: "Desktop", width: "1200px", margin: "120px" },
      { device: "Tablet",  width: "810px",  margin: "~60px" },
      { device: "Mobile",  width: "390px",  margin: "40px"  },
    ];
    mkText(f, "Breakpoints", tX, dA.y + 16, 11, "Medium", C.wSub);
    mkRect(f, tX, dA.y + 38, 520, 1, C.lightGray);
    specs.forEach((s, i) => {
      const y = dA.y + 50 + i * 80;
      mkText(f, s.device, tX,       y, 15, "Regular", C.black);
      mkText(f, s.width,  tX + 160, y, 14, "Light",   C.gray);
      mkText(f, s.margin, tX + 300, y, 14, "Light",   C.gray);
      mkRect(f, tX, y + 28, 520, 1, C.lightGray);
    });

    // Bottom caption
    mkKo(f, "단일 열 구조  ·  선형 레이아웃  ·  Flexbox 기반  ·  100px+ 섹션 간 여백", M, H - 54, 12, "Light", C.wMuted);
  }

  // ── Slide 06: Whitespace ─────────────────────────────────────────────────
  {
    const f = mkFrame("06 · Whitespace", 5, C.black);
    slideNum(f, 6);

    mkKo(f, "여백을\n아끼지 않는다",
      M, H / 2 - 220, 112, "Bold", C.white, null, 100);

    mkRect(f, M, H / 2 + 50, 200, 1, C.bDiv);

    mkText(f, "Whitespace is not empty space —", M, H / 2 + 68, 18, "Light", C.bTert);
    mkText(f, "it is design.",                   M, H / 2 + 96, 18, "Light", C.bTert);

    mkKo(f, "빈 공간을 두려워하지 않는다", M, H - 60, 12, "Light", C.bMuted);
  }

  // ── Slide 07: Interaction ────────────────────────────────────────────────
  {
    const f = mkFrame("07 · Interaction", 6, C.white);
    slideNum(f, 7);

    mkText(f, "Interaction", M, 150, 80, "Bold", C.black, "Inter", null, null, -4);
    mkKo(f, "과하지 않게 — 호버 효과 정도가 적정선", M, 262, 15, "Light", C.gray);
    divider(f, 298);

    // Allowed cards
    mkText(f, "Allowed", M, 322, 11, "Light", C.wTert);
    const allowed = [
      { name: "Link Hover",        desc: "Black → Gray 색상 전환\n+ 언더라인",         timing: "0.3–0.4s  ease / cubic-bezier" },
      { name: "Page Transition",   desc: "페이지 전환 시\n부드러운 fade",              timing: "subtle" },
      { name: "Color Transition",  desc: "색상 전환 애니메이션\n(특정 섹션 한정)",     timing: "0.4s  cubic-bezier" },
    ];
    allowed.forEach((a, i) => {
      const x = M + i * 376; const y = 350;
      mkRect(f, x, y, 348, 170, C.faintGray);
      mkText(f, a.name, x + 20, y + 20, 15, "Medium", C.black);
      mkKo(f,   a.desc, x + 20, y + 48, 13, "Light",  C.gray, 308, 160);
      mkText(f, a.timing, x + 20, y + 138, 11, "Light", C.wMuted);
    });

    // Not allowed
    mkText(f, "Not Allowed", M, 556, 11, "Light", C.wTert);
    const denied = ["과도한 패럴랙스 스크롤", "무거운 로딩 애니메이션", "모달 / 팝업", "자동 재생 미디어"];
    denied.forEach((d, i) => {
      const x = M + i * 290; const y = 580;
      mkRect(f, x, y, 264, 48, C.faintGray);
      mkKo(f, d, x + 16, y + 14, 12, "Light", C.wTert, 232);
    });

    // Note
    mkText(f, "예외: 특정 페이지에서는 스크롤 애니메이션, 마우스 추적 등 허용 — 단, 전체 톤을 벗어나지 않는 범위", M, H - 54, 11, "Light", C.wMuted, "Noto Sans KR", W - M * 2);
  }

  // ── Slide 08: References ─────────────────────────────────────────────────
  {
    const f = mkFrame("08 · References", 7, C.black);
    slideNum(f, 8);

    mkText(f, "References", M, 150, 72, "Bold", C.white, "Inter", null, null, -3);
    divider(f, 260, C.bDiv);

    const refs = [
      {
        name: "itsdpark.com",
        badge: "Most Preferred",
        points: ["극도의 미니멀리즘 + 프로페셔널함", "순수 텍스트 링크만으로 구성", "table 형식으로 성과 수치화", "진행 중인 작업도 투명하게 공개"],
      },
      {
        name: "jihoon.im",
        badge: "Layout Reference",
        points: ["섹션 간 120px 대규모 갭", "중앙 정렬 + max-width 가독성", "정제되고 신뢰감 있는 분위기", "키워드에 미묘한 gray 톤 강조"],
      },
      {
        name: "annamona.co",
        badge: "Interaction Reference",
        points: ["아코디언 접기/펼치기 구조", "색상 전환 200ms 애니메이션", "다크/라이트 모드 지원", "정보 밀도 유연하게 조절"],
      },
    ];

    refs.forEach((r, i) => {
      const x = M + i * 400;
      mkText(f, r.badge, x, 280, 10, "Light", C.bMuted);
      mkText(f, r.name,  x, 300, 22, "Medium", C.white);
      mkRect(f, x, 338, 370, 1, C.bDiv);
      r.points.forEach((pt, j) => {
        mkKo(f, `— ${pt}`, x, 354 + j * 62, 13, "Light", C.bTert, 370, 140);
      });
    });
  }

  // ── Slide 09: 6 Principles ───────────────────────────────────────────────
  {
    const f = mkFrame("09 · Principles", 8, C.white);
    slideNum(f, 9);

    mkText(f, "6 Principles", M, 150, 72, "Bold", C.black, "Inter", null, null, -4);
    divider(f, 260);

    const principles = [
      ["01", "흑/백/회색만 쓴다",       "색상에서 오는 깔끔함이 핵심"],
      ["02", "여백을 아끼지 않는다",     "빈 공간이 고급스러움을 만든다"],
      ["03", "텍스트가 디자인이다",      "폰트와 크기 대비로 계층을 만든다"],
      ["04", "인터랙션은 절제한다",      "호버 정도가 적정, 특별한 페이지에서만 예외"],
      ["05", "흑백 반전은 의도적으로",   "섹션 구분과 시각적 리듬을 위해 사용"],
      ["06", "itsdpark.com을 기준점으로", "극도의 미니멀 + 프로페셔널이 지향점"],
    ];

    principles.forEach(([num, title, desc], i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = M + col * 620;
      const y = 286 + row * 178;
      divider(f, y, C.lightGray);
      mkText(f, num, x, y + 14, 10, "Light", C.wTert);
      mkKo(f, title, x, y + 32, 22, "Bold",  C.black, 580);
      mkKo(f, desc,  x, y + 70, 13, "Light", C.wSub,  580, 150);
    });
  }

  // ── Slide 10: End ────────────────────────────────────────────────────────
  {
    const f = mkFrame("10 · End", 9, C.black);

    // Big domain name
    mkText(f, "bosung\nbaik.com", M, 240, 128, "Bold", C.white, "Inter", null, 90, -6);

    mkRect(f, M, 570, 280, 1, C.bDiv);

    mkText(f,  "Bosung Baik",                     M, 590, 16, "Regular", C.bSub);
    mkText(f,  "Investment Associate, Mashup Ventures", M, 616, 13, "Light",   C.bTert);
    mkText(f,  "bbs@mashupventures.co",            M, 646, 13, "Light",   C.bTert);
    mkText(f,  "linkedin.com/in/bosungbaik",       M, 668, 13, "Light",   C.bTert);

    mkText(f, "10 / 10", W - M - 50, H - 60, 12, "Light", C.bMuted);
  }

  // Zoom to fit all slides
  figma.viewport.scrollAndZoomIntoView(page.children);
  figma.closePlugin("Design Deck 생성 완료 — 10 slides");
}

main().catch(err => {
  figma.closePlugin(`오류: ${err.message}`);
});
