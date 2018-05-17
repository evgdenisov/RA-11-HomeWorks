
const Menu = function(props) {
    const {items, opened} = props;
    if (props.opened) {
        return (
            <div>
            <div className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                <nav>
                    <ul>
                        <li><a href={items[0].href}>{items[0].title}</a></li>
                        <li><a href={items[1].href}>{items[1].title}</a></li>
                        <li><a href={items[2].href}>{items[2].title}</a></li>
                    </ul>
                </nav>
          </div>
            </div>
        );
    }
    else {
        return (
            <div className="menu">
            <div className="menu-toggle"><span></span></div>
          </div>
        )
    }

}

