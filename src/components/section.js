import React from "react";
import ReactDOM from "react-dom/client";
export default function Section() {
  return (
    <div className="section--">
      <section className="headSection">
        <div className="row">
          <div className="col headSectionContent col-lg-4">
            <div>
              <h1 className="headSectionh1">Get All You Need To Sell Anything</h1>
              <p className="headSectionP">
                Start free trial today. <br />
                No creditcard required.
              </p>
              <button className="btn btn-lg btn-dark" id="headSectionButton">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="col">
            <div className="mac--image">
              <div>
                <img
                  className="headSectionImagesBackground"
                  src={require("../images/background.jpg")}
                  alt=""
                />
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                  data-interval="1000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={require("../images/website-photo1.jpg")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={require("../images/website-photo2.jpg")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={require("../images/website-photo3.jpg")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
