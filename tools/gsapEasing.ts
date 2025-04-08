import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { EasePack } from "gsap/EasePack";

// Register all GSAP eases
gsap.registerPlugin(EasePack, CustomEase);

type EasingFunction = (v: number) => number;

const allEases = [
  "power1.in",
  "power1.out",
  "power1.inOut",
  "power2.in",
  "power2.out",
  "power2.inOut",
  "power3.in",
  "power3.out",
  "power3.inOut",
  "power4.in",
  "power4.out",
  "power4.inOut",
  "sine.in",
  "sine.out",
  "sine.inOut",
  "expo.in",
  "expo.out",
  "expo.inOut",
  "circ.in",
  "circ.out",
  "circ.inOut",
  "back.in",
  "back.out",
  "back.inOut",
  "elastic.in",
  "elastic.out",
  "elastic.inOut",
  "bounce.in",
  "bounce.out",
  "bounce.inOut",
  "rough",
  "slow",
];

const gsapEasing: Record<string, EasingFunction> = {};

for (const easeName of allEases) {
  const ease = gsap.parseEase(easeName);
  gsapEasing[easeName.replace(/\./g, "_")] = (v: number) => ease(v);
}

export default gsapEasing;
