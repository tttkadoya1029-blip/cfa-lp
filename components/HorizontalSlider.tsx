'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { clsx } from 'clsx'

interface HorizontalSliderProps {
  children: React.ReactNode[]
  itemClassName?: string
  className?: string
  showDots?: boolean
  gap?: number
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function HorizontalSlider({
  children,
  itemClassName,
  className,
  showDots = true,
  gap = 4,
}: HorizontalSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const count = children.length

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 8)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
    const cardWidth = el.scrollWidth / count
    setActiveIndex(Math.round(el.scrollLeft / cardWidth))
  }, [count])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / count
    el.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / count
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
  }

  return (
    <div className={clsx('relative', className)}>
      <div
        ref={scrollRef}
        className={clsx(
          'flex overflow-x-auto scrollbar-hide snap-x snap-mandatory',
          gap === 4 ? 'gap-4' : gap === 6 ? 'gap-6' : 'gap-4'
        )}
        style={{ paddingBottom: '8px' }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className={clsx(
              'snap-start flex-shrink-0',
              itemClassName ?? 'w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30%]'
            )}
          >
            {child}
          </div>
        ))}
      </div>

      {canLeft && (
        <button
          onClick={() => scroll('left')}
          aria-label="前へ"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {canRight && (
        <button
          onClick={() => scroll('right')}
          aria-label="次へ"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {showDots && count > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`${i + 1}枚目`}
              className={clsx(
                'h-2 rounded-full transition-all duration-300',
                i === activeIndex ? 'w-6 bg-gold' : 'w-2 bg-gray-300 hover:bg-gray-400'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
