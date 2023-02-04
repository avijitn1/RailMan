import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { actionCreaters } from '../../state/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from './Table';
import "./UserDashboard.css";

export default function UserDashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreaters, dispatch)
  const user = useSelector(state => state.user)
  const [location, locationChange] = useState("");
  const [pnr, pnrChange] = useState("");
  const [day, dayChange] = useState("")

  const handleClick = () => {
    navigate('/ExploreRestaurants', {state: 
                                        {station: location,
                                         pnr: pnr,
                                        day: day}})
  }
    
    return (
      <div>
        <section className="user-dasboard">
            <div className="user-dasboard__container  bd-grid">
                <div className="user-dasboard-form">
                    <h2 className="section-title">Order Restaurant Food on Trains Online at Your Seat</h2>
                    <div>
                    <div class="input-group">
                        <input placeholder='PNR' value={pnr} onChange={e=>pnrChange(e.target.value)} class="form-control width100" />
                        <input placeholder='Location*' value={location} onChange={e=>locationChange(e.target.value)} class="form-control width100" />
                        <input type="date" class="form-control width100" value={day} onChange={e=>dayChange(e.target.value)}/>
                            <span class="input-group-btn">
                            <button class="btn btn-info" onClick={() => handleClick()}>Search</button>
                            </span>
                        </div>
                    </div>
                    <label className="user-dasboard-label">Active Orders</label>
                        {user.activeOrder.length > 0 ? <div className="user-dasboard-table"><Table type="active"/></div>:
                        <label className="user-dasboard-label">No Active Orders</label>}

                    <label className="user-dasboard-label">Past Orders</label>
                    <div className="user-dasboard-table">
                        <Table type="past"/>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
}
