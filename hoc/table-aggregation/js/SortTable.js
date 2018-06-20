'use strict';

const SortTable = props => {

    console.log('SortTable', props);

    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function getSortData(props) {
    const sortList = props.list.sort( (item1, item2) => {
      const date1 = new Date(item1.date);
      const date2 = new Date(item2.date);
      return date2 - date1;
    });
    return { list: sortList };
  }
  const SortTableFromRawData = fromRawData(getSortData)(SortTable);