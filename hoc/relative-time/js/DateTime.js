'use strict';

function getTime(date) {
    let diff = new Date() - new Date(date);
    let day = (1000 * 60 * 60 * 24);
    let hour = (1000 * 60 * 60);
    let minute = (1000 * 60);
    if (diff < hour && diff >= minute) {
        return '12 минут назад';
    }
    if (diff > hour && diff < day) {
        return '5 часов назад';
    }
    if (diff > day) {
        return `${Math.round(diff / day)} дней назад`;
    }
}

function Pretty(Component) {
    return class extends React.Component {
        constructor(...props) {
            super(...props);
            this.state = {};
        }
        componentWillMount() {
            this.setState({ date: getTime(this.props.date) })
        }
        render() {
            console.log(this.state)
            return <Component {...this.state}/>
        }
    }
}


const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

const DateTimePretty = Pretty(DateTime);