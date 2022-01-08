import Link from "next/link";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { apiUrl } from "config/api";

const Navbar = () => {
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

  return (
    <>
      <header
        id="topnav"
        className="defaultscroll sticky"
        style={{ backgroundColor: "#27314fed" }}
      >
        <div className="container" style={{ marginTop: "8px" }}>
          <div>
            <Link href="/">
              <a className="logo">
                <Image
                  src="/images/logo-white.png"
                  className="l-light"
                  height="70"
                  width="100"
                  alt=""
                />
              </a>
            </Link>
          </div>

          <ul className="dropdowns list-inline mb-0">
            <li className="list-inline-item mb-0">
              <div className="dropdown dropdown-primary"></div>
            </li>
            <li className="list-inline-item mb-0 ms-1">
              <div className="navbar-login-btn">
                <Link href="/user/login">
                  <a className="btn btn-success">Login</a>
                </Link>
              </div>
            </li>
            <li className="list-inline-item mb-0 ms-1">
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-pills  dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Image
                    height="50"
                    width="50"
                    src={data?.image?.url || "/images/profile.png"}
                    className="avatar avatar-ex-small rounded-circle"
                    alt=""
                  />
                </button>

                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3"
                  style={{ minWidth: "200px" }}
                >
                  <a
                    className="dropdown-item d-flex align-items-center text-dark"
                    href="doctor-profile.html"
                  >
                    <Image
                      height="50"
                      width="50"
                      src={data?.image?.url || "/images/profile.png"}
                      className="avatar avatar-md-sm rounded-circle"
                      alt=""
                    />
                    <div className="flex-1 ms-2">
                      <span className="d-block mb-1">
                        {data?.first_name} {data?.last_name}
                      </span>
                    </div>
                  </a>
                  <Link href="/user/profile">
                    <a
                      className="dropdown-item text-dark"
                      href="doctor-dashboard.html"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-dashboard align-middle h6"></i>
                      </span>
                      Profile
                    </a>
                  </Link>
                  <Link href="/user/my-appointments">
                    <a
                      className="dropdown-item text-dark"
                      href="doctor-dashboard.html"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-dashboard align-middle h6"></i>
                      </span>
                      My Appointment
                    </a>
                  </Link>
                  <Link href="/user/medical-info">
                    <a
                      className="dropdown-item text-dark"
                      href="doctor-dashboard.html"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-dashboard align-middle h6"></i>
                      </span>
                      Medical Information
                    </a>
                  </Link>
                  <Link href="/user/my-orders">
                    <a
                      className="dropdown-item text-dark"
                      href="doctor-dashboard.html"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-dashboard align-middle h6"></i>
                      </span>
                      My Medicine Orders
                    </a>
                  </Link>
                  <Link href="/user/settings">
                    <a
                      className="dropdown-item text-dark"
                      href="doctor-dashboard.html"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-dashboard align-middle h6"></i>
                      </span>
                      Settings
                    </a>
                  </Link>

                  <div className="dropdown-divider border-top"></div>
                  <button
                    className="dropdown-item text-dark"
                    // onClick={logOutHandler}
                  >
                    <span className="mb-0 d-inline-block me-1">
                      <i className="uil uil-sign-out-alt align-middle h6"></i>
                    </span>
                    Logout
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu nav-left nav-light me-auto ms-auto">
              <li>
                <Link href="/">
                  <a className="sub-menu-item">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/doctor">
                  <a className="sub-menu-item">Doctors</a>
                </Link>
              </li>
              <li>
                <Link href="/polyclinic">
                  <a className="sub-menu-item">Polyclinic</a>
                </Link>
              </li>
              <li>
                <Link href="/nursing-home">
                  <a className="sub-menu-item">Nursing Home</a>
                </Link>
              </li>
              <li>
                <Link href="/pharmacy">
                  <a className="sub-menu-item">Pharmacy</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="sub-menu-item">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
