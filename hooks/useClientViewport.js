import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

/** Indique si le composant est rendu côté client (après hydratation). */
export function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

function subscribeToResize(callback) {
  window.addEventListener('resize', callback)
  return () => window.removeEventListener('resize', callback)
}

/** Détecte une largeur d'écran inférieure au breakpoint (défaut 768px). */
export function useIsMobile(breakpoint = 768) {
  return useSyncExternalStore(
    subscribeToResize,
    () => window.innerWidth < breakpoint,
    () => false
  )
}
