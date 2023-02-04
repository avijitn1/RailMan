import React from 'react'
import AboutLogo from "../assets/img/about.jpg"

export default function About() {
  return (
    <div>
      <section className="about section bd-container" id="about">
            <div className="about__container  bd-grid">
                <div className="about__data">
                    <span className="section-subtitle about__initial">About us</span>
                    <h2 className="section-title about__initial">We deliver the best <br/> tasty food</h2>
                    <p className="about__description">We deliver the best and fresh food during your railway journey at select stations, with excellent customer service, the best meals and at the best price, visit us.</p>
                    <a href="/" className="button">Explore history</a>
                </div>

                <img src={AboutLogo} alt="About logo" className="about__img"/>
            </div>
        </section>
    </div>
  );
}
