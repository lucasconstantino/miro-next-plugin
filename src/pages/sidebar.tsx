import React from 'react'
import { useState } from 'react'
import useMiro from '../hooks/useMiro'

const SidebarPage = () => {
  const [miro, ready] = useMiro()
  const [title, setTitle] = useState(null)

  const getBoardTitle = async () =>
    setTitle((await miro.board.info.get()).title)

  const deleteAllContent = async () => {
    const allObjects = await miro.board.widgets.get()
    await miro.board.widgets.deleteById(allObjects.map(object => object.id))
    await miro.showNotification('Content has been deleted')
  }

  return !ready ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <button onClick={getBoardTitle}>Get board title</button>
      <br />
      <div>Board title is: {title}</div>
      <br />
      <br />
      <button onClick={deleteAllContent}>Delete all content</button>
    </div>
  )
}

export default SidebarPage
