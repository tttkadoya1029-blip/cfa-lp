'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/components/SectionTitle'
import { HorizontalSlider } from '@/components/HorizontalSlider'

const reasons = [
  {
    point: 'Point 01',
    title: '圧倒的効率の\n極秘学習ツール',
    description:
      '各科目の英文テキストを日本語で凝縮した「日本語要点集」と解説動画を提供。英語理解に費やす時間を最小化し、内容理解と問題演習に集中できる環境を整えます。',
    image: '/pic1.jpg',
    tag: '日本語要点集 × 解説動画',
  },
  {
    point: 'Point 02',
    title: '最適な学習\nペースメーカー',
    description:
      '月1回の個別面談と隔週キャッチアップ会で、あなたの学習状況を把握し、最適な進め方を一緒に設計。仕事が忙しい社会人でも計画的に合格を目指せます。',
    image: '/pic2.jpg',
    tag: '個別面談 × キャッチアップ会',
  },
  {
    point: 'Point 03',
    title: 'いつでも使える\nQ&Aチャット',
    description:
      '疑問が生じたその瞬間に解消できるQ&Aチャット。理解の穴を放置せず、スムーズに学習を進めることができます。孤独な受験勉強から解放され、伴走型のサポートを体感してください。',
    image: '/pic3.jpg',
    tag: '24時間対応 Q&Aチャット',
  },
]

function ReasonCard({ point, title, description, image, tag, index }: typeof reasons[0] & { index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-navy">
        <Image src={image} alt={title} fill className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <span className="absolute bottom-4 left-4 text-xs font-semibold text-white bg-gold px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-gold font-bold text-xs tracking-widest uppercase mb-3">{point}</span>
        <h3 className="font-display text-xl font-bold text-navy mb-4 whitespace-pre-line leading-snug">{title}</h3>
        <div className="h-px bg-gold/30 mb-4" />
        <p className="text-gray-600 leading-relaxed text-sm flex-1">{description}</p>
      </div>
    </motion.div>
  )
}

export function ReasonSection() {
  return (
    <section className="py-24 bg-beige-light">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="選ばれる理由"
          title="このコースが選ばれる<br/>3つの理由"
          subtitle="忙しい社会人が効率よくCFA Level 1に合格するために、必要なものをすべて揃えています。"
          center
        />

        {/* Mobile / Tablet: horizontal slider */}
        <div className="lg:hidden px-1">
          <HorizontalSlider
            itemClassName="w-[82vw] sm:w-[55vw] md:w-[44vw]"
            gap={4}
          >
            {reasons.map((r, i) => (
              <ReasonCard key={i} {...r} index={i} />
            ))}
          </HorizontalSlider>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <ReasonCard key={i} {...r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
