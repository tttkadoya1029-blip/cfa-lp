'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { CTAButton } from '@/components/CTAButton'

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: '⚡',
    title: '圧倒的効率の極秘学習ツール',
    sub: '日本語要点集 × 解説動画で英文を高速理解',
  },
  {
    icon: '🎯',
    title: '最適な学習ペースメーカー',
    sub: '個別面談と隔週キャッチアップで伴走サポート',
  },
  {
    icon: '💬',
    title: 'いつでも使えるQ&Aチャット',
    sub: '疑問をその場で即解消。孤独な学習から解放',
  },
]

const stats = [
  { value: '1,600問+', label: '演習問題サポート' },
  { value: '4ヶ月',   label: '短期集中合格実績' },
  { value: '6科目',   label: '日本語要点集完備' },
  { value: '多数輩出', label: '合格者を継続サポート' },
]

// Very subtle floating gold particles
const particles = [
  { left: '11%',  top: '17%', size: 2,   delay: 0,   dur: 11 },
  { left: '67%',  top: '11%', size: 1.5, delay: 2.8, dur: 13 },
  { left: '83%',  top: '60%', size: 2.5, delay: 1.2, dur: 15 },
  { left: '29%',  top: '77%', size: 1.5, delay: 4.0, dur: 12 },
  { left: '91%',  top: '33%', size: 2,   delay: 2.2, dur: 14 },
  { left: '48%',  top: '88%', size: 1.5, delay: 5.5, dur: 10 },
]

// Apple-style premium ease
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ─── Sub-components ──────────────────────────────────────────────────────────

/** Fine-grain noise texture for depth (SVG feTurbulence) */
function NoiseOverlay() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{ opacity: 0.032 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="hero-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-noise)" />
    </svg>
  )
}

