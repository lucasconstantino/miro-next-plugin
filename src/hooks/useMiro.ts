import { useState, useEffect } from 'react'
import miro from 'miro-sdk'

const useMiro = (): [any, boolean] => {
  const [ready, setReady] = useState(false)

  // track miro readiness state.
  useEffect(() => miro.onReady(() => setReady(true)))

  return [miro, ready]
}

export default useMiro
