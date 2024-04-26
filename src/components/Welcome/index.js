// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}
  onClickButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const buttonText = isSubscribed ? 'Subcribed' : 'Subscribe'
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
