import PatientNavbar from "components/common/PatientNavbar";
import PatientHeader from "components/common/PatientHeader";
import {
  EmploymentStatus,
  FamilyMadicalHistory,
  FunctionalStatus,
  GeneralInformation,
  SocialHistory,
  MedicalHistory,
  UploadMedicalRecord,
} from "../../components/form/index";

import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import { useAuth } from "context";
import Script from "next/script";

const MedicalInfo = () => {
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
  // console.log(data);

  if (!data) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row justify-content-center">
            <PatientNavbar />
            <div className="col-xl-9 col-lg-9 col-md-9">
              <PatientHeader patient={data} />
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
