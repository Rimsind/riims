import ProfileLayout from "components/layout/ProfileLayout";
import useSWR from "swr";
import { apiUrl } from "config/api";
import { parseCookies } from "nookies";
import axios from "axios";
import { useState, useEffect } from "react";
const MyAppointments = () => {
  const [token, setToken] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token && user) {
      setToken(token);
      const userData = JSON.parse(user);
      setCurrentUser(userData);
    }
  }, []);

  const { data } = useSWR(
    `${apiUrl}/appointments?patient=${currentUser?.profileId}`,
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
  console.log(data);
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="left-item">
            <select className="form-select" aria-label="Default select example">
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
                <p className="badge bg-primary custom-badge">Cash On Clinic</p>
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
    </>
  );
};

export default MyAppointments;
MyAppointments.getLayout = (MyAppointments) => (
  <ProfileLayout>{MyAppointments}</ProfileLayout>
);
