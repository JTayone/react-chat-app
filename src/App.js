import React from "react";
import "./ChatApp.css";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentMessage: "",
    };
  }

  handleMessageChange(e) {
    this.setState({ currentMessage: e.target.value });
  }

  handleSendMessage(e) {
    e.preventDefault();
    const newMessage = {
      text: this.state.currentMessage,
      user: this.props.user,
    };
    this.setState({
      messages: [...this.state.messages, newMessage],
      currentMessage: "",
    });
  }

  render() {
    const { messages, currentMessage } = this.state;
    return (
      <div className="ChatApp">
        <div className="ChatApp--messages">
          {messages.map((message) => (
            <div className="ChatApp--message">
              <p>
                {message.user}: {message.text}
              </p>
            </div>
          ))}
        </div>
        <form
          className="ChatApp--form"
          onSubmit={(e) => this.handleSendMessage(e)}
        >
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => this.handleMessageChange(e)}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatApp;
