import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom/client';
// import '//edit.jsx';

function createShoe(){
  alert('Create shoe');
}

function readShoe(){
  alert('Read/view shoe');
}

function updateShoe(){
  alert('Update shoe');
}

function deleteShoe(){
  alert('Delete shoe');
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://gatewaytothedriftless.com/wp-content/uploads/2018/12/Shoe-Box-logo.png" alt="Shoe Box Logo"/>
      <h2>Welcome to our Milestone Project!</h2>
      <h3>The ShoeBox Inventory Management System</h3>
      <p>The Shoe Box Inventory Management System tracks inventory in real time to alert associates when orders should be placed to avoid out-of-stock situations.</p> 
      <p> Click on the links below to Create a new shoe, Read (view) the current inventory, Update the current inventory, or Delete inventory.
    </p>

    <div>
      <button Onclick={createShoe}>
        Create New Shoe
      </button> 
    </div>

    <div>
    <button Onclick={readShoe}>
      Read/View Inventory 
      </button>
    </div>

    <div>
    <button Onclick={updateShoe}>
      Update Inventory
      </button>
    </div>

    <div>
    <button Onclick={deleteShoe}>
      Delete Inventory 
      </button>
    </div>

    
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
