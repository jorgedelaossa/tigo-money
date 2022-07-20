import React, { useState, useEffect } from "react";
import "./internaInformation2.css";
import { Helmet } from "react-helmet";
import Loading from "../../base/loading/loading";
import Header from "../../base/header/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {renderOptions} from "../../../utils/generals"
import { Link, useLocation } from "react-router-dom";
import TwoColumnsTextImage from "../../base/twoColumsTextImage/twoColumnsTextImage";
import TwoColumnsLeftTextImage from "../../base/twoColumsLeftTextImage/twoColumnsLeftTextImage";
// import TwoColumnsTextVideo from "../../base/twoColumsTextVideo/twoColumnsTextVideo";
import Cta from "../../base/cta/cta";
import Footer from "../../base/footer/footer";

const query = `
{
  internaInformacion2Collection{
      items{
        internalName
        pageTitle
        slug
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
        mainImage{
          url
        }
        mainImageCta
        headerOne{
          json
        }
        twoColumnsTextImage{
          rightText {
            json
          }
          image {
            url
          }
        }
        cta{
          icon {
            url
          }
          text
          labelButton
          ctaButton
        }
        twoColumnsTextLeftImage{
          image{
            url
          }
          leftText{
            json
          }
        }
        faqs{
          json
        }
        footer{
          text
          socialMedia
        }
      }
    }
  }

`;
const InternaInformation2 = () => {
  const [page, setPage] = React.useState(null);
  const location = useLocation();
  const [keyCountry, setKeyCountry] = React.useState(null);

  useEffect(() => {
    // console.log(location.pathname);

    const url = String(location.pathname).split("/");
    const slug = url[2];
    console.log("slug", slug);
    setKeyCountry(url[1]);

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

        data.internaInformacion2Collection.items.forEach((element, index) => {
          if (element.slug === slug) {
            console.log(
              " current data",
              data.internaInformacion2Collection.items[index]
            );
            setTimeout(function() {
              setPage(data.internaInformacion2Collection.items[index]);
            }, 500)
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
      <div className="top-menu"></div>
      <Helmet htmlAttributes={{ lang : page.seoMetadata.hreflang }}>
        <meta charSet="utf-8" />
        <title>{page.pageTitle}</title>
        <meta name="description" content={page.seoMetadata.description}></meta>
        <meta name="keywords" content={page.seoMetadata.keywords}></meta>
        <link
          rel="alternate"
          hreflang={page.seoMetadata.hreflang}
          href={page.seoMetadata.href}
        />
        <link rel="canonical" href={page.canonicalHref} />
      </Helmet>
      <Header logo={page?.nav.logo} menuItems={page?.nav.menuItems.menu} />

      <section>
        <a href={page?.mainImageCta} target="_blank" rel="noreferrer">
          {/* <div
            className="masthead-container "
            style={{ backgroundImage: `url(${page?.mainImage.url})` }}
          ></div> */}
          <div className="masthead-container d-flex aling-items-center justify-content-center">
            <img className="img-masthead" src={page?.mainImage.url} alt={page?.mainImage.title}/>
          </div>
        </a>
      </section>
      <section>
        <div className="container container-h1 mt-4 pt-4  ">
          {documentToReactComponents(page.headerOne.json, renderOptions)}
        </div>
      </section>

      <section>
        <TwoColumnsTextImage data={page.twoColumnsTextImage} />
      </section>

      
      

  
      {/* <section>
        <TwoColumnsTextVideo data={page.twoColumnsTextVideo} />
      </section> */}

      <section>
        <div className="mt-4 pt-4 pb-4">
          <Cta data={page.cta} />
        </div>
        <br />
      </section>

      <section>
        <TwoColumnsLeftTextImage data={page.twoColumnsTextLeftImage} />
      </section>


      <section>
        <div className="container-fluid faqs-container  pt-4">
            <div className="container faqs-div mt-4 pt-2">
              {documentToReactComponents(page.faqs.json, renderOptions)}
            </div>
        </div>
      </section>
      
      <Footer data={page.footer}/>
      <div className=" p-1 container-fluid  tyc-container d-flex justify-content-center">
          <Link to={"/legales?id=homePageCollection&slug=home-"+keyCountry}>
            Términos y Condiciones
          </Link>
      </div>
    </div>
  );
};

export default InternaInformation2;
