'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CTAButton } from '@/components/CTAButton'

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="relative py-32 bg-navy overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #C9A84C 1.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 md:px-10 relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <span className="inline-block text-gold text-xs font-bold tracking-widest uppercase mb-6 border border-gold/30 px-4 py-1.5 rounded-full bg-gold/10">
            まずは無料相談から
          </span>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl mx-auto">
            迷っている時間も、<br />
            <span className="text-gradient-gold">合格までの時間に変えましょう。</span>
          </h2>

          {/* Gold accent */}
          <div className="h-1 w-16 bg-gold rounded-full mx-auto mb-8" />

          {/* Sub */}
          <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            無料相談では、現在の学習状況をヒアリングし、
            あなたに合った合格プランをご提案します。
          </p>

          {/* CTA */}
          <CTAButton href="https://lin.ee/your-line-link" variant="primary" size="lg">
            <span>無料相談する（LINE）</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>

          <p className="text-gray-500 text-sm mt-5">
            無料・勧誘なし。まずはお気軽にご相談ください。
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-white/10 pt-10 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Financial Analyst Academy. All rights reserved.
        </p>
      </div>
    </section>
  )
}
