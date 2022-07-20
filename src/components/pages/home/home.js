import React, { useState, useEffect } from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import Loading from "../../base/loading/loading";
import TopMenu from "../../base/topMenu/topMenu";
import Header from "../../base/header/header";
import Carousel from "../../base/carousel/carousel"
import Cta from "../../base/cta/cta";
import TwoColumns from "../../base/twoColumns/twoColumns";
import Footer from "../../base/footer/footer";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {renderOptions} from "../../../utils/generals"
import { Link, useLocation } from "react-router-dom";

const query = `
{
    homePageCollection{
      items{
        pageTitle
        slug
        urlAccount
        seoMetadata{
            description
            hreflang
            href
            keywords
            canonicalHref
        }
        nav{
          logo{
            url
          }
          menuItems
        }
        carouselCollection{
          items{
            title
            description
            url
          }
        }
        headerOne
        servicesTiles
        cta {
          icon{
            url
          }
          text
          labelButton
          ctaButton
        }
        headerTwo
        twoColumns
        faqs {
          json
        }
        legals {
          title
          textContent {
            json
          }
        }
        footer{
          text
          socialMedia
        }
      }
    }
  }
`;

const Home = () => {
  console.log("hellow from here");

  const [page, setPage] = React.useState(null);
  const location = useLocation();
  const [slug, setSlug] = React.useState(null);

  useEffect(() => {
    // console.log(location.pathname);

    const url = String(location.pathname).split("/");
    const slug = url[2];
    console.log("slug", slug);
    setSlug(slug)

    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/5btn2y9mgkqy/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer b3AQUpg-vBOOEAh9q_GsxA5r5Iq170qfW8BnsdAjObE",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error("erros", errors);
        }

        // rerender the entire component with new data
        console.log("data", data);

        data.homePageCollection.items.forEach((element, index) => {
          if (element.slug === slug) {
            setTimeout(function(){
            setPage(data.homePageCollection.items[index]);
            },400)
          }
        });

        // setPage(data.homePageCollection.items[0]);
      });
  }, [location.key]);

  // show a loading screen case the data hasn't arrived yet
  if (!page) {
    return(<Loading />)
  }

  return (
    <div className="container-fluid main-container">
      <TopMenu urlAccount={page.urlAccount} />
      <Helmet htmlAttributes={{ lang : page.seoMetadata.hreflang }}>
        <meta charSet="utf-8" />
        <title>{page.pageTitle}</title>
        <meta name="description" content={page.seoMetadata.description}></meta>
        <meta name="keywords" content={page.seoMetadata.keywords}></meta>
        <link
          rel="alternate"
          hrefLang={page.seoMetadata.hreflang}
          href={page.seoMetadata.href}
          key={page.seoMetadata.hreflang}
        />
        <link rel="alternate" href="https://qa.tigomoney.com" hreflang="x-default" />

        <link rel="canonical" href={page.canonicalHref} />
      </Helmet>
      <Header logo={page.nav.logo} menuItems={page.nav.menuItems.menu} />
      {/* <section
        className="carousel-container "
        style={{ backgroundImage: `url(${page.carousel.url})` }}
      ></section> */}
      <section>
        <Carousel data={page.carouselCollection}/>
      </section>

      <section className="services-container ">
        <h1>{page.headerOne}</h1>
        <div className="container  tiles-container d-flex align-items-center justify-content-center ">
          <div className="row  ">
            {page.servicesTiles.items.map((service, index) => {
              return (
                <div key={index} className="col service-item ">
                  <div className="d-flex justify-content-center">
                    <img src={service.icon_url} alt={service.title} />
                  </div>
                  <div className="w-100 pt-3  d-flex justify-content-center title-service-container">
                    <div className="title-button">{service.title}</div>
                  </div>
                  <div className=" col-12  services-btn-container d-flex justify-content-center">
                    <a href={service.button_url} target="_blank" rel="noreferrer">
                    <button className="service-button">
                      {/* <Link to={service.button_url} target="_blank"> */}
                        {service.button_label}
                      {/* </Link> */}
                    </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Cta data={page.cta} />
        <br /><br /><br />
      </section>
      
      <section className="mt-4">
        <TwoColumns data={page.twoColumns}/>
      </section>

      <section>
        <div className="container-fluid faqs-container  pt-4">
            <div className="container faqs-div mt-4 pt-2">
              {documentToReactComponents(page.faqs.json, renderOptions)}
            </div>
        </div>
      </section>
      
      <Footer  data={page.footer}/>
      <div className=" p-1 container-fluid  tyc-container d-flex justify-content-center">
          <Link to={"/legales?id=homePageCollection&slug="+slug}>
            Términos y Condiciones
          </Link>
      </div>
      
    </div>
  );
};
export default Home;
