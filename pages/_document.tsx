import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
          <link
            href="https://pvinis.github.io/iosevka-webfont/3.4.1/iosevka.css"
            rel="stylesheet"
          />
          <link
            href='//rsms.me/inter/inter-display.css'
            rel='stylesheet'
            type='text/css'
          ></link>
          <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
