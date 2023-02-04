import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="contact section bd-container" id="contact">
        <div className="contact__container bd-grid">
          <div className="contact__data">
              <span className="section-subtitle contact__initial">Let's talk</span>
              <h2 className="section-title contact__initial">Contact us</h2>
              <p className="contact__description">If you want to place an order in our site, contact us and we will attend to you quickly, with our 24/7 chat service.</p>
          </div>

          <div className="contact__button">
              <a href="/" className="button">Contact us now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
