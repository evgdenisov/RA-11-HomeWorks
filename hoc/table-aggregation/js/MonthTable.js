'use strict';

const MonthTable = props => {

    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function getMonthData(props) {
      const monthList = [];
      props.list.forEach( item => {
          const date = new Date(item.date);
          const options = {
              month: 'short'
          };
          const monthStr = date.toLocaleString('en', options);
          const monthIndex = date.getMonth();
          if (monthList[monthIndex]) {
              monthList[monthIndex].amount += item.amount;
          } else {
              monthList[monthIndex] = {
                  month: monthStr,
                  amount: item.amount
              };
          }
      });
    return { list: monthList };
  }
  const MonthTableFromRawData = fromRawData(getMonthData)(MonthTable);