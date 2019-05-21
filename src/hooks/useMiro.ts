import { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-unresolved
import miro, { SDK } from 'miro-sdk'

const useMiro = (): [SDK.Root, boolean] => {
  const [ready, setReady] = useState(false)

  // track miro readiness state.
  useEffect(() => miro.onReady(() => setReady(true)))

  return [miro, ready]
}

export default useMiro
