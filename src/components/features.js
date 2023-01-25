import React from "react";

export default function Features() {
  return (
    <div className="features--section">
      <section className="features" id="features">
        <div className="container-fluid">
          <div className="featuresTitle">
            <h1 className="featuresTitleH1">GROW YOUR BUSINESS</h1>
          </div>
          <div className="features-content">
            <table>
              <tr>
                <td className="featuresTableRow1">
                  <div>
                    <img
                      src={require("../images/features.jpg")}
                      width="90%"
                      alt=""
                    />
                  </div>
                </td>
                <td className="featuresTableRow2">
                  <div>
                    <table>
                      <tr>
                        <td>
                          <h1 className="featuresCounting">1</h1>
                        </td>
                        <td className="featuresTableRightCol">
                          <h2 className="featuresTableH2">Create a website</h2>
                          <p className="featuresTableP">
                            Select from any of our industry-leading website
                            templates, designer fonts, and color palettes that
                            best fit your personal style and professional needs.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h1 className="featuresCounting">2</h1>
                        </td>
                        <td className="featuresTableRightCol">
                          <h2 className="featuresTableH2">Sell anything</h2>
                          <p className="featuresTableP">
                            Explore which tools you want to add—whether it’s
                            setting up an online store, booking services, or
                            adding your favorite third-party extensions.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h1 className="featuresCounting">3</h1>
                        </td>
                        <td className="featuresTableRightCol">
                          <h2 className="featuresTableH2">
                            Market your business
                          </h2>
                          <p className="featuresTableP">
                            Stand out in every inbox and social feed. On-brand
                            email campaigns and social tools make it easy to
                            retain customers and grow your audience.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="featuresButton">
                            <button className="btn btn-outline-dark btn-lg features-btn">
                              Get Started
                            </button>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
