import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import { parseCookies } from "nookies";

const GeneralInformation = ({ patient }) => {
  const { generalInformation } = patient;

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
  const updateGeneralInformation = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        generalInformation: {
          race: data.race,
          language: data.language,
          education: data.education,
          physical_dominance: data.handFootDominance,
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
      alert("General Information Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="accordion-item border rounded">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button border-0 bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-12">General Information</div>
              {/* <div className="col-md-4">
                <span className="badge bg-warning"> Pending </span>
              </div> */}
            </div>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse border-0 collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form onSubmit={handleSubmit(updateGeneralInformation)}>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">Race / Ethnicity</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="Asian"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "Asian"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Asian</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="Native American"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "Native American"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Native American</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="Black"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "Black"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Black</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="White"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "White"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">White</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="Pacific Islander"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "Pacific Islander"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Pacific Islander</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="Hispanic"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "Hispanic"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Hispanic</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="Latino"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "Latino"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Latino</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row align-items-start mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="col-md-6">
                  <div className="gen-form mb-3">
                    <div className="row justify-content-between align-items-start">
                      <div className="col-md-6">
                        <h3 className="fs-6 fs-bold text-dark">Language</h3>
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          {...register("language")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!generalInformation &&
                              generalInformation.language
                            }
                          >
                            {!!generalInformation && generalInformation.language
                              ? generalInformation.language
                              : ""}
                          </option>
                          <option value="Bengali" name="language">
                            Bengali
                          </option>
                          <option value="French" name="language">
                            French
                          </option>
                          <option value="English" name="language">
                            English
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="gen-form mb-3">
                    <div className="row justify-content-between align-items-start">
                      <div className="col-md-6">
                        <h3 className="fs-6 fs-bold text-dark">
                          Highest Level of Education
                        </h3>
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          {...register("education")}
                        >
                          <option
                            defaultChecked={
                              !!generalInformation &&
                              generalInformation.education
                                ? generalInformation.education
                                : ""
                            }
                          >
                            {!!generalInformation &&
                            generalInformation.education
                              ? generalInformation.education
                              : ""}
                          </option>
                          <option value="Grade School" name="education">
                            Grade School
                          </option>
                          <option value="Technical School" name="education">
                            Technical School
                          </option>
                          <option value="Some College" name="education">
                            Some College
                          </option>
                          <option value="Master's Degree" name="education">
                            Master&apos;s Degree
                          </option>
                          <option value="High School" name="education">
                            High School
                          </option>
                          <option value="Trade School" name="education">
                            Trade School
                          </option>
                          <option value="College Graduate" name="education">
                            College Graduate
                          </option>
                        </select>
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
                    <h3 className="fs-6 fs-bold text-dark">
                      Hand Foot Dominance
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div
                        className="col-md-3"
                        {...register("handFootDominance")}
                      >
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="handFootDominance"
                              value="N/A"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.physical_dominance === "N/A"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">N/A</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-3"
                        {...register("handFootDominance")}
                      >
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="handFootDominance"
                              value="Ambidexterous"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.physical_dominance ===
                                  "Ambidexterous"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Ambidexterous</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-3"
                        {...register("handFootDominance")}
                      >
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="handFootDominance"
                              value="Left"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.physical_dominance === "Left"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Left</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-3"
                        {...register("handFootDominance")}
                      >
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="handFootDominance"
                              value="Right"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.physical_dominance ===
                                  "Right"
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Right</p>
                          </div>
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

export default GeneralInformation;
