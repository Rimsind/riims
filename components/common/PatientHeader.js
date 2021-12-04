import Image from "next/image";
const PatientHeader = ({ patient }) => {
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
                      src="/images/profile.png"
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
                        <p className="patient-wallet-details">₹ 200:00</p>
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
