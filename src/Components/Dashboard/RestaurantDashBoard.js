import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Table.css";

class RestaurantDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active_orders: [],
            location: ""
            }
          }

    handleClick = () => {
    }

    componentDidMount() {
        let url = "http://localhost:3005/orders/?restaurant_name=PizzaHut"
        console.log(url)
        Promise.all([
          fetch(url)
          .then(res => res.json())
          .then(data => {
            const recieved = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].status != "active")
                    continue;
                
                const order = {
                    "restaurant_name" : data[i].restaurant_name,
                    "user": data[i].user,
                    "items": []
                }
                for (let j = 0; j < data[i].order.length; j++) {
                    const item = {
                     "item": data[i].order[j].item,
                     "count": data[i].order[j].count,
                    }
                    order.items.push(item)
                }
                recieved.push(order)
            }
           this.setState({ active_orders: recieved})
         })
         .catch((err)=>{
           window.alert('No Data found: ' + err.message);
         })
       ])
    }
      
    render() {
        console.log('Avijit')
        console.log(this.state.active_orders)
        return (
        <div>
            <section className="user-dasboard">
                <div className="user-dasboard__container  bd-grid">
                    <div className="user-dasboard-form">
                        <h2 className="section-title">Restaurant owner view</h2>
                        <div>
                        <div class="input-group">
                            <input placeholder='Location*' class="form-control width100" />
                                <span class="input-group-btn">
                                <button class="btn btn-info" onClick={() => this.handleClick()}>Add Menu</button>
                                </span>
                            </div>
                        </div>
                        <label className="user-dasboard-label">Active Orders</label>
                            <div className="user-dasboard-table">
                            <div>
                                <table className="rest__content">
                                    <tr>
                                        <th>User</th>
                                        <th>Items Count</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                    {this.state.active_orders.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                        <td>{val.user}</td>
                                        <td>
                                            {val.items.map((items, ids) => {
                                            return (
                                                <tr key={ids}>
                                                    <td>{items.item}</td>
                                                    <td>{items.count}</td>
                                                </tr>
                                            )
                                        })}
                                        </td>
                                        <td>
                                            <a href="/" className="button">Accept</a>
                                        </td>
                                        <td>
                                            <a href="/" className="button">Reject</a>
                                        </td>
                                        </tr>
                                    )
                                    })} 
                                </table>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default RestaurantDashboard;