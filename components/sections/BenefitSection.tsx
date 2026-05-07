'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from '@/components/SectionTitle'

const benefits = [
  {
    icon: '🌍',
    title: '世界基準の価値',
    description:
      'CFA Charterholderは世界170以上の国と地域で認知されるグローバル資格。どこにいても通用する、国際的な金融の専門家としての信頼性を手に入れましょう。',
    accent: 'from-gold/20 to-gold/5',
  },
  {
    icon: '🚀',
    title: 'キャリアの選択肢が広がる',
    description:
      'バイサイド・セルサイド・コンサル・外資系金融機関など、CFA取得者だからこそ開かれるポジションがあります。昇進・転職・独立、どのシナリオでも強力な武器になります。',
    accent: 'from-navy-mid/60 to-navy/80',
  },
  {
    icon: '💎',
    title: '豊かな生活に近づく',
    description:
      '資格取得に伴うスキルと実績は、年収・ポジション・生活の質を底上げします。長期的な自己投資として、CFA取得は最も費用対効果の高い選択の一つです。',
    accent: 'from-gold/15 to-navy-mid/40',
  },
]

function BenefitCard({ icon, title, description, accent, index }: typeof benefits[0] & { index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative group rounded-2xl border border-white/10 bg-navy-light overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60`} />

      <div className="relative z-10 p-8 md:p-10">
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div className="h-px w-12 bg-gold mb-5" />
        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/30 rounded-bl-none rounded-tr-2xl" />
    </motion.div>
  )
}

export function BenefitSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="取得のメリット"
          title="CFAで広がる<br/>あなたの未来"
          subtitle="CFA取得は単なる資格ではなく、キャリアと人生の可能性を拡げる投資です。"
          light
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
