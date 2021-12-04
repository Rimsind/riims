import PatientHeader from "components/common/PatientHeader";
import PatientNavbar from "components/common/PatientNavbar";
import {
  EmploymentStatus,
  FamilyMadicalHistory,
  FunctionalStatus,
  GeneralInformation,
  SocialHistory,
  MedicalHistory,
  UploadMedicalRecord,
} from "../../components/form/index";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import { parseCookies } from "nookies";

const MedicalInfo = () => {
  const [token, setToken] = useState(null);

  const [currentUser, setcurrentUser] = useState(null);

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
  // console.log(data);

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token && user) {
      setToken(token);
      const userData = JSON.parse(user);
      setcurrentUser(userData);
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
              <PatientHeader />
              <div className="card border-0 rounded shadow mt-3">
                <div className="p-4">
                  <div className="accordion" id="accordionExample">
                    <GeneralInformation patient={data} />
                    <SocialHistory patient={data} />
                    <EmploymentStatus patient={data} />
                    <MedicalHistory patient={data} />
                    <FunctionalStatus patient={data} />
                    <FamilyMadicalHistory patient={data} />
                    <UploadMedicalRecord patient={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalInfo;
