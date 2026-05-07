'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/components/SectionTitle'
import { HorizontalSlider } from '@/components/HorizontalSlider'

const testimonials = [
  {
    name: 'Yukiさん',
    role: 'メガバンク勤務 / 30代',
    period: '4ヶ月で合格',
    image: '/pic10.jpg',
    quote:
      '日本語で要点を把握できたことで、英文テキストの理解効率が大幅に上がりました。これまで1章を読むのに2〜3時間かかっていたのが、半分以下になりました。4ヶ月の短期集中で合格できたのは、このコースのおかげです。',
    stars: 5,
  },
  {
    name: 'YYさん',
    role: '外資系コンサルティング / 20代',
    period: '仕事と両立しながら合格',
    image: '/pic11.jpg',
    quote:
      'Q&Aチャットで疑問をその場で解消できたのが本当に助かりました。一人で悩んで時間を無駄にすることがなくなり、日本語インプットの効果も実感。仕事が忙しくても計画的に進められました。',
    stars: 5,
  },
  {
    name: 'HAYAさん',
    role: '証券会社勤務 / 30代',
    period: '隙間時間を活用して合格',
    image: '/pic12.jpg',
    quote:
      '日本語の演習問題解説動画が復習教材として非常に役立ちました。通勤時間や昼休みなどの隙間時間でも効率よく学習でき、仕事との両立が実現。隔週キャッチアップ会で仲間ができたのも大きかったです。',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({
  name, role, period, image, quote, stars, index,
}: typeof testimonials[0] & { index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm h-full flex flex-col"
    >
      {/* Quote mark */}
      <div className="font-display text-6xl text-gold/20 leading-none mb-2 select-none">&ldquo;</div>

      <p className="text-gray-700 leading-relaxed flex-1 mb-6">{quote}</p>

      <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-beige flex-shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <StarRating count={stars} />
          <div className="font-bold text-navy mt-1">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
          <div className="text-xs text-gold font-semibold mt-0.5">{period}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialSection() {
  return (
    <section className="py-24 bg-beige-light">
      <div className="container mx-auto px-5 md:px-10">
        <SectionTitle
          label="受講生の声"
          title="実際に合格した<br/>受講生の感想"
          subtitle="このコースを通じてCFA Level 1に合格した方々の声をご紹介します。"
          center
        />

        <HorizontalSlider
          itemClassName="w-[86vw] sm:w-[60vw] md:w-[46vw] lg:w-[32%]"
          gap={6}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </HorizontalSlider>
      </div>
    </section>
  )
}
