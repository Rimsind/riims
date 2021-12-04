import Link from "next/link";
const PatientNavbar = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-3 col-12">
        <div className="rounded shadow overflow-hidden sticky-bar">
          <div className="sidebar-title">
            <p>Your Dashboard</p>
          </div>
          <ul className="list-unstyled sidebar-nav mb-0">
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/my-appointments">
                <a className="active navbar-link custom-navbar-link">
                  My Appointment
                </a>
              </Link>
            </li>
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/my-tests">
                <a className="navbar-link custom-navbar-link">My Tests</a>
              </Link>
            </li>
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/my-orders">
                <a className="navbar-link custom-navbar-link">
                  My Medicine Orders
                </a>
              </Link>
            </li>
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/my-appointments">
                <a className="navbar-link custom-navbar-link">
                  My Medicine Records
                </a>
              </Link>
            </li>
            {/* <li className="navbar-item custom-navbar-item">
              <Link href="/">
                <a className="navbar-link custom-navbar-link">My Feedback</a>
              </Link>
            </li> */}
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/my-transaction">
                <a className="navbar-link custom-navbar-link">My Payments</a>
              </Link>
            </li>
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/profile">
                <a className="navbar-link custom-navbar-link">
                  View / Update Profile
                </a>
              </Link>
            </li>
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/medical-info">
                <a className="navbar-link custom-navbar-link">
                  Medical Information
                </a>
              </Link>
            </li>
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/privacy-settings">
                <a className="navbar-link custom-navbar-link">
                  Privacy & Settings
                </a>
              </Link>
            </li>
            <li className="navbar-item custom-navbar-item">
              <Link href="/user/advance-settings">
                <a className="navbar-link custom-navbar-link">
                  Advance Settings
                </a>
              </Link>
            </li>
            {/* <li className="navbar-item custom-navbar-item">
              <Link href="/">
                <a className="navbar-link custom-navbar-link">
                  Online Consultations
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PatientNavbar;
