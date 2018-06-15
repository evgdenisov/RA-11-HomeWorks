class SearchBox extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { fixed: false };
      this.searchElem = null;
      this.getSearchElem = this.getSearchElem.bind(this);
      this.setPosition = this.setPosition.bind(this);
    }
  
    render() {
      return <SearchBoxView fixed={this.state.fixed} getSearchElem={this.getSearchElem} />
    }
  
    getSearchElem(elem) {
      this.searchElem = elem;
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.setPosition);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.setPosition);
    }
  
    isFixed() {
      return this.searchElem.getBoundingClientRect().top <= 0;
    }
  
    setPosition() {
      this.setState({ fixed: this.isFixed() });
    }
  }