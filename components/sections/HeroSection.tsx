'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CTAButton } from '@/components/CTAButton'

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
  { value: '4ヶ月', label: '短期集中合格実績' },
  { value: '6科目', label: '日本語要点集完備' },
  { value: '多数輩出', label: '合格者を継続サポート' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #061426 0%, #0B1E3A 55%, #071830 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(214,177,74,0.18) 1.5px, transparent 0)',
          backgroundSize: '38px 38px',
          opacity: 0.4,
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '10%',
          width: '360px', height: '360px',
          background: 'radial-gradient(circle, rgba(214,177,74,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '15%', right: '5%',
          width: '440px', height: '440px',
          background: 'radial-gradient(circle, rgba(11,45,90,0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
      />

      <div className="container mx-auto px-5 md:px-10 py-24 md:py-20 relative z-10 w-full">

        {/* ─── Main 2-col grid ─── */}
        <div className="grid lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_470px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div>
            {/* Label badge */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-8"
              style={{
                border: '1px solid rgba(214,177,74,0.4)',
                background: 'rgba(214,177,74,0.08)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#D6B14A' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: '#D6B14A' }}
              >
                CFA Level I Leveraged Support Course
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="font-display font-bold text-white leading-[1.12] mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
            >
              CFA Level 1 合格まで
              <br />
              <span
                style={{
                  background: 'linear-gradient(95deg, #D6B14A 0%, #F0D070 50%, #C09030 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                徹底サポート
              </span>
            </motion.h1>

            {/* Gold accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '3.5rem' }}
              transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
              className="h-[3px] rounded-full mb-7"
              style={{ background: 'linear-gradient(90deg, #D6B14A, #F0D080)' }}
            />

            {/* Description */}
            <motion.p
              {...fadeUp(0.18)}
              className="text-base md:text-lg leading-[1.9] mb-10 max-w-[30rem]"
              style={{ color: 'rgba(210,220,235,0.85)' }}
            >
              英語テキストに時間を奪われる前に、日本語で要点を掴み、
              公式演習問題を効率よく攻略。
              <br className="hidden md:block" />
              忙しい社会人のための伴走型CFA学習サポート。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.28)} className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="#contact" variant="primary" size="lg">
                <span>無料相談する</span>
                <ArrowRight />
              </CTAButton>
              <CTAButton href="#content" variant="outline" size="lg">
                講座内容を見る
              </CTAButton>
            </motion.div>
          </div>

          {/* ── RIGHT: Feature Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(214,177,74,0.32)',
                background: 'linear-gradient(155deg, #0D2244 0%, #091832 100%)',
                boxShadow:
                  '0 0 0 1px rgba(214,177,74,0.06), 0 0 50px rgba(214,177,74,0.08), 0 24px 60px rgba(0,0,0,0.55)',
              }}
            >
              {/* Image section */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src="/header.jpg"
                  alt="CFA講座 – Financial Analyst Academy"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Bottom fade into card bg */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(9,24,50,0.08) 40%, rgba(9,24,50,0.92) 100%)',
                  }}
                />
                {/* Academy badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      background: 'rgba(214,177,74,0.15)',
                      border: '1px solid rgba(214,177,74,0.45)',
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
                  style={{ color: 'rgba(214,177,74,0.55)' }}
                >
                  このコースの3つの強み
                </p>
                <div className="space-y-2.5">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-3 rounded-xl p-3.5"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <span className="text-xl leading-none mt-0.5 flex-shrink-0">{f.icon}</span>
                      <div>
                        <p className="text-white font-semibold text-sm leading-snug">{f.title}</p>
                        <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(180,195,215,0.7)' }}>
                          {f.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom gold line */}
              <div
                className="h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(214,177,74,0.5), transparent)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start gap-0.5">
              <span
                className="font-display text-2xl md:text-3xl font-bold"
                style={{ color: '#D6B14A' }}
              >
                {s.value}
              </span>
              <span className="text-sm" style={{ color: 'rgba(170,185,205,0.75)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: 'rgba(255,255,255,0.22)' }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] tracking-[0.24em] uppercase">Scroll</span>
        <div className="w-px h-7 overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <div
            className="absolute inset-0 animate-scroll-line"
            style={{ background: '#D6B14A' }}
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
