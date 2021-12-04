import PatientHeader from "components/common/PatientHeader";
import PatientNavbar from "components/common/PatientNavbar";
import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import { parseCookies } from "nookies";
import Script from "next/script";
const ProfileLayout = ({ children }) => {
  const [token, setToken] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  const { data, loading, error } = useSWR(
    `${apiUrl}/patients/${currentUser?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token && user) {
      setToken(token);
      const userData = JSON.parse(user);
      setCurrentUser(userData);
    }
  }, []);
  return (
    <>
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
        <script src="/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Navbar />
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row justify-content-center">
            <PatientNavbar />
            <div className="col-xl-9 col-lg-9 col-md-9">
              <PatientHeader patient={data} />
              <main>{children}</main>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfileLayout;
