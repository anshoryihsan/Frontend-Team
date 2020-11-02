import React from "react";
import { Link } from "react-router-dom";

function LandingPageDesktop() {
  return (
    <>
      <nav className="py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="font-weight-bold text-primary mb-0">ZWallet</h4>

            <div className="d-none d-lg-flex">
              <Link
                to="/auth"
                className="btn text-light bg-primary-outline rounded-14 mx-2 py-2 px-4 font-weight-bold"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="btn btn-light text-primary mx-2 rounded-14 py-2 px-4"
              >
                Sign Up
              </Link>
            </div>

            <div className="d-lg-none d-flex">
              <a
                to="/auth"
                className="btn text-dark bg-primary-outline rounded-14 mx-2 py-2 px-4 font-weight-bold"
              >
                Login
              </a>
              <a
                to="/auth/signup"
                className="btn btn-primary text-white mx-2 rounded-14 py-2 px-4"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="container">
        <div className="bg-landing z-index--1 d-lg-block d-none"></div>

        <div className="row align-items-center flex-row-reverse justify-content-md-between">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              className="phone-landing"
              src="/assets/images/png-phone.webp"
            />
          </div>

          <div className="col-md-6 flex text-center text-md-left">
            <h1 className="font-weight-bold">
              Awesome App <br />
              For Saving <span className="text-primary">Time</span>.
            </h1>

            <div className="py-4">
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </div>

            <a
              href="/signup.html"
              className="btn btn-primary px-4 py-3 rounded-14"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-5">
        <div className="container">
          <h1 className="text-center font-weight-bold">
            <span className="text-primary">About</span> the Application
          </h1>
          <div className="d-flex justify-content-center py-2">
            <div className="w-50 text-center d-none d-lg-block">
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </div>
          </div>

          <div className="text-center d-block d-lg-none">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>

          <div className="row mt-5">
            <div className="px-lg-2 py-2 py-lg-0 col-lg-4">
              <div className="card p-4 rounded-14">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src="assets/images/icons/phone-border.svg"
                      height="60px"
                      width="60px"
                    />
                    <h5 className="py-4 font-weight-bold">24/7 Support</h5>
                    <div className="text-center">
                      We have 24/7 contact support so you can contact us
                      whenever you want and we will respond it.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-lg-2 py-2 py-lg-0 col-lg-4">
              <div className="card p-4 rounded-14">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src="assets/images/icons/lock2.svg"
                      height="60px"
                      width="60px"
                    />
                    <h5 className="py-4 font-weight-bold">Data Privacy</h5>
                    <div className="text-center">
                      We make sure your data is safe in our database and we will
                      encrypt any data you submitted to us.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-lg-2 py-2 py-lg-0 col-lg-4">
              <div className="card p-4 rounded-14">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src="assets/images/icons/download2.svg"
                      height="60px"
                      width="60px"
                    />
                    <h5 className="py-4 font-weight-bold">Easy Download</h5>
                    <div className="text-center">
                      Zwallet is 100% totally free to use it’s now available on
                      Google Play Store and App Store.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-lg-3 py-5">
        <div className="row align-items-center">
          <div className="col-md-5 text-center text-lg-left">
            <h1 className="font-weight-bold">
              100+ <span className="text-primary">Trusted</span> Partners.
            </h1>

            <div className="mt-lg-4 mt-2">
              We have reached global level and have 100+ brand partners around
              the globe.
            </div>
          </div>

          <div className="col-md-7 d-flex justify-content-center mt-lg-0 mt-4">
            <img src="assets/images/icons/partner.svg" width="100%" />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-lg-3 pb-5 pb-lg-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 d-flex justify-content-center">
              <img
                className="phone-landing2"
                src="assets/images/png-phone2.webp"
              />
            </div>

            <div className="col-lg-7 pl-3">
              <h1 className="font-weight-bold mb-3 d-block text-lg-left text-center">
                All The <span className="text-primary">Great</span>
                <br />
                Zwallet Features.
              </h1>

              <div className="shadow-sm rounded-14 p-4 mt-4 bg-white">
                <div className="font-weight-bold">
                  <span className="text-primary">1.</span> Small Fee
                </div>
                <div className="text-dark mt-3">
                  We only charge 5% of every success transaction done in Zwallet
                  app.
                </div>
              </div>

              <div className="shadow-sm rounded-14 p-4 mt-4 bg-white">
                <div className="font-weight-bold">
                  <span className="text-primary">2.</span> Data Secured
                </div>
                <div className="text-dark mt-3">
                  All your data is secured properly in our system and it’s
                  encrypted.
                </div>
              </div>

              <div className="shadow-sm rounded-14 p-4 mt-4 bg-white">
                <div className="font-weight-bold">
                  <span className="text-primary">3.</span> User Friendly
                </div>
                <div className="text-dark mt-3">
                  Zwallet come up with modern and sleek design and not
                  complicated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h1 className="text-center font-weight-bold">
          What Users are <span className="text-primary">Saying.</span>
        </h1>
        <div className="d-flex justify-content-center my-4">
          <div className="w-50 text-center d-none d-lg-block">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>

          <div className="text-center d-block d-lg-none">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>
        </div>

        <div className="row">
          <div className="px-lg-2 py-2 py-lg-0 col-lg-4">
            <div className="card p-4 rounded-14">
              <div className="card-body">
                <div className="d-flex align-items-center flex-column">
                  <img
                    src="assets/images/cristine.png"
                    height="60px"
                    width="60px"
                  />
                  <h5 className="py-4 font-weight-bold">Sherina Chaw</h5>
                  <div className="text-center">
                    “I use this app since 2 years ago and this is the best app
                    that I’ve ever use in my entire life”
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-lg-2 py-2 py-lg-0 col-lg-4">
            <div className="card p-4 rounded-14">
              <div className="card-body">
                <div className="d-flex align-items-center flex-column">
                  <img
                    src="assets/images/jessica.png"
                    height="60px"
                    width="60px"
                  />
                  <h5 className="py-4 font-weight-bold">Jessica Mera</h5>
                  <div className="text-center">
                    “I use Zwallet to manage all financial needs. It’s super
                    easy to use and it’s 100% free app”
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-lg-2 py-2 py-lg-0 col-lg-4">
            <div className="card p-4 rounded-14">
              <div className="card-body">
                <div className="d-flex align-items-center flex-column">
                  <img
                    src="assets/images/momo.png"
                    height="60px"
                    width="60px"
                  />
                  <h5 className="py-4 font-weight-bold">Robert Chandler</h5>
                  <div className="text-center">
                    “Since I’m using this app, I’m not going to move to another
                    similar app. Thank you Zwallet!”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-5">
        <div className="container text-white">
          <div className="w-25 d-none d-lg-block">
            <h1 className="font-weight-bold">Zwallet</h1>
            <div className="my-4">
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </div>
          </div>

          <div className="d-block d-lg-none text-center">
            <h1 className="font-weight-bold">Zwallet</h1>
            <div className="my-4">
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </div>
          </div>

          <hr className="bg-white" />

          <div className="d-lg-flex flex-row-reverse text-center text-lg-left justify-content-between align-items-center">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <div className="text-white mr-4 small">+62 5637 8882 9901</div>
              <div className="text-white small">contact@zwallet.com</div>
            </div>

            <div className="text-white">2020 Zwallet. All right reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPageDesktop;
