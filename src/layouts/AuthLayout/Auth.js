import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./styles.css"


function Auth({ child: Child }) {
  return (
    <Container fluid>
      <Row>
        <Col lg={7} className="bg-side-auth px-5 d-none d-lg-block">
          <div className="px-5 mx-5 my-4">
            <h4 className="text-white font-weight-bold">
              ZWallet
            </h4>

            <img
              src="/assets/images/phone-auth.webp"
              className="phone-auth-image"
              alt="Phone Auth Images"
            />

            <h5 className="text-white font-weight-bold">
              App that Covering Banking Needs.
            </h5>
            <div className="text-white">
              Zwallet is an application that focussing in banking needs for all users in the world.
              Always updated and always following world trends.
              5000+ users registered in Zwallet everyday with worldwide users coverage.
            </div>
          </div>
        </Col>

        <Col
          lg={5}
          xs
          className="px-lg-5 my-lg-0 py-lg-0 p-4 my-4 d-lg-flex vh-100 align-items-center justify-content-center flex-column"
        >
          <div className="mx-lg-3">
            <h4 className="text-primary font-weight-bold d-lg-none mb-4">
              <Link to="/">
                ZWallet
              </Link>
            </h4>

            <Child />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth
