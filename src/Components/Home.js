import React from 'react'
import Main from "../assets/img/Main.jpg"

export default function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
            <div className="home__data">
                <h1 className="home__title">Railman App</h1>
                <h2 className="home__subtitle">Try the Food Catering Service For Indian Railways and Beyond.</h2>
                <a href="/" className="button">View Menu</a>
            </div>
            <img src={Main} alt="" className="home__img"/>
        </div>
        </section>
    </div>
  )
}

const PageNotFound = (props) => {
  console.log(props);
    return (
      <div>
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                  <h1>404 Page not found</h1>
              </div>
            </div>
          </section>
        </div>
    )
}

export { Home, PageNotFound }




