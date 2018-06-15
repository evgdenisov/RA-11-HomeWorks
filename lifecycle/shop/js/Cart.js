class Cart extends React.Component {
  static get propTypes() {
    return {
      isOpen: PropTypes.bool.isRequired,
      items: PropTypes.array.isRequired,
      toggleCart: PropTypes.func.isRequired,
      clearCart: PropTypes.func.isRequired
    }
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.isOpen || nextProps.isOpen)
      ? (this.props.isOpen && nextProps.isOpen)
        ? (this.props.items.length !== nextProps.items.length)
        : true
      : false;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }
}