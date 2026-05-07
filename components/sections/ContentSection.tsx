'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/components/SectionTitle'
import { HorizontalSlider } from '@/components/HorizontalSlider'

const contents = [
  {
    number: '01',
    title: 'リモート個別面談',
    description:
      '月に一度、講師との1 on 1オンライン面談を実施。学習の進捗確認、弱点分析、今後の戦略立案をパーソナライズされた形で行います。',
    image: '/pic4.jpg',
    icon: '🎯',
  },
  {
    number: '02',
    title: '日本語要点集と\n動画完全版',
    description:
      'CFA全科目を日本語で凝縮した要点集と、各トピックの解説動画を提供。英文テキストを読む前に全体像を掴み、理解速度を圧倒的に向上させます。',
    image: '/pic5.jpg',
    icon: '📚',
  },
  {
    number: '03',
    title: 'CFA Institute演習問題\n1,600問超サポート',
    description:
      '公式の1,600問以上の演習問題を、日本語解説付きでサポート。「なぜ正解か・なぜ不正解か」を日本語で理解することで、本番での正答率を高めます。',
    image: '/pic6.jpg',
    icon: '✏️',
  },
  {
    number: '04',
    title: '隔週キャッチアップ会',
    description:
      '2週間に一度のグループ形式のオンライン勉強会。他の受験生との交流と情報共有で、孤独な受験勉強から解放されます。',
    image: '/pic7.jpg',
    icon: '👥',
  },
  {
    number: '05',
    title: 'Q&Aチャット',
    description:
      '疑問が生じたその場で質問できるチャットサポート。理解の穴を放置せず、すぐに解消できることで学習効率が大幅に向上します。',
    image: '/pic8.jpg',
    icon: '💬',
  },
  {
    number: '06',
    title: 'CFA特化型\n生成AI活用方法',
    description:
      'ChatGPTなどの生成AIをCFA学習に最大限活用する方法をレクチャー。最新のAIツールを駆使した、次世代の効率的学習法を習得できます。',
    image: '/pic9.jpg',
    icon: '🤖',
  },
]

function ContentCard({ number, title, description, image, icon, index }: typeof contents[0] & { index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative bg-navy-light border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col group"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-light to-navy/20" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <span className="font-display text-5xl font-bold text-white/10 absolute top-36 right-5 select-none">{number}</span>
        <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">CONTENT {number}</span>
        <h3 className="font-display text-lg font-bold text-white mb-3 whitespace-pre-line leading-snug">{title}</h3>
        <div className="h-px bg-gold/20 mb-4" />
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </motion.div>
  )
}

export function ContentSection() {
  return (
    <section id="content" className="py-24 bg-navy">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="コース内容"
          title="合格に必要な<br/>すべてが揃っている"
          subtitle="6つのコンテンツで、学習の全フェーズを包括的にサポートします。"
          light
          center
        />

        <HorizontalSlider
          itemClassName="w-[80vw] sm:w-[56vw] md:w-[42vw] lg:w-[30%]"
          gap={6}
        >
          {contents.map((c, i) => (
            <ContentCard key={i} {...c} index={i} />
          ))}
        </HorizontalSlider>
      </div>
    </section>
  )
}
