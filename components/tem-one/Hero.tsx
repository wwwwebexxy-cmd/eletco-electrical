import { INK } from "./shared";
import "./Hero.css";

const BAND_PATH = "M 445 0 L 590 222 L 533 352";
const SEPARATOR_Y = 352;

export function WireframeHero() {
  return (
    <svg
      viewBox="0 0 1008 406"
      className="hero-svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="ELETCO electrical products and UAE industrial solutions"
    >
      <defs>
        <clipPath id="left-clip">
          <polygon points="0,0 442,0 587,222 530,352 0,352" />
        </clipPath>
        <clipPath id="right-clip">
          <polygon points="448,0 1008,0 1008,352 536,352 593,222" />
        </clipPath>
      </defs>

      {/* faint full-width divider under the hero */}
      <line
        x1={0}
        y1={SEPARATOR_Y}
        x2={1008}
        y2={SEPARATOR_Y}
        stroke="#E21B2D"
        strokeWidth={2}
      />

      {/* Left Image */}
      <image
        href="/assets/eletco-hero.png"
        x="0"
        y="0"
        width="600"
        height="352"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#left-clip)"
      />

      {/* Right Image */}
      <image
        href="/assets/eletco-switchgear.png"
        x="400"
        y="0"
        width="608"
        height="352"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#right-clip)"
      />

      {/* central chevron band */}
      <path
        className="hero-band"
        d={BAND_PATH}
        fill="none"
        stroke={INK}
        strokeWidth={6}
        strokeLinejoin="miter"
      />
      <path
        className="hero-band hero-band-highlight"
        d={BAND_PATH}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinejoin="miter"
      />
    </svg>
  );
}
