import ProfileLayout from "components/layout/ProfileLayout";
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
      <ProfilePicture patient={data} />

      <ProfileInformation patient={data} />

      <AddressInformation patient={data} />
    </>
  );
};

export default Profile;
Profile.getLayout = (Profile) => <ProfileLayout>{Profile}</ProfileLayout>;
