'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface CTAButtonProps {
  href: string
  variant?: 'primary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export function CTAButton({ href, variant = 'primary', size = 'md', children, className }: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const variantClasses = {
    primary:
      'bg-gold text-white hover:bg-gold-light shadow-lg shadow-gold/25 hover:shadow-gold/40',
    outline:
      'border-2 border-white/40 text-white hover:border-gold hover:text-gold',
    white:
      'bg-white text-navy hover:bg-beige shadow-lg',
  }

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all duration-300',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.a>
  )
}
