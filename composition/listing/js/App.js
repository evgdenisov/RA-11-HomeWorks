'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => {
      return <Item color={selectColor(item.type)} item={item} />
    })}
  </main>
);

function selectColor(itemType) {
  switch(itemType) {
    case 'unisex' :
      return 'black';
    case 'male' :
      return 'blue';
    case 'female' :
      return 'orange';
  }
}