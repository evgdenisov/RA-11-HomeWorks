'use strict';

const fromRawData = (dataToState) => (Component) => class TableFromRawData extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          list: []
      };
  }
  static get displayName() {
    const name = Component.displayName || Component.name || 'Component';
    return `fromRawData(${name})`;
  }
  componentWillReceiveProps(nextProps) {
      this.setState( dataToState(nextProps) );
  }
  render() {
      return <Component {...this.props} {...this.state} />;
  }
};