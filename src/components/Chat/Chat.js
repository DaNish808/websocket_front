import React, { Component } from 'react';

import './Chat.css';


export default class Chat extends Component {
  render() {
    return (
      <section className="chat-box">
        <dl className="messages">
          <dt>exampleUser</dt>
          <dd>hello world!</dd>
          <dt className="me">myUsername</dt>
          <dd className="me">...hey</dd>
        </dl>
        <textarea rows="3"/>
        <button type="submit">Send</button>
      </section>
    );
  }
}