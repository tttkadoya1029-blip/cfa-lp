'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from '@/components/SectionTitle'
import { CTAButton } from '@/components/CTAButton'

const included = [
  'リモート1 on 1 個別面談',
  '日本語要点集 & 解説動画（全科目）',
  'CFA Institute演習問題 日本語徹底サポート（1,600問超）',
  'CFA特化型 生成AI活用方法レクチャー',
  '隔週キャッチアップ会（グループ勉強会）',
  'Q&Aチャット（期間中 何度でも）',
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="料金"
          title="シンプルな<br/>料金プラン"
          subtitle="すべてのサポートが含まれた、オールインワンのコースです。"
          light
          center
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          {/* Card */}
          <div className="relative rounded-3xl border border-gold/40 bg-navy-light overflow-hidden gold-border-glow">
            {/* Top gold accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

            {/* Best value badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                社会人に最適
              </span>
            </div>

            <div className="p-8 md:p-10">
              {/* Course name */}
              <div className="text-gold text-xs font-bold tracking-widest uppercase mb-4">
                CFA Level I
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2 leading-snug">
                Leveraged Support Course
              </h3>
              <div className="h-px bg-white/10 my-6" />

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="font-display text-5xl font-bold text-white">¥189,800</span>
                  <span className="text-gray-400 text-sm pb-2">（税込）</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  ※ 大手予備校の半額以下で、より手厚いサポートを提供
                </p>
              </div>

              {/* Included items */}
              <div className="space-y-4 mb-10">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">含まれるコンテンツ</p>
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <CTAButton href="#contact" variant="primary" size="lg" className="w-full justify-center">
                無料相談する
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </CTAButton>

              <p className="text-center text-gray-500 text-xs mt-4">
                まずは無料相談から。お気軽にご連絡ください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
