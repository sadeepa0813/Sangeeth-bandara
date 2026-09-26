import { useEffect, useRef, useState, type ReactNode, type ElementType, type HTMLAttributes } from 'react'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${show ? 'show' : ''} ${className}`}
      style={{ transitionDelay: show ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
