import React from 'react'
import App1Logo from "../assets/img/app1.png"
import App2Logo from  "../assets/img/app2.png"
import MovilAppLogo from "../assets/img/movil-app.png"

export default function Order() {
  return (
    <div>
        <section className="app section bd-container">
            <div className="app__container bd-grid">
                <div className="app__data">
                    <span className="section-subtitle app__initial">App</span>
                    <h2 className="section-title app__initial">App is aviable</h2>
                    <p className="app__description">Find our application and download it, you can make food orders, see your deliveries on the way and much more.</p>
                    <div className="app__stores">
                        <a href="/"><img src={App1Logo} alt="" className="app__store"/></a>
                        <a href="/"><img src={App2Logo} alt="" className="app__store"/></a>
                    </div>
                </div>

                <img src={MovilAppLogo} alt="" className="app__img"/>
            </div>
        </section>
    </div>
  )
}
