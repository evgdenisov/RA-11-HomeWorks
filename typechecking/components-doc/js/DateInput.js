'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

const birthDatePropType = (props, propName, componentName) => {
  let birthDate = props[propName];
  let isBirthDate = (typeof birthDate === 'string') && /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(birthDate);
  if (!isBirthDate) {
    return new Error(`Неверный формат параметра ${propName} в компоненте ${componentName}: необходим указать дату рождения в формате YYYY-MM-DD`);
  }
}

function getCurrentISOLocaleDate() {
  const date = new Date();
  date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

DateInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  value: birthDatePropType
};

DateInput.defaultProps = {
  value: getCurrentISOLocaleDate()
};