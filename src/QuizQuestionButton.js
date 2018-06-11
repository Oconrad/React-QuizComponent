import React, { Component} from 'react'

class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.buttonText)

  }
  render(){
    return(
      <li><button onClick={this.handleClick.bind(this)}>{this.props.buttonText}</button></li>
    )
  }
}

export default QuizQuestionButton
