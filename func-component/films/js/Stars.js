'use strict';

const Stars = function({count}) {
  let StarsCount = [];
  if (count >= 1 || count <= 5 || typeof count != 'Number') {
    for (let i = 0; i < count; i++) {
      StarsCount.push( <Star /> )
    }
    return (
      <ul className="card-body-stars u-clearfix">
        <li>
           { StarsCount }
        </li>
      </ul>
      );
    }
  else {
    return null;
  }
}
  




