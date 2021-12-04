// import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <meta charSet="utf-8" />
        <title>RIIMS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Digital Health Care wensite" />
        <meta
          name="keywords"
          content="Appointment, Booking, Diagnosis, Report Generation, Online Culsulting"
        />
        <meta name="author" content="Shreethemes" />
        <meta name="email" content="info@riimstechnology.com" />
        <meta name="website" content="http://www.riimstechnology.com" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        {/* <script src="/js/bootstrap.bundle.min.js"></script> */}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
