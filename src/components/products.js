import React from "react";

export default function Products() {
    return (
        <div className="products--section">
            <section className="products" id="products">
      <h1 id="products-h1">WE OFFER EVERYTHING YOU NEED</h1>
      <div className="products-card">
        <img
          className="productsImg"
          src={require("../images/products1.jpg")}
          data-aos="fade-left"
          alt=""
        />
        <div>
          <h1>Schedule appointments and sell classes</h1>
          <p>
            Allow clients to quickly view your availability and book
            appointments through your website.
          </p>
        </div>
      </div>

      <div className="products-card">
        <img
          className="productsImg"
          src={require("../images/products2.jpg")}
          data-aos="fade-right"
          alt=""
        />
        <div>
          <h1>E-commerce made easy</h1>
          <p>
            Get everything you need to power your online store, from
            merchandising to checkout, and showcase your products or services at
            their absolute best.
          </p>
        </div>
      </div>

      <div className="products-card">
        <img
          className="productsImg"
          src={require("../images/products3.jpeg")}
          data-aos="fade-left"
          alt=""
        />
        <div>
          <h1>Gate your community with membership sites</h1>
          <p>
            From virtual classes and workshops to newsletters, podcasts, and
            video series, Member Areas help you build, harness, and monetize the
            power of your online community.
          </p>
        </div>
      </div>

      <h2 id="productsMidH1">MARKET YOUR BUSINESS</h2>

      <div className="products-card">
        <img
          className="productsImg"
          src={require("../images/products4.png")}
          data-aos="fade-right"
          alt=""
        />
        <div>
          <h1>Reach and retain customers with email campaigns</h1>
          <p>
            Set up email campaigns that pull in your site’s styles, products,
            and blog posts so your communications feel effortlessly on-brand.
          </p>
        </div>
      </div>

      <div className="products-card">
        <img
          className="productsImg"
          src={require("../images/products5.png")}
          data-aos="fade-left"
          alt=""
        />
        <div>
          <h1>Elevate your social presence</h1>
          <p>
            Create stunning, professional-looking content for all your social
            channels and manage your link in bio with the Unfold app. Choose
            from hundreds of templates and unique filters, fonts, and
            animations.
          </p>
        </div>
      </div>
    </section>
        </div>
    );
}