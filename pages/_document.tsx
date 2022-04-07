import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Full Stack Web Developer portfolio" />
        <meta
          name="keywords"
          content="Full Stack Web Developer, Frontend Backend Software Engineer, portfolio, React, ReactJS, NextJS, JavaScript, JS, RoR, Ruby on Rails"
        />
        <meta property="og:image" content="../preview2.png" />
      </Head>
      <body className="bg-fixed bg-gradient-to-r from-green-400 to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
