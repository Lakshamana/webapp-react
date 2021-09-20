// @ts-nocheck
// @ts-ignore
import React from 'react'
import { throttle } from 'lodash'
import { breakpointKeys } from 'styles/globalStyles'

const BreakpointContext = React.createContext(null)

const parseContent = (pseudo = ':before', selector = 'body') => {
  const el = document.querySelector(selector)
  const content = window.getComputedStyle(el, pseudo).content

  if (content) {
    const result = content.replace(/^["']|["']$/g, '')
    return {
      breakpoint: breakpointKeys[result],
      alias: result,
    }
  }

  return ''
}

export const BreakpointProvider = ({ children }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState()
  const [currentSize, setCurrentSize] = React.useState({})

  React.useEffect(() => {
    let mounted = true
    let rAF = null

    const onResize = throttle(() => {
      if (!mounted) {
        return
      }

      if (rAF) {
        window.cancelAnimationFrame(rAF)
      }

      const breakpoint = parseContent()
      setCurrentSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      })

      rAF = window.requestAnimationFrame(() => setCurrentBreakpoint(breakpoint))
    }, 200)

    window.addEventListener('resize', onResize, {
      passive: true,
    })
    onResize()

    return () => {
      mounted = false
      rAF = null
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const alias = (currentBreakpoint && currentBreakpoint.alias) || ''

  return (
    <BreakpointContext.Provider
      value={{
        currentBreakpoint,
        currentSize,
        isDesktop: alias.includes('desktop'),
        isMobile: alias.includes('mobile'),
        isTablet: alias.includes('tablet'),
      }}
    >
      {children}
    </BreakpointContext.Provider>
  )
}

export const useBreakpoint = () => {
  const context = React.useContext(BreakpointContext)

  if (!context || !JSON.stringify(context)) {
    throw new Error('useBreakpoint must be used within BreakpointProvider')
  }

  return context
}
