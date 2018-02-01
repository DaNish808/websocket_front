import React, { Component } from 'react';
import { connect } from 'react-redux';

import { post } from '../../state/actions/messages';

import './Chat.css';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080');
socket.on('connection', () => console.log('socket connected'));


class Chat extends Component {

  postHandler = async e => {
    e.preventDefault();
    this.props.post(e.target.message.value);
  }

  render() {
    const { me, messages } = this.props;
    return (
      <section className="chat-box">
        <dl className="messages">
          {messages.map((message, i) => (
            <section key={message.timestamp} className="message">
              {i === 0 ?
                <dt className={message.user === me ? 'me' : ''}>{message.user}</dt> : 
                (// do not show message poster for consecutive messages
                  message.user !== messages[i-1].user &&
                  <dt className={message.user === me ? 'me' : ''}>{message.user}</dt>
                )
              }
              <dd className={message.user === me ? 'me' : ''}>{message.message}</dd>
            </section>
          ))}
        </dl>
        <form onSubmit={this.postHandler}>
          <textarea name="message" rows="3"/>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
}


export default connect(
  state => ({ 
    messages: state.messages,
    me: state.me.username
  }),
  { post }
)(Chat);