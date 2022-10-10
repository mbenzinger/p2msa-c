import React from 'react'
import { link } from 'react-router-dom'

function Layout({children}) {
    return (
      <html>
      <head>
        <title>{html.title || 'Shoe Box'}</title>
        <link rel="stylesheet" href="/styling.css" />
           </head>
      <body>
        <div className="wrapper">
          <header>
            <h1><a href="/HomePage">Shoe Box</a></h1>
          </header>
          <div className="container">
            {html.children}
          </div>
        </div>
      </body>
      </html>
    )
  }
export default Layout