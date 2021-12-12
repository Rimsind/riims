import Image from "next/image";
import PatientNavbar from "components/common/PatientNavbar";
import PatientHeader from "components/common/PatientHeader";
const MyOrders = () => {
  return (
    <>
      {" "}
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
                      placeholder="Search Medicinie Order"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="rightbar-content mt-3">
                <div className="card shadow p-3 custom-order-card">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="row align-items-start">
                        <div className="col-md-3">
                          <Image
                            height="100"
                            width="100"
                            src="/images/doctors/01.jpg"
                            className="img-fluid avatar avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="col-md-9">
                          <p className="lh-1 fw-bold">Medicine Name</p>
                          <p className="lh-1 time-para">Qty - 10 pcs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="order-price">
                        <div className="order-price-details text-center">
                          <p className="lh-1 fw-bold">₹ 5000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="payment-details"
                        style={{ textAlign: "right" }}
                      >
                        <div className="row align-items-flex-start">
                          <div className="col-md-5 pe-md-0">
                            <div className="patient-order-icon">
                              <p className="patient-order-status-success">
                                <i className="ri-check-line"></i>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-7 ps-md-0">
                            <div className="patient-order">
                              <p className="patient-order-details">
                                Delivered on Oct 21
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="lh-1">Your item has been delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbar-content mt-3">
                <div className="card shadow p-3 custom-order-card">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="row align-items-start">
                        <div className="col-md-3">
                          <Image
                            height="100"
                            width="100"
                            src="/images/doctors/01.jpg"
                            className="img-fluid avatar avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="col-md-9">
                          <p className="lh-1 fw-bold">Medicine Name</p>
                          <p className="lh-1 time-para">Qty - 10 pcs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="order-price">
                        <div className="order-price-details text-center">
                          <p className="lh-1 fw-bold">₹ 5000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="payment-details"
                        style={{ textAlign: "right" }}
                      >
                        <div className="row align-items-flex-start">
                          <div className="col-md-4 pe-md-0">
                            <div className="patient-order-icon">
                              <p className="patient-order-status-warning">
                                <i className="ri-error-warning-line"></i>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-8 ps-md-0">
                            <div className="patient-order">
                              <p className="patient-order-details">
                                Will deliver on Oct 21
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="lh-1">Your item has been pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbar-content mt-3">
                <div className="card shadow p-3 custom-order-card">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="row align-items-start">
                        <div className="col-md-3">
                          <Image
                            height="100"
                            width="100"
                            src="/images/doctors/01.jpg"
                            className="img-fluid avatar avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="col-md-9">
                          <p className="lh-1 fw-bold">Medicine Name</p>
                          <p className="lh-1 time-para">Qty - 10 pcs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="order-price">
                        <div className="order-price-details text-center">
                          <p className="lh-1 fw-bold">₹ 5000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="payment-details"
                        style={{ textAlign: "right" }}
                      >
                        <div className="row align-items-flex-start">
                          <div className="col-md-6 pe-md-0">
                            <div className="patient-order-icon">
                              <p className="patient-order-status-danger">
                                <i className="ri-close-line"></i>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 ps-md-0">
                            <div className="patient-order">
                              <p className="patient-order-details">
                                Cancel on Oct 21
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="lh-1">Your item has been cancel</p>
                      </div>
                    </div>
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

export default MyOrders;
