import Layout from "../components/layout/Layout";

import "../public/css/tiny-slider.css";
import "../public/css/select2.min.css";
import "../public/css/flatpickr.min.css";
import "../public/css/jquery.timepicker.min.css";
import "../public/css/materialdesignicons.min.css";
import "../public/css/remixicon.css";
import "../public/css/style.css";
import "../public/css/bootstrap.min.css";
import GlobalProvider from "context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;

if (typeof window === "object") {
  // Check if document is finally loaded
  document.addEventListener("DOMContentLoaded", function () {});
}
