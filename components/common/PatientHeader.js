// import { useState, useEffect } from "react";
// import { apiUrl } from "config/api";
// import useSWR from "swr";
import Image from "next/image";
// import { parseCookies } from "nookies";
const PatientHeader = ({ patient }) => {
  // const [token, setToken] = useState(null);

  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const { token, user } = parseCookies();
  //   if (token && user) {
  //     setToken(token);
  //     const userData = JSON.parse(user);
  //     setCurrentUser(userData);
  //   }
  // }, []);

  // const { data, loading, error } = useSWR(
  //   `${apiUrl}/patients/${currentUser?.profileId}`,
  //   async (url) => {
  //     const res = await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const result = res.data;
  //     return result;
  //   }
  // );
  // const { auth } = useAuth();
  // console.log(auth);
  return (
    <>
      <div className="card border-0 shadow rounded mb-3">
        <div className="right-bar-top-item">
          <div className="rightbar-profile">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="row align-items-flex-start">
                  <div className="col-md-1 pe-md-0">
                    <Image
                      height="40"
                      width="40"
                      src={patient?.image?.url || "/images/profile.png"}
                      className="img-fluid avatar avatar-ex-sm rounded"
                      alt=""
                    />
                  </div>
                  <div className="col-md-11 ps-md-0">
                    <p>
                      {patient?.first_name} {patient?.last_name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="payment-wallet">
                  <div className="row align-items-flex-start">
                    <div className="col-md-2 pe-md-0">
                      <div className="patient-wallet">
                        <p className="patient-wallet-details">
                          <i className="ri-wallet-fill"></i>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-10 ps-md-0">
                      <div className="patient-wallet">
                        <p className="patient-wallet-details">₹ 00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHeader;
