const SearchBoxView = ({ fixed, getSearchElem }) => {
  return (
    <section ref={elem => getSearchElem(elem)} className="container">
      <div className="row">
        <div className="col-sm-12">
          <input
            className={`search-box ${fixed ? 'search-box_fixed' : null}`}
            placeholder="Поиск"
          >
          </input>
        </div>
      </div>
    </section>
  );
};

SearchBoxView.propTypes = {
  fixed: PropTypes.bool,
  getSearchElem: PropTypes.func
};