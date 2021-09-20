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


// expand it later
<!--[if !mso]>
      <!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
        			  		@-ms-viewport {width: 320px;}
        			  		@viewport {	width: 320px; }
        				}
      </style>
    <!--<![endif]-->
    <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if lte mso 11]>
      <style type="text/css">
        .outlook-group-fix{width:100% !important;}
      </style>
    <![endif]-->

    <!--[if !mso]>
      <!-->
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet"
      type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);
      </style>
    <!--<![endif]-->
