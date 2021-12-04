import Layout from "../components/Layout";
import Head from "next/head";

// import "../public/css/tiny-slider.css";
// import "../public/css/select2.min.css";
// import "../public/css/flatpickr.min.css";
// import "../public/css/jquery.timepicker.min.css";
// import "../public/css/materialdesignicons.min.css";
// import "../public/css/remixicon.css";
// import "../public/css/style.css";
// import "../public/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico" />

        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />

        <link
          href="/css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/css/remixicon.css" rel="stylesheet" type="text/css" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
        />

        <link rel="stylesheet" href="/css/tiny-slider.css" />

        <link href="/css/style.css" rel="stylesheet" type="text/css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <script src="/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default MyApp;

if (typeof window === "object") {
  // Check if document is finally loaded
  document.addEventListener("DOMContentLoaded", function () {});
}
