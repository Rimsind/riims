import PatientHeader from "components/common/PatientHeader";
import PatientNavbar from "components/common/PatientNavbar";

const MyTests = () => {
  return (
    <>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row justify-content-center">
            <PatientNavbar />

            <div className="col-xl-9 col-lg-9 col-md-9">
              <PatientHeader />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="left-item">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select One</option>
                      <option value="1">1 Week</option>
                      <option value="2">2 Week</option>
                      <option value="3">Today</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-item">
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search Test"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="rightbar-content mt-3">
                <div className="card shadow p-2 custom-order-card">
                  <div className="row align-items-baseline">
                    <div className="col-md-2">
                      <p>#21568</p>
                    </div>
                    <div className="col-md-2">
                      <p>21-10-2021</p>
                    </div>
                    <div className="col-md-2">
                      <p>10:30 A.M</p>
                    </div>
                    <div className="col-md-3">
                      <p>Dr. Amit Mahapatra</p>
                    </div>
                    <div className="col-md-2">
                      <p className="badge bg-success custom-badge">Completed</p>
                    </div>
                    <div className="col-md-1">
                      <div className="action-btn">
                        <a href="#" className="btn btn-secondary">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbar-content mt-3">
                <div className="card shadow p-2 custom-order-card">
                  <div className="row align-items-baseline">
                    <div className="col-md-2">
                      <p>#21958</p>
                    </div>
                    <div className="col-md-2">
                      <p>18-12-2021</p>
                    </div>
                    <div className="col-md-2">
                      <p>12:30 P.M</p>
                    </div>
                    <div className="col-md-3">
                      <p>Dr. Prasenjit Kamila</p>
                    </div>
                    <div className="col-md-2">
                      <p className="badge bg-warning custom-badge">Pending</p>
                    </div>
                    <div className="col-md-1">
                      <div className="action-btn">
                        <a href="#" className="btn btn-secondary">
                          View
                        </a>
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

export default MyTests;
