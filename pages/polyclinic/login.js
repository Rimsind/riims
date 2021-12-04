import Link from "next/link";
const login = () => {
  return (
    <>
      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{
          background: "url('/images/poly-cover1.jpg') center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6">
              <div className="card login-page bg-white mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Polyclinic Login</h4>
                  <div className="selector-login-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="login-doctor">
                          <Link href="/doctor/login">
                            <a>Login as Doctor</a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="login-polyclinic">
                          <Link href="/login">
                            <a>Login as Patient</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form action="index.html" className="login-form mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input align-middle"
                                type="checkbox"
                                value=""
                                id="remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember-check"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="forgot-password.html"
                            className="text-dark h6 mb-0"
                          >
                            Forgot password ?
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button className="btn btn-primary">Log in</button>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3 text-center">
                        <h6 className="text-muted">Or</h6>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <a href="#" className="btn btn-soft-primary">
                            <i className="uil uil-facebook"></i> Facebook
                          </a>
                        </div>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <a href="#" className="btn btn-soft-primary">
                            <i className="uil uil-google"></i> Google
                          </a>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Dont have an account ?
                          </small>
                          <Link href="/polyclinic/signup">
                            <a className="text-dark fw-bold">Sign Up</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
