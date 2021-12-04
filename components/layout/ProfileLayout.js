import PatientHeader from "components/common/PatientHeader";
import PatientNavbar from "components/common/PatientNavbar";
import Script from "next/script";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import { parseCookies } from "nookies";

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
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>

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
