import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

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
  if (!page) {
    return "Loading...";
  }


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
        {/* <a href={page.logoCollection.items[0].description} target="_blank" rel="noreferrer">
        <img src={page.logoCollection.items[0].url} className="App-logo" alt="logo" />
        </a> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload1. */}
          {/* {page.title} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container">
        hello
        <div className="row">
          <div className="col-6" style={{border: '1px solid #FFF', height: '1em'}}>hello</div>
          <div className="col-6" style={{border: '1px solid #FFF', height: '1em'}}>my friend</div>
        </div>
        <div>
          container <br />
          {/* {documentToReactComponents(richTextDocument, options)} */}
          {documentToReactComponents(page.hero.text.json, options)}
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
