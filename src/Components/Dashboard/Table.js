import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import allReducers from '../../state/reducers';
// Example of a data array that
// you might receive from an API
const data = [
    { date: "1-Jan-2003", restaurant: 'Jain Food', amount: 375, status: 'delivered'},
    { date: "2-Jan-2003", restaurant: 'KFC', amount: 345,status: 'delivered' },
    { date: "3-Jan-2003", restaurant: 'PizzaHut', amount: 234,status: 'delivered'},
    { date: "3-Jan-2003", restaurant: 'PizzaHut', amount: 234,status: 'delivered'},
  ]
    
  function Table(props) {
    const user = useSelector(state => state.user)

    return (
      <div>
        { props.type == "past" ?
        <div className="user-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Restaurant Name</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.date}</td>
                  <td>{val.restaurant}</td>
                  <td>{val.amount}</td>
                  <td>{val.status}</td>
                  <td>
                      <a href="/" className="button">Reorder</a>
                  </td>
                </tr>
              )
            })}
          </table>
        </div> :

        <div className="user-table">
          <table>
            <tr>
              <th>Restaurant</th>
              <th>Item</th>
              <th>Count</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            {user.activeOrder.map((val, key) => {
              return (
                <tr key={key} >
                  <td>{val.restaurant_name}</td>
                  <td>{val.item}</td>
                  <td>{val.count}</td>
                  <td>{val.price * val.count}</td>
                  <td>active</td>
                </tr>
              )
            })}
        </table>
        </div>}
      </div>
    );
  }
    
  export default Table;