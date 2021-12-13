import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const registerUser = async (payload) => {
    const res = await axios.post(
      "https://manage.riimstechnology.com/auth/local/register",
      payload
    );
    const result = await res.data;
    return result;
  };

  // creating user profile after user is created
  const createUserProfile = async (data, token) => {
    const profilePayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
    };

    //post function for the user profile
    const res = await axios.post(
      "https://manage.riimstechnology.com/patients",
      profilePayload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = res.data;
    return result;
  };

  //onsubmit function defined
  const onSubmit = async (data, e) => {
    e.preventDefault();

    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      alert("please fill all data");
      return;
    }

    try {
      const payload = {
        username: data.email,
        email: data.email,
        password: data.password,
      };

      const result = await registerUser(payload);
      // console.log(result);
      if (result.jwt) {
        // create profile

        const profile = await createUserProfile(data, result.jwt);

        await axios.put(
          `https://manage.riimstechnology.com/users/${result.user.id}`,
          {
            profileId: profile.id,
          },
          {
            headers: {
              Authorization: `Bearer ${result.jwt}`,
            },
          }
        );
      }
      alert("Registartion Completed");
      reset();
      router.push("/user/login");
    } catch (err) {
      alert("Registration Failed");
      console.log(err.message);
    }
  };

  return (
    <>
      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{ background: "url('/images/patient-cover2.jpg') center" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6">
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Patient Sign Up</h4>
                  <div className="selector-login-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="login-doctor">
                          <Link href="https://doctor.rimsind.com/signup">
                            <a>Signup as Doctor</a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="login-polyclinic">
                          <Link href="/polyclinic/signup">
                            <a>Signup as Polyclinic</a>
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
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            First name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            required=""
                            {...register("firstName")}
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
                            name="lastName"
                            required=""
                            {...register("lastName")}
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
                            {...register("email")}
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
                            name="password"
                            {...register("password")}
                          />
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

                      <div className="mx-auto" style={{ textAlign: "center" }}>
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Already have an account ?
                          </small>
                          <Link href="/user/login">
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
