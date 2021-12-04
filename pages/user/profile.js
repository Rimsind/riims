import PatientHeader from "components/common/PatientHeader";
import PatientNavbar from "components/common/PatientNavbar";
import AddressInformation from "components/form/AddressInformation";
import ProfileInformation from "components/form/ProfileInformation";
import ProfilePicture from "components/form/ProfilePicture";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import { parseCookies } from "nookies";
const Profile = () => {
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

  if (!data) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row justify-content-center">
            <PatientNavbar />

            <div className="col-xl-9 col-lg-9 col-md-9">
              <PatientHeader patient={data} />
              <ProfilePicture patient={data} />

              <ProfileInformation patient={data} />

              <AddressInformation patient={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
