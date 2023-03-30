import React from "react";
import FeaturesTemplate from "./featuresTemplate";

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
                    <img src="images/features.jpg" className="features--image" width="90%" alt="" />
                  </div>
                </td>
                <td className="featuresTableRow2">
                  <div>
                    <table>
                      <FeaturesTemplate
                        count="1"
                        heading="Create a website"
                        text="Select from any of our industry-leading website
                      templates, designer fonts, and color palettes that
                      best fit your personal style and professional needs."
                      />
                      <FeaturesTemplate
                        count="2"
                        heading="Sell anything"
                        text="Explore which tools you want to add—whether it’s
                      setting up an online store, booking services, or
                      adding your favorite third-party extensions."
                      />
                      <FeaturesTemplate
                        count="3"
                        heading="Market your business"
                        text="Stand out in every inbox and social feed. On-brand
                      email campaigns and social tools make it easy to
                      retain customers and grow your audience."
                      />
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
