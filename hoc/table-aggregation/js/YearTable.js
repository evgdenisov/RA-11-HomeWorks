'use strict';

const YearTable = props => {

    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function getYearData(props) {
    const yearListObj = props.list.reduce( (newList, item) => {
          const date = new Date(item.date);
          const options = {
              year: 'numeric'
          };
          const year = date.toLocaleString('en', options);
          newList[year] = (newList[year]) ? newList[year] + item.amount : item.amount;
          return newList;
    }, {});
    const yearList = Object.keys(yearListObj)
      .sort( (year1, year2) => +year1 > +year2)
      .map(year => { 
        return { year: year, amount: yearListObj[year] };
      });
    return { list: yearList };
  }
  const YearTableFromRawData = fromRawData(getYearData)(YearTable);