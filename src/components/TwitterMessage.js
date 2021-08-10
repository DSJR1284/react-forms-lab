import React from "react";

class TwitterMessage extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {

  //   };
  // }

  state = {
    message: ""
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={this.handleChange} 
        value={this.state.message} 
        type="text" name="message" id="message" />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
