'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from '@/components/SectionTitle'

const pains = [
  { icon: '❓', text: '今の勉強方法が正しいのか分からない' },
  { icon: '📅', text: 'どの教材をどのペースで進めればよいのか分からない' },
  { icon: '🧍', text: '一人で勉強していて孤独に感じる' },
  { icon: '⏰', text: '仕事が忙しくて勉強時間の確保が困難' },
  { icon: '🌐', text: '英語でのインプットに時間がかかる' },
  { icon: '🧠', text: '勉強したことをすぐに忘れてしまう' },
]

function PainCard({ icon, text, index }: { icon: string; text: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gold/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0 mt-0.5">{icon}</span>
        <p className="text-navy font-medium leading-relaxed">{text}</p>
      </div>
      <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500 rounded-full" />
    </motion.div>
  )
}

export function PainSection() {
  return (
    <section className="py-24 bg-beige-light">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="よくあるお悩み"
          title="こんなお悩みは<br/>ありませんか？"
          subtitle="CFA受験生の多くが同じ壁にぶつかっています。あなただけではありません。"
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pains.map((p, i) => (
            <PainCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
