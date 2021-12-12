import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import PatientNavbar from "components/common/PatientNavbar";
import PatientHeader from "components/common/PatientHeader";
const MyAppointments = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/appointments?patient=${auth.user?.profileId}`,
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

  const { data: patient } = useSWR(
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

  return (
    <>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row justify-content-center">
            <PatientNavbar />
            <div className="col-xl-9 col-lg-9 col-md-9">
              <PatientHeader patient={patient} />
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
                        placeholder="Search Appointment"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {data?.map((item, index) => (
                <div className="rightbar-content mt-3" key={index}>
                  <div className="card shadow p-2 custom-order-card">
                    <div className="row align-items-baseline">
                      <div className="col-md-2">
                        <p>#{item.id}</p>
                      </div>
                      <div className="col-md-2">
                        <p>{item.date}</p>
                      </div>

                      <div className="col-md-3">
                        <p>
                          Dr.{item.doctor?.firstName} {item.doctor?.lastName}
                        </p>
                      </div>
                      <div className="col-md-3">
                        <p>{item.polyclinic?.name}</p>
                      </div>
                      <div className="col-md-2">
                        <p className="badge bg-primary custom-badge">
                          Cash On Clinic
                        </p>
                      </div>
                      {/* <div className="col-md-1">
                <div className="action-btn">
                  <button className="btn btn-secondary">View</button>
                </div>
              </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAppointments;
