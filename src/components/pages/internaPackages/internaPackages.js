import "./internaPackages.css";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loading from "../../base/loading/loading";
import Header from "../../base/header/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useLocation } from "react-router-dom";
import Cta from "../../base/cta/cta";
import Footer from "../../base/footer/footer";
import Packages from "../../base/packages/packages";

const query = `
{
    internaPaquetesCollection{
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
        packages
        cta{
          icon {
            url
          }
          text
          labelButton
          ctaButton
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

const InternaPackages = () => {
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

        data.internaPaquetesCollection.items.forEach((element, index) => {
          if (element.slug === slug) {
            console.log(
              " current data",
              data.internaPaquetesCollection.items[index]
            );
            setPage(data.internaPaquetesCollection.items[index]);
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
      <div className="top-menu"></div>
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
        <Packages data={page.packages} />
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

      <Footer data={page.footer} />
    </div>
  );
};
export default InternaPackages;
