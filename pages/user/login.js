import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import Router, { useRouter } from "next/router";
import { useAuth } from "context";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { redirect } = useRouter().query;

  const { dispatchAuth } = useAuth();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("please fill all data");
      return;
    }
    dispatchAuth({ type: "AUTH_LOADING" });

    try {
      const payload = {
        identifier: data.email,
        password: data.password,
      };
      const res = await axios.post(
        "https://manage.riimstechnology.com/auth/local",
        payload
      );
      const result = res.data;

      if (result.jwt && result.user.role.id === 1) {
        setCookie(null, "token", result.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setCookie(null, "user", JSON.stringify(result.user), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        dispatchAuth({
          type: "LOGIN_SUCCESS",
          payload: { token: result.jwt, user: result.user },
        });

        reset();
        alert("login success");
        if (redirect) {
          Router.push(`/${redirect}`);
        } else {
          Router.push("/");
        }
      }
    } catch (error) {
      dispatchAuth({
        type: "LOGIN_FAILED",
        payload: error.message
          ? error.message
          : "Something went wrong, try agin",
      });
      alert("login failed");
    }
  };

  return (
    <>
      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{
          background: "url('/images/patient-cover1.jpg') center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6">
              <div className="card login-page bg-white mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Patient Log In</h4>
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
                          <Link href="/polyclinic/login">
                            <a>Login as Polyclinic</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="login-form mt-4"
                  >
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
                            {...register("email")}
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
                            placeholder="password"
                            required=""
                            {...register("password")}
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

                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Dont have an account ?
                          </small>
                          <Link href="/user/signup">
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

export default Login;
