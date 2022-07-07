import React, { useState, useEffect } from "react";
import "./internaInformation.css";
import { Helmet } from "react-helmet";
import Loading from "../../base/loading/loading";
import Header from "../../base/header/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useLocation } from "react-router-dom";
import TwoColumnsTextImage from "../../base/twoColumsTextImage/twoColumnsTextImage";
import TwoColumnsTextVideo from "../../base/twoColumsTextVideo/twoColumnsTextVideo";
import Cta from "../../base/cta/cta";
import Footer from "../../base/footer/footer";

const query = `
{
    internaInformacionCollection{
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
        twoColumnsTextVideo{
          video{
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
const InternaInformation = () => {
  const [page, setPage] = React.useState(null);
  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);

    const url = String(location.pathname).split("/");
    const slug = url[1];
    console.log("slug", slug);

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

        data.internaInformacionCollection.items.forEach((element, index) => {
          if (element.slug === slug) {
            console.log(
              " current data",
              data.internaInformacionCollection.items[index]
            );
            setPage(data.internaInformacionCollection.items[index]);
          }
        });

        // setPage(data.homePageCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!page) {
    return(<Loading />)
  }

  return (
    <div className="container-fluid main-container">
      <div className="top-menu"></div>
      <Helmet>
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
          <div
            className="masthead-container "
            style={{ backgroundImage: `url(${page?.mainImage.url})` }}
          ></div>
        </a>
      </section>
      <section>
        <div className="container container-h1 mt-4 pt-4  ">
          {documentToReactComponents(page.headerOne.json)}
        </div>
      </section>

      <section>
        <TwoColumnsTextImage data={page.twoColumnsTextImage} />
      </section>

      

      <section>
        <TwoColumnsTextVideo data={page.twoColumnsTextVideo} />
      </section>

      <section>
        <div className="mt-4 pt-4 pb-4">
          <Cta data={page.cta} />
        </div>
        <br />
      </section>

      <section>
        <div className="container-fluid faqs-container  pt-4">
            <div className="container faqs-div mt-4 pt-2">
              {documentToReactComponents(page.faqs.json)}
            </div>
        </div>
      </section>
      
      <Footer data={page.footer}/>
    </div>
  );
};

export default InternaInformation;