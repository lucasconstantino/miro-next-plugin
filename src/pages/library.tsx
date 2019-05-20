const images = [
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-walk-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow-2/256/cat-hungry-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-tied-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-grumpy-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow-2/256/cat-paper-icon.png',
  'http://icons.iconarchive.com/icons/iconka/meow/256/cat-poo-icon.png'
]

const LibraryPage = () => (
  <ul>
    {images.map(src => (
      <img key={src} src={src} />
    ))}
  </ul>
)

export default LibraryPage
