

class SubscribeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid : {}
        }
    }
    submit(event) {
        event.preventDefault();
        console.log(event.target.input.value)
    }

    validation(event) {
        this.setState({
            valid : event.currentTarget.validity.valid
        })
    }

    showClass() {
        if (typeof this.state.valid == 'object') {
            return '';
        }
        if (this.state.valid == true) {
            return 'is-valid';
        }
        else {
            return 'is-error';
        }
    }

    render() {
        return (
            <div className="subscribe__form">
            <form className={`form form--subscribe ${this.showClass()}`} onSubmit={this.submit.bind(this)}>
              <h4 className="form-title">Подписаться:</h4>
              <div className="form-group">
                <label htmlFor="input-email" className="sr-only">Email</label>
                <input name="input" type="email" id="input-email" placeholder="Email" className="form-control" onChange={this.validation.bind(this)}/>
                <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                <button type="submit" className="form-next">
                  <i className="material-icons">keyboard_arrow_right</i>
                </button>
              </div>
            </form>
          </div>
        )
    }

}