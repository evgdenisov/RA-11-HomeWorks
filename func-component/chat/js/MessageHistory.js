'use strict';

const showMessage = function(message) {
  if (message.type == 'message') {
    return (
      <Message from={message.from} message={message} />
    )
  }
  if (message.type == 'response') {
    return (
      <Response from={message.from} message={message} />
    )
  }
  if (message.type == 'typing') {
    return (
      <Typing from={message.from} message={message} />
    )
  }
}

const MessageHistory = function({list}) {
    let allMessages = [];
    for (const message of list) {
      allMessages.push(showMessage(message))
    }
    return (
      <ul>
         {allMessages}
      </ul>
    );
}
  
const messages = [{
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
  }];

  const chat = (
    <div className="chat">
      <div className="chat-history">
        <MessageHistory list={messages} />
      </div>
    </div>  
  );
  
  ReactDOM.render(chat, document.getElementById('root'));