/** Gold ambient blob that slowly breathes */
function BreathingGlow({
  style,
  from,
  to,
  delay = 0,
  duration = 7,
}: {
  style: React.CSSProperties
  from: number
  to: number
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute pointer-events-none rounded-full"
      style={style}
      initial={{ opacity: from }}
      animate={{ opacity: [from, to, from] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/** Tiny gold dust particle with slow drift */
function Particle({
  left, top, size, delay, dur,
}: { left: string; top: string; size: number; delay: number; dur: number }) {
  return (
    <motion.div
      aria-hidden
      className="absolute pointer-events-none rounded-full"
      style={{ left, top, width: size, height: size, background: '#D6B14A' }}
      animate={{ opacity: [0, 0.2, 0], y: [0, -16, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/**
 * Mask-reveal: children slide up from behind a clip.
 * Gives a premium "curtain lift" text effect.
 */
function RevealLine({
  children,
  delay,
  className = '',
}: {
  children: React.ReactNode
  delay: number
  className?: string
}) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.span
        className={`block ${className}`}
        initial={{ y: '108%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  // Subtle parallax: card drifts upward slowly as user scrolls
  const cardY    = useTransform(scrollY, [0, 700], [0, -28])
  // Background layer drifts even more slowly
  const bgDrift  = useTransform(scrollY, [0, 700], [0, 14])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(138deg, #061426 0%, #0C1F3C 52%, #071830 100%)' }}
    >
      {/* ── Background layer stack ───────────────────────────────────────── */}

      {/* 1. Fine noise grain */}
      <NoiseOverlay />

      {/* 2. Static dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1.5px 1.5px, rgba(214,177,74,0.16) 1.5px, transparent 0)',
          backgroundSize: '38px 38px',
          opacity: 0.42,
        }}
      />

      {/* 3. Slow-parallax deep-navy overlay */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          y: bgDrift,
          background:
            'radial-gradient(ellipse 70% 55% at 22% 38%, rgba(8,38,80,0.38) 0%, transparent 68%)',
        }}
      />

      {/* 4. Breathing gold glow – upper-left */}
      <BreathingGlow
        from={0.07} to={0.16} delay={0} duration={8}
        style={{
          top: '12%', left: '6%',
          width: 440, height: 440,
          background: 'radial-gradient(circle, rgba(214,177,74,0.12) 0%, transparent 70%)',
          filter: 'blur(44px)',
        }}
      />

      {/* 5. Breathing gold glow – lower-right (phase-shifted) */}
      <BreathingGlow
        from={0.05} to={0.11} delay={4} duration={10}
        style={{
          bottom: '18%', right: '12%',
          width: 380, height: 380,
          background: 'radial-gradient(circle, rgba(214,177,74,0.08) 0%, transparent 70%)',
          filter: 'blur(52px)',
        }}
      />

      {/* 6. Floating particles */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-5 md:px-10 py-24 md:py-20 relative z-10 w-full">

        {/* Main 2-col grid */}
        <div className="grid lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_468px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div>

            {/* Label badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-8"
              style={{
                border: '1px solid rgba(214,177,74,0.38)',
                background: 'rgba(214,177,74,0.07)',
              }}
            >
              {/* Pulsing dot */}
              <motion.span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#D6B14A' }}
                animate={{ opacity: [1, 0.28, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: '#D6B14A' }}
              >
                CFA Level I Leveraged Support Course
              </span>
            </motion.div>

            {/* Headline – mask-reveal per line */}
            <h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.12 }}
            >
              <RevealLine delay={0.1}>
                CFA Level 1 合格まで
              </RevealLine>
              <RevealLine delay={0.26}>
                <span
                  style={{
                    background: 'linear-gradient(95deg, #D6B14A 0%, #F0D472 48%, #BE8E20 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                >
                  徹底サポート
                </span>
              </RevealLine>
            </h1>

            {/* Gold accent line – draw-in */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.44, ease: 'easeOut' }}
              className="h-[3px] w-14 rounded-full mb-7"
              style={{ background: 'linear-gradient(90deg, #D6B14A, #F0D080)' }}
            />

            {/* Description – fade + blur reveal */}
            <motion.p
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.52, ease: 'easeOut' }}
              className="text-base md:text-lg leading-[1.92] mb-10 max-w-[30rem]"
              style={{ color: 'rgba(208,220,235,0.82)' }}
            >
              英語テキストに時間を奪われる前に、日本語で要点を掴み、
              公式演習問題を効率よく攻略。
              <br className="hidden md:block" />
              忙しい社会人のための伴走型CFA学習サポート。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.64, ease }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTAButton href="#contact" variant="primary" size="lg">
                <span>無料相談する</span>
                <ArrowRight />
              </CTAButton>
              <CTAButton href="#content" variant="outline" size="lg">
                講座内容を見る
              </CTAButton>
            </motion.div>
          </div>

          {/* ── RIGHT: Feature Card with scroll-parallax ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.2, ease }}
            style={{ y: cardY }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(214,177,74,0.30)',
                background: 'linear-gradient(155deg, #0E2448 0%, #091834 100%)',
                boxShadow: [
                  '0 0 0 1px rgba(214,177,74,0.05)',
                  '0 0 48px rgba(214,177,74,0.09)',
                  '0 28px 64px rgba(0,0,0,0.58)',
                ].join(', '),
              }}
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src="/header.jpg"
                  alt="CFA講座 – Financial Analyst Academy"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Bottom-to-card fade */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(9,24,52,0.06) 38%, rgba(9,24,52,0.94) 100%)',
                  }}
                />
                {/* Academy badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      background: 'rgba(214,177,74,0.14)',
                      border: '1px solid rgba(214,177,74,0.44)',
                      color: '#D6B14A',
                    }}
                  >
                    Financial Analyst Academy
                  </span>
                </div>
              </div>

              {/* Feature list */}
              <div className="px-5 pt-4 pb-5">
                <p
                  className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3.5"
                  style={{ color: 'rgba(214,177,74,0.52)' }}
                >
                  このコースの3つの強み
                </p>
                <div className="space-y-2.5">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.65, delay: 0.58 + i * 0.13, ease }}
                      className="flex items-start gap-3 rounded-xl p-3.5 transition-colors duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.038)',
                        border: '1px solid rgba(255,255,255,0.065)',
                      }}
                    >
                      <span className="text-xl leading-none mt-0.5 flex-shrink-0">{f.icon}</span>
                      <div>
                        <p className="text-white font-semibold text-sm leading-snug">{f.title}</p>
                        <p
                          className="text-xs mt-0.5 leading-relaxed"
                          style={{ color: 'rgba(178,195,215,0.68)' }}
                        >
                          {f.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom shimmer line */}
              <div
                className="h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(214,177,74,0.52) 50%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: 'easeOut' }}
          className="mt-14 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.86 + i * 0.1 }}
              className="flex flex-col items-center sm:items-start gap-0.5"
            >
              <span
                className="font-display text-2xl md:text-3xl font-bold tabular-nums"
                style={{ color: '#D6B14A' }}
              >
                {s.value}
              </span>
              <span className="text-sm" style={{ color: 'rgba(168,184,204,0.72)' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
      >
        <motion.span
          className="text-[10px] tracking-[0.26em] uppercase"
          style={{ color: 'rgba(255,255,255,0.2)' }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll
        </motion.span>

        {/* Line with traveling light */}
        <div
          className="relative w-px h-8 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <motion.div
            className="absolute w-full rounded-full"
            style={{ background: 'linear-gradient(to bottom, transparent, #D6B14A, transparent)', height: '45%' }}
            animate={{ top: ['-45%', '110%'] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeIn', repeatDelay: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
