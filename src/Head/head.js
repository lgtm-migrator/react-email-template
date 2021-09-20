import React from 'react';

// TODO: styles and fonts can be passed into this component from the outside
import headStyles from './Styles/index.js';
import Fonts from '../Fonts/Fonts';

const Head = ({ title }) => (
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <style>
      {headStyles}
    </style>
    <Fonts />
  </head>
);

export default Head;
