import useMiro from '../hooks/useMiro'

const ModalPage = () => {
  const [miro, ready] = useMiro()

  return !ready ? (
    <div>Loading...</div>
  ) : (
    <>
      <h1>I am modal</h1>
      <button onClick={() => miro.board.ui.closeModal()}>Close me</button>
    </>
  )
}

export default ModalPage
