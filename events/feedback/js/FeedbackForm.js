'use strict';


const FeedbackForm = function({data, onSubmit}) {
    const ShowGender = function() {
        const salutationArray = [ 
            {'salutation-mr' : 'Мистер'},
            {'salutation-mrs' : 'Мисис'},
            {'salutation-ms' : 'Мис' }
        ]
        const salutationInputs = [];
        for (const item of salutationArray) {
           let salutation = [];
           let value = item[Object.keys(item)[0]];
           let id = Object.keys(item)[0];
           let checked = false;
           if (value == data.salutation) {
               checked = true;
           }
           salutation.push(
            <input className="contact-form__input contact-form__input--radio" id={id} name="salutation" type="radio" value={value} checked={checked}/>
           )
           salutation.push(
            <label className="contact-form__label contact-form__label--radio" htmlFor={id}>{value}</label>
           )
           salutationInputs.push(salutation)
        }
        return (
            <div className="contact-form__input-group">
                {salutationInputs}
            </div>
        )
    }

    const ShowSnacks = function() {
        let checkedCake, checkedPizza = false;
        for (const snack of data.snacks) {
            if (snack == 'пицца') {
                checkedPizza = true;
            }
            if (snack == 'пирог') {
                checkedCake = true;
            }
        }
        return (
            <span>
            <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" checked={checkedPizza}/>
            <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
            <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог"  checked={checkedCake}/>
            <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </span>
        )
    }

    function sendForm(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let sendingData = '';
        for (const [key, value] of formData) {
            sendingData += `${key}: ${value} `
        }
        onSubmit(JSON.stringify(sendingData))
    }

    return (
        <form className="content__form contact-form" onSubmit={sendForm}>
        <div className="testing">
          <p>Чем мы можем помочь?</p>
        </div>
            <ShowGender />
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="name">Имя</label>
          <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name}/>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
          <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email}/>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
          <select defaultValue={data.subject} className="contact-form__input contact-form__input--select" id="subject" name="subject">
            <option>У меня проблема</option>
            <option>У меня важный вопрос</option>
          </select>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
          <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message}></textarea>
        </div>
        <div className="contact-form__input-group">
          <p className="contact-form__label--checkbox-group">Хочу получить:</p>
          <ShowSnacks />
        </div>
        <button className="contact-form__button" type="submit" >Отправить сообщение!</button>
        <output id="result" />
      </form>
    )
}


