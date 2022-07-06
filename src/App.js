import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


// const query = `
// {
//   pageCollection {
//     items {
//       title
//       logoCollection {
//         items {
//           url
//           description
//         }
//       }
//     }
//   }
// }
// `



const richTextDocument = {
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'Hello',
          data: {},
          marks: [{ type: 'bold' }],
        },
        {
          nodeType: 'text',
          value: ' world!',
          data: {},
          marks: [{ type: 'italic' }],
        },
      ],
    },
  ],
};

const query = `
{
  pageLandingCollection{
    items{
      title
      hero {
        title
        image {
          url
      	}
        text {
            json
          
        }
      }      
    }
  } 
}
`

function App() {

  const [page, setPage] = useState(null);
  const [renderText, setRenderText] = useState(false);
  

  useEffect(() => {
    window
      // .fetch(`https://graphql.contentful.com/content/v1/spaces/cpychttjrz70/`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Authenticate the request
      //     Authorization: "Bearer z0VzQk2Jb4953bGVxIM1WgBXh9sKrZeiSjC3e7q998s",
      //   },
      //   // send the GraphQL query
      //   body: JSON.stringify({ query }),
      // })   
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
          console.error('erros',errors);
        }

        // rerender the entire component with new data
        console.log('data',data);
        setPage(data.pageLandingCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  // if (!page) {
  //   return "Loading...";
  // }


  const Bold = ({ children }) => <span className="bold">{children}</span>;

  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };



  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <span style={{color: "#fff"}}>Tigo Money Page</span>
          <br /><br />
            <ul>
              <li><Link to="/elsalvador/home">El salvador</Link></li> 
              <li><Link to="/honduras/home">Honduras</Link></li> 
              <li><Link to="/bo/home">Bolivia</Link></li> 
            </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
