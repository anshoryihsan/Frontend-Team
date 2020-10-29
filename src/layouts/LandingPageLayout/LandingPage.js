import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './styles.css'

function LandingPage() {
  const history = useHistory()

  return (
    <>
      <Container fluid>
      <Row>
        <Col lg={12} md={6} className="landing px-5 d-lg-block">
          <div className="d-flex justify-content-between mt-4">
            <h5 className="text-white font-weight-bold">Zwallet</h5>
            <div>
              <button
              onClick={() => history.push("/m/auth")} 
              className="bg-primary text-white login"
              >Login
              </button>
              <button 
              onClick={() => history.push("/m/auth/signup")}
              className="bg-white text-primary sign-up ml-3"
              >Sign Up
              </button>
            </div>
          </div>
          <div className="d-flex">
            <div className="col col-lg-8 justify-content-start text" width="400px">
              <h6 className="text-white font-weight-bold">Awesome App</h6>
              <h6 className="text-white font-weight-bold">For Saving Time.</h6>
              <button className="bg-white text-primary try">Try It Free</button>
            </div>
            <div className="col col-lg-4 justify-content-end img">
              <img src={window.location.origin + "/assets/images/img/png-phone.svg"} height="280em" width="190em" alt="images" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="brand d-flex justify-content-center">
          <img className="mr-3 mt-3" src={window.location.origin + "/assets/images/img/microsoft.svg"} height="45em" width="50em" alt="images" />
          <img className="mr-3 mt-3" src={window.location.origin + "/assets/images/img/dropbox.svg"} height="45em" width="50em" alt="images" />
          <img className="mr-3 mt-4" src={window.location.origin + "/assets/images/img/h&m.svg"} height="25em" width="30em" alt="images" />
          <img className="mr-3 mt-3" src={window.location.origin + "/assets/images/img/airbnb.svg"} height="45em" width="50em" alt="i
          mages" />
          <img className="mr-3 mt-3" src={window.location.origin + "/assets/images/img/canon.svg"} height="45em" width="50em" alt="images" />
          <img className="mt-3" src={window.location.origin + "/assets/images/img/dell.svg"} height="45em" width="50em" alt="images" />
        </div>
      </Row>
      <Row>
        <div className="about bg-secondary col cl-lg-12 col-sm-12 flex-column d-flex justify-content-center align-items-center">
          <h5 className="font-weight-bold mt-4"><span className="text-primary">About</span> The Application.</h5>
          <div className="desc text-center">
            <p>We have some garde features from the application and it's totally free</p>
            <p>to use by all users around the wolrd</p>
          </div>
          <div className="shadow-sm bg-white rounded-14 pl-3 pr-3 my-4 py-3 mx-2">
            <div className="bg-gray d-flex justify-content-center icons">
            <img className="d-flex mt-2 justify-content-center align-items-center" src={window.location.origin + "/assets/images/img/phone.svg"} height="15em" width="15em" alt="images" />
            </div>
            <div className="font-weight-bold mt-3 mb-3 text-dark text-center">
              24/7 Support
            </div>
            <div className="note text-center">
              <p>We have 24/7 contact support so you</p>
              <p>can contact us whenever you want</p>
              <p>and wwe will respond it</p>
            </div>
          </div>
          <div className="shadow-sm bg-white rounded-14 pl-3 pr-3 my-4 py-3 mx-2">
            <div className="bg-gray d-flex justify-content-center icons">
            <img className="d-flex mt-2 justify-content-center align-items-center" src={window.location.origin + "/assets/images/img/lock.svg"} height="15em" width="15em" alt="images" />
            </div>
            <div className="font-weight-bold mt-3 mb-3 text-dark text-center">
              Data Privacy
            </div>
            <div className="note text-center">
              <p>We make sure your data is save our</p>
              <p>database and we will encrypt any</p>
              <p>data you submitted to us</p>
            </div>
          </div>
          <div className="shadow-sm bg-white rounded-14 pl-3 pr-3 my-4 py-3 mx-2">
            <div className="bg-gray d-flex justify-content-center icons">
            <img className="d-flex mt-2 justify-content-center align-items-center" src={window.location.origin + "/assets/images/img/download.svg"} height="15em" width="15em" alt="images" />
            </div>
            <div className="font-weight-bold mt-3 mb-3 text-dark text-center">
              Easy Download
            </div>
            <div className="note text-center">
              <p>Zwallet is 100% totally free to use it's</p>
              <p>now available on Google Play Store</p>
              <p>and App Store</p>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="features d-flex col col-sm-12">
          <div className="col col-lg-4 justify-content-end">
            <img className="img-features1" src={window.location.origin + "/assets/images/img/png-phone2.svg"} height="180em" width="200em" alt="images" />
            <img className="img-features2" src={window.location.origin + "/assets/images/img/png-phone2.svg"} height="180em" width="200em" alt="images" />
          </div>
          <div className="col col-lg-8 justify-content-start desc-features" width="400px">
            <h5 className="font-weight-bold mt-3">All The <span className="text-primary">Great</span></h5>
            <h5 className="font-weight-bold">Zwallet Features.</h5>
            <div className="shadow-sm bg-white rounded-14 pl-3 pr-3 my-4 py-3 mx-2">
              <p className="font-weight-bold sub-desc-features1"><span className="text-primary">1. </span>Small Fee</p>
              <p className="sub-desc-features2">We only charge 5% of every success transaction done in Zwallet App.</p>
            </div>
            <div className="shadow-sm bg-white rounded-14 pl-3 pr-3 my-4 py-3 mx-2">
              <p className="font-weight-bold sub-desc-features1"><span className="text-primary">2. </span>Data Secured</p>
              <p className="sub-desc-features2">All your data is secured properly in our system and it's encrypted.</p>
            </div>
            <div className="shadow-sm bg-white rounded-14 pl-3 pr-3 my-4 py-3 mx-2">
              <p className="font-weight-bold sub-desc-features1"><span className="text-primary">3. </span>User Friendly</p>
              <p className="sub-desc-features2">Zwallet come up with modern and sleek design and not complicated.</p>
            </div>
          </div>
        </div>
      </Row>
      <Row>
      <div className="about bg-secondary col cl-lg-12 col-sm-12 flex-column d-flex justify-content-center align-items-center">
          <h5 className="font-weight-bold mt-4">What User are <span className="text-primary">Saying.</span></h5>
          <div className="desc text-center">
            <p>We have some garde features from the application and it's totally free</p>
            <p>to use by all users around the wolrd</p>
          </div>
          <div className="d-flex">
            <img className="img-left" src={window.location.origin + "/assets/images/img/left.svg"} height="60px" width="60px" alt="images" />
            <div className="shadow-sm bg-white rounded-14 pl-3 pr-3 my-4 py-3 mx-2">
              <div className="d-flex justify-content-center">
                <img src={window.location.origin + "/assets/images/img/1.png"} height="40em" width="40em" alt="images" />
              </div>
              <div className="font-weight-bold mt-3 mb-3 text-dark text-center">
                Alex Hansinburg
              </div>
              <p className="text-center person">Designer</p>
              <div className="note-person text-center">
                <p>"This is tehe most outstanding app that i've every time in my live, this app is such an amazing masterpiece and</p>
                <p>it's suitable for you who is bussy with there bussiness and must transfer money to another person aut there.</p>
                <p>Just try this app and see the power!"</p>
              </div>
            </div>
            <img className="img-right" src={window.location.origin + "/assets/images/img/right.svg"} height="60px" width="60px" alt="images" />
          </div>
        </div>
      </Row>
      <Row>
        <div className="bg-primary col col-sm-12">
          <div className="d-flex justify-content-between mt-4">
            <div className="left">
              <h6 className="text-white font-weight-bold mb-4">Zwallet</h6>
              <div className="text-white note-footer">
              <p>Simplify financial needs and saving</p>
              <p>much time in banking needs with</p>
              <p>one single app.</p>
              </div>
            </div>
          </div>
          <hr className="bg-white"></hr>
          <div className="d-flex justify-content-between mt-4 text-white">
            <div className="left-footer">
              <p>2020 Zwallet. All right reserved</p>
            </div>
            <div className="right-footer d-flex">
              <p>+62563788829902</p>
              <p className="ml-2">contact@zwallet.com</p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
    </>
  )
}

export default LandingPage
