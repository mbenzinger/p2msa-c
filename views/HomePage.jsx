import React, {Component} from 'react'
import { link } from 'react-router-dom'
import Layout from '../components/Layout'
import New from '/views/new'
import Show from '/views/show'
function HomePage() {
    return (
       <Layout>
            <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <img src="https://gatewaytothedriftless.com/wp-content/uploads/2018/12/Shoe-Box-logo.png" alt="Shoe Box Logo" />
    <h1>The ShoeBox Inventory Management System</h1>
     <p>The Shoe Box Inventory Management System tracks inventory in real time to alert associates when orders should be placed to avoid out-of-stock situations.</p> 
     <p> Click on the links below to Create a new shoe, Read (view) the current inventory, Update the current inventory, or Delete inventory.
    </p><br />
    <button type="button" onclick="New()">Create New Shoe</button>
    <br />
    <button type="button" onclick="Show()">View Inventory</button>
    <br />
    <button type="button">Update Inventory</button>
    <br />
    <button type="button">Delete Inventory</button><br />
  <script src="new.jsx" type="text/babel"></script>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="create.js"></script>
  <script src="read_inventory.js"></script>
  <script src="update_inventory.js"></script>
  <script src="delete_inventory.js"></script>
  <script src="like_button.js"></script>
  </body>
       </Layout>
    )
}

export default HomePage