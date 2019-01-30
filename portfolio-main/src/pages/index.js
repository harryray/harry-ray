import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './min/index.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home-splash">
      <div>
        <h1>Harry Ray</h1>
        <h2>Digital</h2>
      </div>
      <div class="background--green">
        <h2 className="loopVisibility visible">Doing</h2>
        <h2 className="loopVisibility">Daring</h2>
        <h2 className="loopVisibility">Development</h2>
      </div>
    </div>
    <div className="work-splash">
      <div>
        <h1>Harry Ray</h1>
        <h2>Digital</h2>
      </div>
      <div class="background--purple">
        <h2 className="loopVisibility visible">Doing</h2>
        <h2 className="loopVisibility">Daring</h2>
        <h2 className="loopVisibility">Development</h2>
      </div>
    </div>
    <div className="contact-splash">
    </div>
  </Layout>
)

function headingSwitchout() {
  var e = document.querySelectorAll(".loopVisibility"),
      c = e.length,
      i = 0
  setInterval(function(){
    if(i === c) {
      i = 0
      e[c - 1].classList.remove('visible')
    }
    e[i - 1] && e[i - 1].classList.remove('visible')
    e[i] && e[i].classList.add('visible')
    i++
  }, 1000)
}
setTimeout(function() {
  headingSwitchout()
}, 500)

export default IndexPage
