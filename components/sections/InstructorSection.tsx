'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/components/SectionTitle'

const credentials = [
  'CFA Charterholder',
  '日本証券アナリスト（CMA）',
  '国内外 金融機関勤務経験',
  'グローバル金融業務 多数の実績',
]

export function InstructorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-beige-light">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="講師紹介"
          title="講師プロフィール"
          center
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-72 flex-shrink-0 relative">
                <div className="relative h-72 md:h-full min-h-[288px]">
                  <Image
                    src="/profile.jpg"
                    alt="あよもてぃ 講師"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-10 flex-1">
                {/* Name */}
                <div className="mb-6">
                  <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">Instructor</p>
                  <h3 className="font-display text-3xl font-bold text-navy mb-1">あよもてぃ</h3>
                  <p className="text-gray-500 text-sm">Financial Analyst Academy 代表講師</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-6" />

                {/* Credentials */}
                <div className="space-y-2 mb-6">
                  {credentials.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{c}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-6" />

                {/* Bio */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  国内外の金融機関でグローバル金融業務に長年従事。CFA Charterholderおよび日本証券アナリスト（CMA）として、豊富な実務経験を持つ。
                  多数のCFA受験生を指導してきた経験を活かし、「忙しい社会人でも効率よく合格できる」学習メソッドを確立。
                  英語の壁を日本語でブレイクスルーし、最短ルートで合格へ導くことを使命としている。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
