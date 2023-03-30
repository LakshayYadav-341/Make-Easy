import React from "react";
import ProjectCard from "./products--card";
import cardData from "./productData";

export default function Products() {
  const CardLayout = cardData.map(item=>{
    return(
      <ProjectCard
        image = {item.image}
        heading = {item.heading}
        text = {item.text}
      />
    );
  });
  return (
    <div className="products--section">
      <section className="products" id="products">
        <h1 id="products-h1">WE OFFER EVERYTHING YOU NEED</h1>

        {CardLayout}

        {/* <ProjectCard
          image="images/products1.jpg"  
          heading="Schedule appointments and sell classes"
          text="Allow clients to quickly view your availability and book appointments through your website."
        />

        <ProjectCard
          image="images/products2.jpg"
          heading="E-commerce made easy"
          text="Get everything you need to power your online store, from
          merchandising to checkout, and showcase your products or services
          at their absolute best."
        />

        <ProjectCard
          image="images/products3.jpeg"
          heading="Gate your community with membership sites"
          text="From virtual classes and workshops to newsletters, podcasts, and
          video series, Member Areas help you build, harness, and monetize
          the power of your online community."
        /> */}

        {/* <h2 id="productsMidH1">MARKET YOUR BUSINESS</h2> */}

        {/* <ProjectCard
          image="images/products4.png"
          heading="Reach and retain customers with email campaigns"
          text="Set up email campaigns that pull in your site’s styles, products,
          and blog posts so your communications feel effortlessly on-brand."
        />

        <ProjectCard
          image="images/products5.png"
          heading="Elevate your social presence"
          text="Create stunning, professional-looking content for all your social
          channels and manage your link in bio with the Unfold app. Choose
          from hundreds of templates and unique filters, fonts, and
          animations."
        /> */}
      </section>
    </div>
  );
}
