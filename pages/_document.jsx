import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" translate="no">
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="../public/icons/logo.png"
          />
          <link rel="apple-touch-icon" href="../public/icons/logo.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="http://dynojs.vercel.app" />
          <meta name="twitter:creator" content="@oxygentaed_fire" />
          <meta name="twitter:title" content="Dyno Js" />
          <meta
            name="twitter:description"
            content="Dyno Js is a dynamically typed web tool, which allows to create donations links, petition links etc, and directly embed them in your project."
          />
          <meta
            name="twitter:image"
            content="https://dynojs.vercel.app/screenshots/og.png"
          />

          <meta property="og:title" content="Dyno Js - Plugins made easy." />
          <meta
            property="og:description"
            content="Dyno Js is a dynamically typed web tool, which allows to create donations links, petition links etc, and directly embed them in your project."
          />
          <meta
            property="og:image"
            content="https://dynojs.vercel.app/screenshots/og.png"
          />
          <meta property="og:url" content="http://dynocdn.vercel.app" />
          <meta property="og:site_name" content="Dyno Js"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
