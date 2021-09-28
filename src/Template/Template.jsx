// COOL EXAMPLE

// import Document, {
//     Html, Head, Main, NextScript,
//   } from 'next/document';
 
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