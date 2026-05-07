'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { SectionTitle } from '@/components/SectionTitle'

const faqs = [
  {
    q: '非金融企業出身でも勉強できますか？',
    a: 'はい、問題ありません。CFA試験は金融知識ゼロからでも挑戦できる設計です。当コースでは日本語で基礎から丁寧に解説しているため、金融業界以外の方でもしっかりと学習を進めることができます。実際に、IT・製造業・コンサル等の非金融出身の受講生も多数合格しています。',
  },
  {
    q: '1人で勉強するのと何が違いますか？',
    a: '独学との最大の違いは「正しい方向性」と「継続できる仕組み」です。何を・いつ・どのように学ぶかを一緒に設計し、隔週キャッチアップ会や個別面談で定期的に軌道修正します。また、疑問をすぐに解消できるQ&Aチャットにより、理解の穴を放置しません。一人では途中で挫折しがちな長期学習を、伴走型でサポートします。',
  },
  {
    q: '仕事が忙しくて勉強時間が取れません',
    a: 'むしろ、このコースは忙しい社会人のために設計されています。日本語要点集で英語テキストを読む時間を大幅に短縮し、スキマ時間での学習を可能にする解説動画を提供。個別面談では、あなたの実際のスケジュールに合った学習プランを一緒に作ります。週10〜15時間の学習時間を確保できれば、合格を目指すことができます。',
  },
  {
    q: 'なぜリーズナブルなのですか？',
    a: '当コースは実際に現役のCFA Charterholderが運営するため、大手予備校のような大規模な組織コストがかかりません。また、完全オンラインで運営することで会場費等のオーバーヘッドを最小化しています。「本当に合格に必要なもの」に絞ることで、質を落とさずにコストを抑えることが可能になりました。',
  },
  {
    q: '大手受験校との違いは？',
    a: '大手予備校は英語テキストの解説が中心で、受講生一人ひとりへの個別対応は限定的です。当コースは少人数制で、個別面談・Q&Aチャット・隔週キャッチアップ会を通じ、あなたの弱点や状況に合わせたパーソナライズされたサポートを提供します。また、最新の生成AI活用法など、大手予備校にはない実践的なコンテンツも特徴です。',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-beige-light transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy text-sm md:text-base leading-snug">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-xl leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 bg-beige-light border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="FAQ"
          title="よくある質問"
          center
        />

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
