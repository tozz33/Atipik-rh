import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function FormationCIPRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/formations/cip')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirection vers la page Formation CIP...</p>
      </div>
    </div>
  )
} 