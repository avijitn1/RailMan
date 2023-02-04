import React, {Component} from 'react'
import { Pagination } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { actionCreaters } from '../../state/index';
import "./Restaurant.css"
import Plate1 from "../../assets/img/plate1.png"
import Plate2 from "../../assets/img/plate2.png"
import Plate3 from "../../assets/img/plate3.png"
import { connect } from "react-redux";


export default function Restaurants() {
    const onChange = (key) => {
        console.log(key);
      };
      const location = useLocation();
      const navigate = useNavigate();
      const station = location.state.station
      const pnr = location.state.pnr
      const day = location.state.day

  return (
    <div>
        <section className="restaurant-dasboard" id="restaurant-dasboard">
            <div className="restaurant-dasboard__container  bd-grid">
                    <table className="restaurant-dasboard-table">
                        <tr >
                            <td>PNR</td>
                            <td>{pnr}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{day}</td>
                        </tr>
                        <tr>
                            <td>Station</td>
                            <td>{station}</td>
                        </tr>
                    </table>

                    <Search location={station} navigation={navigate}/>

                    <div className="restaurant-dasboard-pagination">
                            <Pagination defaultCurrent={1} total={50} />
                </div>   
            </div>
        </section>
    </div>
  )
}

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
          restaurant: [],
          val: null
          }
    }

    componentDidMount() {
          let url = "http://localhost:3005/restaurants/?location=" + this.props.location
          console.log(url)
          
          Promise.all([
            fetch(url)
            .then(res => res.json())
            .then(data => {
               const recieved = []
              for (let i = 0; i < data.length; i++) {
                    const item = {
                        "name" : data[i].name,
                        "location": data[i].location,
                        "type": data[i].type,
                        "min_order": data[i].min_order
                    }
                    recieved.push(item)
               }
              this.setState({ restaurant: recieved}, () => console.log(this.state))
            })
            .catch((err)=>{
              window.alert('No Data found: ' + err.message);
            })
          ])
      }
  
    render() {
        const { navigation } = this.props;
      return (
        <table className="menu__content">
            <tr>
            {this.state.restaurant.map((val, key) => {
                return (
                    <td key={key}>
                        <img src={Plate3} alt="" className="menu__img"/>
                        <h3 className="menu__name">{val.name}</h3>
                        <h2 className="menu__detail">{val.location}</h2>
                        <h2 className="menu__detail">{val.type}</h2>
                        <span className="menu__preci">{val.min_order}</span>
                        <button className="button go_button" onClick={()=> navigation('/FoodMenu', {state: {name: val.name}})}><i className='bx bx-cart-alt'></i></button>
                    </td>
                )
                })}
            </tr>
        </table>
      );
    }
  }