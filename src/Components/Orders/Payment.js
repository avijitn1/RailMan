import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import allReducers from '../../state/reducers';


function Payment(props) {
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  let total = 0;

  const handleConfirm = (e) => {

      let data = {"user": user.userName,
                  "restaurant_name": props.name,
                  "status": "active",
                   "order": user.activeOrder}

      console.log(data);
  
      fetch("http://localhost:3005/orders", {
          method:'POST', 
          headers:{'content-type': 'application/json'},
          body:JSON.stringify(data)


      }).then((res)=>{
        window.alert('Order Successful...')
        navigate('/UserDashboard')
      }).catch((err)=>{
        window.alert('Order Failed...')
      })
    }

    const handleCancel = (e) => {
      e.preventDefault();
    }

    const handleBack = (e) => {
      navigate('/UserDashboard')
    }

    return(
      <div>
        <section className="payment__container">
        <h2 className="section-title">My Order</h2>
        <hr className="solid"/>
         {user.activeOrder.length == 0 ?
          <h2 className="section-title">Cart is empty</h2> :
          <div>
          <table>
          <tr>
            <th>Item</th>
            <th>Count</th>
            <th>Amount</th>
            <th></th>
          </tr>
          {user.activeOrder.map((val, key) => {
            total += val.price * val.count
            return (
              <tr key={key} >
                <td>{val.item}</td>
                <td>{val.count}</td>
                <td>{val.price * val.count}</td>
              </tr>
            )
          })}
        </table>
          </div>}
          <hr className="solid"/>
          <h2>Total INR: {total}</h2>
        <button className="pay_button" onClick={() => handleConfirm()}>Confirm</button>
        <button className="pay_button" onClick={() => handleCancel()}>Cancel</button>
        <button className="pay_button" onClick={() => handleBack()}>Dashboard</button>
        </section>
      </div>
    );
    
}

export default Payment;