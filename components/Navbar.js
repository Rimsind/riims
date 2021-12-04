import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-pills dropdown-toggle p-0"
                >
                  <Link href="/user/my-appointments" passHref>
                    <Image
                      src="/images/profile.png"
                      className="avatar avatar-md-sm rounded-circle border-0 shadow"
                      height="50"
                      width="50"
                      alt=""
                    />
                  </Link>
                </button>
              </div>
            </li>
          </ul>
          <div className="menu-extras">
            <div className="menu-item">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div id="navigation">
            <ul className="navigation-menu nav-left nav-light me-auto ms-auto">
              <li>
                <Link href="/">
                  <a className="sub-menu-item">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/doctor">
                  <a className="sub-menu-item"> Find Doctors</a>
                </Link>
              </li>
              <li>
                <Link href="/polyclinic">
                  <a className="sub-menu-item">Find Polyclinic</a>
                </Link>
              </li>
              <li>
                <Link href="/pharmacy">
                  <a className="sub-menu-item">Pharmacy</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="sub-menu-item">Contact Us</a>
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
