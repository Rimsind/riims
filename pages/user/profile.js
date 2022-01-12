import PatientNavbar from "components/common/PatientNavbar";
import PatientHeader from "components/common/PatientHeader";
import AddressInformation from "components/form/AddressInformation";
import ProfileInformation from "components/form/ProfileInformation";
import ProfilePicture from "components/form/ProfilePicture";

import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";

import { useAuth } from "context";

import LoadingError from "components/common/LoadingError";

const Profile = () => {
  const { auth } = useAuth();

  const { data, loading, error } = useSWR(
    `${apiUrl}/patients/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  if (!data) {
    return <LoadingError />;
  }

  return (
    <>
      {" "}
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
