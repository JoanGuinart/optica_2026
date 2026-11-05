/**
 * Moviment de la web (GSAP).
 *
 * Atributs que es poden posar a l'HTML:
 *  data-split            → títol que entra línia a línia (amb màscara)
 *  data-reveal           → element que apareix suaument en fer scroll
 *  data-reveal-stagger   → els fills apareixen un darrere l'altre
 *  data-lent             → foto que es descobreix com si s'obrís una lent
 *  data-parallax="0.12"  → la imatge es desplaça lleugerament amb el scroll
 *  data-compta="25"      → número que compta fins al valor
 *  data-etiqueta         → etiqueta de preu que es balanceja en entrar
 *
 * Si l'usuari té "reduir moviment" activat, tot es mostra directament.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

declare global {
  interface Window {
    __moviment?: boolean;
  }
}

gsap.registerPlugin(ScrollTrigger, SplitText);
window.__moviment = true;

const EASE = "expo.out";
const $$ = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel);

const mm = gsap.matchMedia();

mm.add(
  {
    motion: "(prefers-reduced-motion: no-preference)",
    reduce: "(prefers-reduced-motion: reduce)",
    desktop: "(min-width: 768px)",
  },
  (ctx) => {
    const { motion, desktop } = ctx.conditions as Record<string, boolean>;

    if (!motion) {
      // Sense animacions: ho deixem tot visible i amb els números finals
      document.documentElement.classList.remove("js");
      $$("[data-compta]").forEach((el) => (el.textContent = el.dataset.compta ?? el.textContent));
      return;
    }

    // ── Títols línia a línia ─────────────────────────────────────────
    document.fonts.ready.then(() => {
      $$("[data-split]").forEach((el) => {
        const inHero = !!el.closest("[data-hero]");
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "linia",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 105,
              duration: 1.1,
              ease: EASE,
              stagger: 0.09,
              delay: inHero ? 0.1 : 0,
              scrollTrigger: inHero ? undefined : { trigger: el, start: "top 88%", once: true },
            });
          },
        });
      });
    });

    // ── Aparicions en fer scroll ─────────────────────────────────────
    gsap.set("[data-reveal], [data-reveal-stagger] > *", { y: 28 });
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1, ease: EASE, stagger: 0.08, overwrite: true }),
    });
    $$("[data-reveal-stagger]").forEach((group) => {
      gsap.to(group.children, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: EASE,
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      });
    });

    // ── Fotos que s'obren com una lent ───────────────────────────────
    $$("[data-lent]").forEach((frame) => {
      const img = frame.querySelector("img");
      const inHero = !!frame.closest("[data-hero]");
      const tl = gsap.timeline({
        defaults: { duration: 1.5, ease: "expo.inOut" },
        scrollTrigger: inHero ? undefined : { trigger: frame, start: "top 80%", once: true },
        delay: inHero ? 0.25 : 0,
      });
      tl.fromTo(frame, { clipPath: "circle(0% at 50% 55%)" }, { clipPath: "circle(75% at 50% 50%)" });
      if (img) tl.from(img, { scale: 1.25, duration: 2, ease: "expo.out" }, 0.2);
      tl.set(frame, { clipPath: "none" });
    });

    // ── Paral·laxi suau (només pantalles grans) ──────────────────────
    if (desktop) {
      $$("[data-parallax]").forEach((el) => {
        const amount = parseFloat(el.dataset.parallax || "0.1");
        gsap.fromTo(
          el,
          { yPercent: -amount * 50 },
          {
            yPercent: amount * 50,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("[data-lent]") ?? el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }

    // ── Números que compten ──────────────────────────────────────────
    $$("[data-compta]").forEach((el) => {
      const target = parseFloat(el.dataset.compta || "0");
      const decimals = (el.dataset.compta?.split(".")[1] || "").length;
      const sep = el.dataset.sep || ",";
      const obj = { v: 0 };
      if (target === 0) return;
      el.textContent = (0).toFixed(decimals).replace(".", sep);
      gsap.to(obj, {
        v: target,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = obj.v.toFixed(decimals).replace(".", sep);
        },
      });
    });

    // ── Etiquetes de preu que es balancegen ──────────────────────────
    ScrollTrigger.batch("[data-etiqueta]", {
      start: "top 88%",
      once: true,
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { autoAlpha: 0, rotation: (i) => (i % 2 ? 9 : -9), y: 40 },
          {
            autoAlpha: 1,
            rotation: (_i: number, el: HTMLElement) => parseFloat(el.dataset.etiqueta || "0"),
            y: 0,
            transformOrigin: "50% 0%",
            duration: 1.6,
            ease: "elastic.out(1, 0.45)",
            stagger: 0.12,
          },
        ),
    });
  },
);

// Quan carreguen imatges tardanes, recalcular posicions
window.addEventListener("load", () => ScrollTrigger.refresh());
