import React from 'react';

import './index.css'

export default function Card(props) {

  return (
      <div class='card-container' >
          <div class='card-content' >
              <h1>{ props.titulo }</h1>
              <div class='image' ></div>
              <footer>
                  <p>{ props.descricao }</p>
              </footer>
          </div>
      </div>
  );
}