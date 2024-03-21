import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isChecked: true}

  onChangeEmoji = () => {
    this.setState({isChecked: false})
  }

  render() {
    const {isChecked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="container">
        <div className="feedback-container">
          {isChecked ? (
            <div>
              <h1 className="review-qas">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id}>
                    <button
                      onClick={this.onChangeEmoji}
                      type="button"
                      className="button"
                    >
                      <img
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                        className="emoji-image"
                      />
                      <p className="emoji-name">{eachEmoji.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="list-loveEmoji">
              <li>
                <img src={loveEmojiUrl} alt="love emoji" className="img" />
                <h1 className="wish-thankyou">Thank You</h1>
                <p className="feedback-response">
                  We will use your feedback to improve our customer support
                  performance
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
