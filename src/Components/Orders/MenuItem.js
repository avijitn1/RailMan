import React, {Component} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from 'react-redux'
import { actionCreaters } from '../../state/index';

import Plate1 from "../../assets/img/plate1.png";
import Plate2 from "../../assets/img/plate2.png";
import Plate3 from "../../assets/img/plate3.png";
import { addOrder, delOrder } from "../../state/actions";

class MenuItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
          menu: [],
          }
        }
  
    componentDidMount() {
          let url = "http://localhost:3005/menu/?restaurant_name=" + this.props.name
          //console.log(url)
          Promise.all([
            fetch(url)
            .then(res => res.json())
            .then(data => {
              const recieved = []
              for (let i = 0; i < data.length; i++) {
                   const item = {
                       "restaurant_name" : data[i].restaurant_name,
                       "item": data[i].item,
                       "price": data[i].price,
                   }
                   recieved.push(item)
              }
             this.setState({ menu: recieved})
           })
           .catch((err)=>{
             window.alert('No Data found: ' + err.message);
           })
         ])
      }

  
    render() {
      return (
  
        <table className="item__content">
              <tr>
              {this.state.menu.map((val, key) => {
                  return (
                      <td key={key}>
                          <img src={Plate3} alt="" className="menu__img"/>
                          <h3 className="menu__name">{val.item}</h3>
                          <h2 className="menu__detail">INR: {val.price}</h2>
                          <div className="button-row">
                          <button className="add_button" onClick={() => {this.props.addToOrderHandler(val)}}>+</button>
                          <button className="add_button" onClick={() => {this.props.delFromOrderHandler(val)}}>-</button>
                          </div>
                      </td>
                  )
                  })}
              </tr>
          </table>
      )
    }
  }
  
  const mapDispatchToProps = dispatch=>({
    addToOrderHandler: data => dispatch(addOrder(data)),
    delFromOrderHandler: data => dispatch(delOrder(data))
  })
  
export default connect (null, mapDispatchToProps)(MenuItem)