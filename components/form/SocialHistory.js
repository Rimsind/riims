import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import { parseCookies } from "nookies";

const SocialHistory = ({ patient }) => {
  const { socialHistory } = patient;
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

  const { register, handleSubmit } = useForm();
  const updateSocialHistory = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        socialHistory: {
          homeStepsIn: data.homeStepsIn,
          homeStepsOut: data.homeStepsOut,
          culturalBelief: data.culturalBelief,
          smokeTobacco: data.smokeTobacco,
          drinkAlcohol: data.drinkAlcohol,
          exercise: data.exercise,
          exerciseNoInWeek: data.exerciseNoInWeek,
          exerciseDurationDailyInMin: data.exerciseDurationDailyInMin,
          live_where: data.live_where.toString(),
          live_with: data.live_with.toString(),
          home_haves: data.home_haves.toString(),
          do_uses: data.do_uses.toString(),
        },
      };

      const res = await axios.put(
        `${apiUrl}/patients/${currentUser?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res.data;
      alert("Social History Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  const home_haves = [
    "One Level",
    "Two Level",
    "Multi Level",
    "Stairs, No Ralling",
    "Ramps",
    "Elevation",
    "Elevators",
    "Stairs, Ralling",
    "Uneven Terrain",
  ];

  const do_uses = [
    "Forearm Crutches",
    "Axillary Crutches",
    "Walker",
    "Manual Wheelchair",
    "Quad Cane",
    "Two Cane",
    "Rolling Walker",
    "Motor Wheelchair",
    "Glasses",
    "Hearing Aid",
  ];

  const live_where = [
    "Private Home",
    "Rented Home",
    "Extended Care",
    "Hospice",
    "Apartment",
    "Border",
    "Homeless",
  ];

  const live_with = [
    "Alone",
    "Relative(s)",
    "Friend(s)",
    "Child or Children",
    "Spouse",
    "Patient(s)",
    "Group Setting",
    "Partner",
    "Brother(s)",
    "Sister(s)",
  ];

  const makeArrfromString = (str) => {
    if (str) {
      const arr = str.split(",");
      const result = arr.map((item) => item.trim());
      return result;
    } else {
      str = "";
    }
  };

  return (
    <>
      <div className="accordion-item border rounded mt-2">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button border-0 bg-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-12">
                Social History & Living Environment
              </div>
              {/* <div className="col-md-2">
                <span className="badge bg-warning"> Pending </span>
              </div> */}
            </div>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form onSubmit={handleSubmit(updateSocialHistory)}>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      Where do you live?
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {live_where.map((item, index) => (
                        <div
                          className="col-md-3"
                          {...register("live_where")}
                          key={index}
                        >
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="live_where"
                                value={item}
                                defaultChecked={
                                  !!socialHistory &&
                                  makeArrfromString(
                                    socialHistory.live_where
                                  ).includes(item)
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      With whom do you live?
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {live_with.map((item, index) => (
                        <div
                          className="col-md-3"
                          {...register("live_with")}
                          key={index}
                        >
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="live_with"
                                value={item}
                                defaultChecked={
                                  !!socialHistory &&
                                  makeArrfromString(
                                    socialHistory.live_with
                                  ).includes(item)
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      Does your home have?
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {home_haves.map((item, index) => (
                        <div className="col-md-3" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="home_haves"
                                value={item}
                                {...register("home_haves")}
                                defaultChecked={
                                  !!socialHistory &&
                                  makeArrfromString(
                                    socialHistory.home_haves
                                  ).includes(item)
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-1" {...register("homeHave")}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="homeHave"
                              value="value9"
                            />
                          </div>
                          <div
                            className="col-md-11"
                            {...register("homeHaveText")}
                          >
                            <div className="row justify-centent-between align-items-center">
                              <div className="col-md-5">
                                <p className="space-x-4">
                                  Any Obstacles (List):
                                </p>
                              </div>
                              <div className="col-md-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="homeHaveText"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">How Many Steps?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6" {...register("homeStepsOut")}>
                        <div className="row">
                          <div className="col-md-8">
                            <p className="space-x-4">
                              No. Steps Outside The Home:
                            </p>
                          </div>
                          <div className="col-md-4">
                            <input
                              type="number"
                              className="form-control"
                              name="homeStepsOut"
                              placeholder="0"
                              defaultValue={
                                !!socialHistory && !!socialHistory.homeStepsOut
                                  ? socialHistory.homeStepsOut
                                  : ""
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6" {...register("homeStepsIn")}>
                        <div className="row">
                          <div className="col-md-8">
                            <p className="space-x-4">
                              No. Steps Inside The Home:
                            </p>
                          </div>
                          <div className="col-md-4">
                            <input
                              type="number"
                              className="form-control"
                              name="homeStepsIn"
                              placeholder="0"
                              defaultValue={
                                !!socialHistory && !!socialHistory.homeStepsIn
                                  ? socialHistory.homeStepsIn
                                  : ""
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">Do You Use?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {do_uses.map((item, index) => (
                        <div className="col-md-3" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="do_uses"
                                value={item}
                                {...register("do_uses")}
                                defaultChecked={
                                  !!socialHistory &&
                                  makeArrfromString(
                                    socialHistory.do_uses
                                  ).includes(item)
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="child-gen-form mt-3 mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <h3 className="fs-6 fs-bold text-dark">Cultural / Religious</h3>
                <div className="row" {...register("culturalBelief")}>
                  <div className="col-md-4">
                    <p className="space-x-4">
                      Any cultural or religious beliefs or wishes that might
                      affect care?
                    </p>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="culturalBelief"
                      placeholder=""
                      defaultValue={
                        !!socialHistory && !!socialHistory.culturalBelief
                          ? socialHistory.culturalBelief
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="child-gen-form-heading mb-3">
                <h5 className="fs-5 fs-bold text-dark">
                  Social / Health Habits
                </h5>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3 className="fs-6 fs-bold text-dark">
                        Do You Smoke Tobacco?
                      </h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3" {...register("smokeTobacco")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="No"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.smokeTobacco === "No"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3" {...register("smokeTobacco")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="Occasionaly"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.smokeTobacco === "Occasionaly"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3" {...register("smokeTobacco")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="Socially"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.smokeTobacco === "Socially"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Socially</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3" {...register("smokeTobacco")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="Heavily"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.smokeTobacco === "Heavily"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3 className="fs-6 fs-bold text-dark">
                        Do You Drink Alcohol?
                      </h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3" {...register("drinkAlcohol")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="No"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.drinkAlcohol === "No"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3" {...register("drinkAlcohol")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="Occasionaly"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.drinkAlcohol === "Occasionaly"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3" {...register("drinkAlcohol")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="Socialy"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.drinkAlcohol === "Socialy"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Socialy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3" {...register("drinkAlcohol")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="Heavily"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.drinkAlcohol === "Heavily"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row ">
                    <div className="col-md-3">
                      <h3 className="fs-6 fs-bold text-dark">Excercise?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3" {...register("exercise")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exercise"
                                value="No"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.exercise === "No"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exercise"
                                value="Yes"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.exercise === "Yes"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div
                        className="row justify-centent-between align-items-center mb-3"
                        {...register("exerciseNoInWeek")}
                      >
                        <div className="col-md-6">
                          <p className="space-x-4">
                            If yes how many times per week?
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            name="exerciseNoInWeek"
                            placeholder=""
                            defaultValue={
                              !!socialHistory &&
                              !!socialHistory.exerciseNoInWeek
                                ? socialHistory.exerciseNoInWeek
                                : ""
                            }
                          />
                        </div>
                      </div>
                      <div
                        className="row justify-centent-between align-items-center"
                        {...register("exerciseDurationDailyInMin")}
                      >
                        <div className="col-md-6">
                          <p className="space-x-4">How many minutes per day?</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            name="exerciseDurationDailyInMin"
                            placeholder=""
                            defaultValue={
                              !!socialHistory &&
                              !!socialHistory.exerciseDurationDailyInMin
                                ? socialHistory.exerciseDurationDailyInMin
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form-soft-button">
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <div
                      className="right-button"
                      style={{ textAlign: "right" }}
                    >
                      <button type="submit" className="btn btn-success">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialHistory;
