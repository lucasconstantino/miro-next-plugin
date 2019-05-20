import { PureComponent } from 'react'
import miro from 'miro-sdk'

class MiroPage extends PureComponent<{}> {
  miro?: any

  constructor(props) {
    super(props)

    this.state = {
      ready: false
    }
  }

  onReady(_miro: any) {
    // implement on extention
  }

  getPath(page: string) {
    return `${location.origin}/${page}`
  }

  componentDidMount() {
    miro.onReady(() => {
      this.miro = miro
      this.setState({ ready: true })
      this.onReady(miro)
    })
  }

  // default to render nothing.
  render() {
    return null
  }
}

export default MiroPage
