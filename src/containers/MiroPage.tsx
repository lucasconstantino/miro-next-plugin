import { PureComponent } from 'react'
import miro from 'miro-sdk'

class MiroPage extends PureComponent<{}> {
  constructor(props) {
    super(props)

    this.state = {
      ready: false
    }
  }

  onReady(_miro: any) {
    // implement on extention
  }

  componentDidMount() {
    miro.onReady(() => {
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
