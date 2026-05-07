'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CTAButton } from '@/components/CTAButton'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #C9A84C 1.5px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Gold diagonal gradient */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 via-gold/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-mid/40 rounded-full blur-3xl" />
      </div>

      {/* Hero image (right side on desktop) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/header.jpg"
            alt="CFA講座イメージ"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-10 py-28 md:py-36 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Label badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-wider uppercase">
              CFA Level I Leveraged Support Course
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6"
          >
            CFA Level 1 合格まで<br />
            <span className="text-gradient-gold">徹底サポート</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="h-1 bg-gold rounded-full mb-8"
          />

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            英語テキストに時間を奪われる前に、日本語で要点を掴み、公式演習問題を効率よく攻略。
            忙しい社会人のための伴走型CFA学習サポート。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <CTAButton href="#contact" variant="primary" size="lg">
              <span>無料相談する</span>
              <ArrowRight />
            </CTAButton>
            <CTAButton href="#content" variant="outline" size="lg">
              講座内容を見る
            </CTAButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
          >
            {[
              { value: '1,600問+', label: '演習問題サポート' },
              { value: '4ヶ月', label: '短期集中合格実績' },
              { value: '6科目', label: '日本語要点集完備' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-gold font-display">{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-gold animate-scroll-line" />
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
