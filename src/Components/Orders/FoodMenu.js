import React, {Component, useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from 'react-redux'
import { actionCreaters } from '../../state/index';
import { bindActionCreators } from 'redux';
import Payment from "./Payment";
import MenuItem from "./MenuItem";
import "./Cart.css";



export default function FoodMenu(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const rest = location.state.name
  console.log(props)

  return (
    
    <div>
    <section className="order__container">
      <h2 className="section-title">Select dishes from the {rest} menu</h2>
      <div className="myrow">
        <div className="mycolumn">
          <MenuItem name={rest}/>
        </div>
        <div className="mycolumn">
          <Payment name={rest}/>
        </div>
      </div>
      </section>
    </div>
  );
}

