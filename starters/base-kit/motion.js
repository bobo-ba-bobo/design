/* base-kit / motion.js
   GSAP + ScrollTrigger 최소 설정. 없으면 IntersectionObserver 폴백.
   <script type="module" src="motion.js"></script> */

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const NARROW  = matchMedia("(max-width: 767px)").matches;

export function init({ gsap, ScrollTrigger } = window) {
  if (REDUCED) return;                       /* 아무것도 만들지 않는다 */

  if (!gsap) return fallback();
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "expo.out", duration: 1.1 });

  /* 1. 헤드라인 클립 리빌 */
  document.querySelectorAll("[data-reveal]").forEach(el => {
    const lines = el.querySelectorAll(".clip > span");
    gsap.from(lines, {
      yPercent: 110,
      stagger: 0.08,
      scrollTrigger: el.hasAttribute("data-reveal-now")
        ? undefined                          /* 히어로는 즉시 */
        : { trigger: el, start: "top 80%" }
    });
  });

  /* 2. 스크롤 진행 바 */
  const bar = document.querySelector("[data-progress]");
  if (bar) gsap.to(bar, {
    scaleX: 1, ease: "none",
    scrollTrigger: { trigger: document.body, start:"top top", end:"bottom bottom", scrub:true }
  });

  /* 3. sticky 카드 스택 깊이감 (CSS가 이미 쌓는다. 여긴 축소만) */
  const cards = gsap.utils.toArray("[data-stack] > *");
  cards.forEach((card, i) => {
    if (i === cards.length - 1) return;
    gsap.to(card, {
      scale: .92, opacity: .6, ease: "none",
      scrollTrigger: { trigger: cards[i+1], start:"top bottom", end:"top top", scrub:true }
    });
  });

  /* 4. 가로 레일. 모바일에서는 만들지 않는다 */
  const rail = document.querySelector("[data-rail]");
  if (rail && !NARROW) {
    const dist = () => rail.scrollWidth - innerWidth;
    gsap.to(rail, {
      x: () => -dist(), ease: "none",
      scrollTrigger: {
        trigger: rail.parentElement, pin: true, scrub: 1,
        end: () => "+=" + dist(), invalidateOnRefresh: true
      }
    });
  }
}

/* GSAP 없을 때: 리빌만 CSS 전환으로 */
function fallback(){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  }), { threshold: .25 });
  document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
}

if (document.readyState !== "loading") init();
else addEventListener("DOMContentLoaded", () => init());
