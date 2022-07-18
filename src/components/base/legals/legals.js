import "./legals.css"
import Header from "../header/header";
import { Helmet } from "react-helmet";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../base/loading/loading";
import Footer from '../../base/footer/footer'


let query = `
{
    &page&{
      items{
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
        legals {
          title
          textContent {
            json
          }
        }
      }
    }
  }
`;


const Legals = (props) => {

    const [page, setPage] = React.useState(null);
    const location = useLocation();

    var qs = require("qs");
    useEffect(() => {

        const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
        console.log(queryParams.id)
        console.log(queryParams.slug)

        query = query.replace('&page&', queryParams.id)        
    
        
    
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
    
            data[queryParams.id].items.forEach((element, index) => {
              if (element.slug === queryParams.slug) {
                setPage(data[queryParams.id].items[index]);
              }
            });
    
            // setPage(data.homePageCollection.items[0]);
          });
      }, []);

      if (!page) {
        return(<Loading />)
      }
    
        return (
            <div className="container-fluid main-container">
              <div className="top-menu"></div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Legales - {page?.pageTitle}</title>
                <meta name="description" content="Legales tigo"></meta>
              </Helmet>
              <Header logo={page.nav.logo} menuItems={page.nav.menuItems.menu} />
              <div className="p2 pt-4 container tyc">
                { documentToReactComponents(page.legals.textContent.json)}
              </div>
              <Footer />
            </div>          
    )
}

export default Legals;