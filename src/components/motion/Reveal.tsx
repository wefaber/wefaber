import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

/**
 * Scroll-triggered reveal. Every section on the page uses this so the motion
 * language stays identical throughout instead of drifting per component.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'p' | 'span'
}) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={reduced ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </Component>
  )
}

/** Container that staggers its `RevealItem` children as the group scrolls in. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  stagger?: number
  as?: 'div' | 'ul' | 'ol'
}) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : stagger } },
  }

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </Component>
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  const variants: Variants = {
    hidden: reduced ? {} : { opacity: 0, y: 20 },
    show: reduced
      ? {}
      : { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
  }

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  )
}
