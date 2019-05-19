import rtb from 'miro-sdk'

let closeButton = document.querySelector('.close-button')!
closeButton.addEventListener('click', () => {
  rtb.board.ui.closeModal()
})
