import Link from "next/link";
import Image from "next/image";
const TestNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg defaultscroll sticky navbar-dark custom-nav-bg">
        <div className="container">
          <Link href="/" passHref>
            <Image
              src="/images/logo-white.png"
              className="l-light"
              height="70"
              width="100"
              alt=""
            />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="sub-menu-item nav-link fs-6 text-uppercase">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/doctor">
                  <a className="sub-menu-item nav-link fs-6 text-uppercase">
                    Find Doctor
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/polyclinic">
                  <a className="sub-menu-item nav-link fs-6 text-uppercase">
                    Find Polyclinic
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pharmacy">
                  <a className="sub-menu-item nav-link fs-6 text-uppercase">
                    Pharmacy
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="sub-menu-item nav-link fs-6 text-uppercase">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
            <button type="button" className="btn btn-success me-1">
              Login
            </button>
            <button type="button" className="btn btn-primary ms-1">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TestNav;
