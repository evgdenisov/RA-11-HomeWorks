'use strict';

let test1 = '1111';
let test2 = '2222';
let test3 = '3333';

const AuthForm = function( {onAuth} ) {
    function authUser(event) {
      event.preventDefault();
      if ( (!onAuth) || (typeof onAuth !== 'function') ) {
        return null;
      }
      const elements = event.currentTarget.elements; 
      const user = {
        name : elements.name.value,
        email : elements.email.value,
        password : elements.password.value
      }
      onAuth(user); 
    }

    function cutLetter(event) {
        event.currentTarget.value = event.currentTarget.value.slice(0, -1);
    }

    function emailInputCheck(event) {
        const mailReg = /[^\w@\.-]+/gi;
        if (mailReg.test(event.key)) {
          cutLetter(event);
        }
    }

    function passwordInputCheck(event) {
        const passReg = /[^\w@\_]+/gi;
        if (passReg.test(event.key)) {
          cutLetter(event);
        }
    }

    function blockSubmit(event) {
      event.preventDefault();
    }

    return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={authUser}>
    <div className="Input">
      <input required name="name" type="text" placeholder="Имя"/>
      <label></label>
    </div>
    <div className="Input">
      <input type="email" name="email" placeholder="Электронная почта" onKeyUp={emailInputCheck}/>
      <label></label>
    </div>
    <div className="Input">
      <input required name="password" type="password" placeholder="Пароль" onKeyUp={passwordInputCheck}/>
      <label></label>
    </div>
    <button type="submit">
      <span>Войти</span>
      <i className="fa fa-fw fa-chevron-right"></i>
    </button>
    </form>
  )
}