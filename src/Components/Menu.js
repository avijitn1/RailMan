import React from 'react'
import Plate1 from "../assets/img/plate1.png"
import Plate2 from "../assets/img/plate2.png"
import Plate3 from "../assets/img/plate3.png"

export default function Menu() {
  return (
    <div>
      <section className="menu section bd-container" id="menu">
                <span className="section-subtitle">Special</span>
                <h2 className="section-title">Menu of the week</h2>

                <div className="menu__container bd-grid">
                    <div className="menu__content">
                        <img src={Plate1} alt="" className="menu__img"/>
                        <h3 className="menu__name">Chicken Salad</h3>
                        <span className="menu__detail">Delicious dish</span>
                        <span className="menu__preci">INR 220.00</span>
                        <a href="/" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
                    </div>

                    <div className="menu__content">
                        <img src={Plate2} alt="" className="menu__img"/>
                        <h3 className="menu__name">Veg Salad</h3>
                        <span className="menu__detail">Delicious dish</span>
                        <span className="menu__preci">INR 120.00</span>
                        <a href="/" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
                    </div>
                    
                    <div className="menu__content">
                        <img src={Plate3} alt="" className="menu__img"/>
                        <h3 className="menu__name">Veg Rice</h3>
                        <span className="menu__detail">Delicious dish</span>
                        <span className="menu__preci">INR 90.0</span>
                        <a href="/" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
                    </div>
                </div>
            </section>
    </div>
  )
}
