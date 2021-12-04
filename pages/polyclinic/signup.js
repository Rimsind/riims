import Link from "next/link";
const Signup = () => {
  return (
    <>
      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{ background: "url('/images/poly-cover2.jpg') center" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6">
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Polyclinic Sign Up</h4>
                  <div className="selector-login-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="login-doctor">
                          <Link href="/doctor/signup">
                            <a>Signup as Doctor</a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="login-polyclinic">
                          <Link href="/signup">
                            <a>Signup as Patient</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form action="index.html" className="login-form mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            First name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="s"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="s"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
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
                      <div className="col-md-12">
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
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input align-middle"
                              type="checkbox"
                              value=""
                              id="accept-tnc-check"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="accept-tnc-check"
                            >
                              I Accept
                              <a href="#" className="text-primary">
                                Terms And Condition
                              </a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-grid">
                          <button className="btn btn-primary">Register</button>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3 text-center">
                        <h6 className="text-muted">Or</h6>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-soft-primary"
                          >
                            <i className="uil uil-facebook"></i> Facebook
                          </a>
                        </div>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-soft-primary"
                          >
                            <i className="uil uil-google"></i> Google
                          </a>
                        </div>
                      </div>

                      <div className="mx-auto" style={{ textAlign: "center" }}>
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Already have an account ?
                          </small>
                          <Link href="/polyclinic/login">
                            <a className="text-dark fw-bold">Sign in</a>
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

export default Signup;
