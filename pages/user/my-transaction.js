import Image from "next/image";
import PatientNavbar from "components/common/PatientNavbar";
import PatientHeader from "components/common/PatientHeader";
const MyTransaction = () => {
  return (
    <>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row justify-content-center">
            <PatientNavbar />
            <div className="col-xl-9 col-lg-9 col-md-9">
              <PatientHeader />
              <div className="rightbar-content mt-3">
                <div className="right-item">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search Transaction"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="rightbar-content mt-3">
                <div className="card shadow p-3 custom-payment-card">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="row align-items-start">
                        <div className="col-md-2">
                          <Image
                            height="100"
                            width="100"
                            src="/images/paied.png"
                            className="img-fluid avatar avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="lh-1 time-para">Payment to</p>
                          <p className="lh-1 fw-bold">Dr. Amit Mahapatra</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="payment-details"
                        style={{ textAlign: "right" }}
                      >
                        <p className="lh-1 fw-bold">₹ 500</p>
                        <p className="lh-1">
                          Payment : <i className="ri-currency-line"></i> Cash
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="payment-time">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <p className="lh-1 time-para">Date - 12-11-21</p>
                          </div>
                          <div className="col-md-6">
                            <p className="lh-1 time-para">Time - 10:30 A.M</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbar-content mt-3">
                <div className="card shadow p-3 custom-payment-card">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="row align-items-start">
                        <div className="col-md-2">
                          <Image
                            height="100"
                            width="100"
                            src="/images/paied.png"
                            className="img-fluid avatar avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="lh-1">Payment to</p>
                          <p className="lh-1 fw-bold">Dr. Amit Mahapatra</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="payment-details"
                        style={{ textAlign: "right" }}
                      >
                        <p className="lh-1 fw-bold">₹ 500</p>
                        <p className="lh-1">
                          Payment : <i className="ri-bank-line"></i> Bank
                          Transfer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="payment-time">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <p className="lh-1 time-para">Date - 12-11-21</p>
                          </div>
                          <div className="col-md-6">
                            <p className="lh-1 time-para">Time - 10:30 A.M</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTransaction;
