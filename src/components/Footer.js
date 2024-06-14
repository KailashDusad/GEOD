import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-cta"></div>
          <div className="footer-content">
            <div className="grid-2">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src="/water&amp;climate/static/media/logo.bda0098ba9a4b77c2fa7.png" className="img-fluid" alt="logo" />
                </div>
                <div className="footer-text">
                  <p>
                    Water and Climate Lab,<br />
                    AB-4/326,<br />
                    Indian Institute of Technology Gandhinagar.<br />
                    Palaj, Gandhinagar, Gujarat, PIN - 382355.
                  </p>
                  <div style={{ display: 'none' }}>
                    <a href="https://clustrmaps.com/site/1altr" title="Visit tracker">
                      <img src="//clustrmaps.com/map_v2.png?cl=fefefe&amp;w=a&amp;t=tt&amp;d=KQmDGlOaW_hm7zhdeP4pOltsnWVrCY6umYLeRp1Re_M&amp;co=151414&amp;ct=fefefe" alt="Visitor map" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Quick links</h3>
                </div>
                <ul>
                  <li>
                    <a aria-current="page" className="active" href="#/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://iitgn.ac.in/" target="_blank" rel="noreferrer">
                      IITGN
                    </a>
                  </li>
                  <li>
                    <a className="" href="#/research">
                      Research Areas
                    </a>
                  </li>
                  <li>
                    <a className="" href="#/publications">
                      Publications
                    </a>
                  </li>
                  <li>
                    <a className="" href="#/data">
                      Data
                    </a>
                  </li>
                  <li>
                    <a className="" href="#/people">
                      People
                    </a>
                  </li>
                  <li>
                    <a className="" href="#/news">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="https://indiadroughtmonitor.in/" target="_blank" rel="noreferrer">
                      India Drought Monitor
                    </a>
                  </li>
                  <li>
                    <a href="https://geoportalofindiandams.github.io/GeoID/" target="_blank" rel="noreferrer">
                      Geoportal of Indian Dams (GeoID)
                    </a>
                  </li>
                  <li>
                    <a href="https://sites.google.com/iitgn.ac.in/expforecastlandsurfaceproducts/home?authuser=0" target="_blank" rel="noreferrer">
                      EFLSP (IMD)
                    </a>
                  </li>
                  <li>
                    <a className="" href="#/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
