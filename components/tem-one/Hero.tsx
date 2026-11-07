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

      <title>ELETCO Electrical Switchgear Trading LLC</title>
      <desc>
        Powering Your World with electrical and industrial solutions across the UAE.
      </desc>

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
        href="/assets/eletco-hero.webp"
        x="0"
        y="0"
        width="600"
        height="352"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#left-clip)"
      />

      {/* Right Image */}
      <image
        href="/assets/eletco-hero-industry.webp"
        x="400"
        y="0"
        width="608"
        height="352"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#right-clip)"
      />

      {/* dark brand filter keeps the hero imagery readable with the ELETCO palette */}
      <rect
        x="0"
        y="0"
        width="1008"
        height={SEPARATOR_Y}
        fill="#000000"
        opacity="0.45"
      />

      {/* profile content from the ELETCO company presentation */}
      <g className="hero-copy">
        <text className="hero-copy-kicker" x="58" y="72">
          POWERING YOUR WORLD
        </text>
        <text className="hero-copy-title" x="58" y="122">
          ELETCO ELECTRICAL
        </text>
        <text className="hero-copy-title" x="58" y="158">
          SWITCHGEAR TRADING LLC
        </text>
        <line className="hero-copy-rule" x1="58" y1="178" x2="260" y2="178" />
        <text className="hero-copy-meta" x="58" y="207">
          QUALITY  |  RELIABILITY  |  SOLUTIONS
        </text>
        <text className="hero-copy-description" x="58" y="237">
          Electrical and industrial solutions across the UAE
        </text>
      </g>

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
