'use strict';

const xhr = new XMLHttpRequest();
let items = [];
xhr.open('GET', 'https://neto-api.herokuapp.com/etsy', true);
xhr.send();
xhr.addEventListener('load', (response) => {
    items = JSON.parse(xhr.responseText);
    ReactDOM.render(
        <Listing items={items} />,
        document.getElementById('root')
    );
})

function showPrice(currency_code, price) {
    let itemPrice = {};
    if (currency_code == 'USD') {
        itemPrice = `$${price}`
    }
    if (currency_code == 'EUR') {
        itemPrice = `€${price}`
    }
    else {
        itemPrice = `${price} ${currency_code}`
    }
    return itemPrice;
}

function ShowLeft({quantity}) {
    let quantityClass = {};
    if (quantity <= 10) {
        quantityClass = 'item-quantity level-low'
    }
    if (quantity > 10 && quantity <= 20) {
        quantityClass = 'item-quantity level-medium'
    }
    if (quantity > 20) {
        quantityClass = 'item-quantity level-high'
    }
    return (
        <p className={quantityClass}>{quantity} left</p>
    )
}

const Listing = function({items}) {
    const itemsArr = [];
    let shortTitle = {};
    let price = {};
    for (const item of items) {
        if (item.title.length > 50) {
            shortTitle = item.title.slice(0, 50) + '…';
        }
        price = showPrice(item.currency_code, item.price);
        
        itemsArr.push(
            <div key={item.listing_id} className="item">
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{shortTitle || item.title}</p>
              <p className="item-price">{price}</p>
              <ShowLeft quantity={item.quantity} />
            </div>
          </div>
        )
    }
    return (
        <div className="item-list">
            {itemsArr}
        </div>
      
    )
}


