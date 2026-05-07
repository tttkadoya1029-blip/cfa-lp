'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { clsx } from 'clsx'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
  className?: string
}

export function SectionTitle({ label, title, subtitle, light, center, className }: SectionTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={clsx('mb-12', center && 'text-center', className)}
    >
      {label && (
        <span
          className={clsx(
            'inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border',
            light
              ? 'text-gold border-gold/40 bg-gold/10'
              : 'text-gold border-gold/40 bg-gold/10'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={clsx(
          'font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
          light ? 'text-white' : 'text-navy'
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className={clsx('mt-4 h-1 w-16 bg-gold rounded-full', center && 'mx-auto')} />
      {subtitle && (
        <p
          className={clsx(
            'mt-5 text-lg leading-relaxed max-w-2xl',
            light ? 'text-gray-300' : 'text-gray-600',
            center && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
