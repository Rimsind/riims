import Layout from "../components/layout/Layout";

import "../public/css/tiny-slider.css";
import "../public/css/select2.min.css";
import "../public/css/flatpickr.min.css";
import "../public/css/jquery.timepicker.min.css";
import "../public/css/materialdesignicons.min.css";
import "../public/css/remixicon.css";
import "../public/css/style.css";
import "../public/css/bootstrap.min.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

if (typeof window === "object") {
  // Check if document is finally loaded
  document.addEventListener("DOMContentLoaded", function () {});
}
