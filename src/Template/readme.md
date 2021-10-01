```
title (string, required) - Used by clients if email is opened in a web page.
previewText (string, required) - Short description that appears in email clients
headCSS (string, optional) - CSS that belongs in `<head>`. Note, email clients may strip this out.
bgColor (string, optional) - The background color for the email. '#FFFFFF' is the default
lang (string, optional) - ISO language code
dir (string, optional) - Either 'ltr' or 'rtl'. 'ltr' is the default
```


In the end, we should have something similar to:

```
// COOL EXAMPLE

 import Document, {
     Html, Head, Main, NextScript,
   } from 'next/document';
 
// import Head from ''
// import Footer from ''
// import Content from ''

  // @TODO: here we can use our custom Head component
  // import Head from 'components/head';
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html>
          <Head />
          <body>
            <Main />
            <Template>
              <Header />
              <Content />
              <Footer />
            </Template>
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;

  ```