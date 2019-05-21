import React from 'react'
import useMiro from '../hooks/useMiro'

const images = [
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-walk-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow-2/256/cat-hungry-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-tied-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-grumpy-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow-2/256/cat-paper-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-poo-icon.png',
]

const LibraryPage = () => {
  const [miro, ready] = useMiro()

  const createImage = async (url: string) => {
    const { x, y, width, height } = await miro.board.viewport.getViewport()

    const widget = {
      type: 'image',
      url: url,
      y: y + height / 2,
      x: x + width / 2,
    }

    miro.board.widgets.create([widget])
  }

  return !ready ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {images.map(src => (
        <img
          key={src}
          src={src}
          alt={`Add ${src} widget`}
          style={{ maxWidth: '25%', cursor: 'pointer' }}
          onClick={() => createImage(src)}
        />
      ))}
    </ul>
  )
}

export default LibraryPage
