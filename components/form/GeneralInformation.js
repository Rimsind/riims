import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";

const GeneralInformation = ({ patient }) => {
  const { generalInformation } = patient;

  const { auth } = useAuth();

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
        `${apiUrl}/patients/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
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
                      <div className="col-md-2" {...register("race")}>
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
                          <div className="col-md-8">
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
                              value="African"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "African"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">African</p>
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
                              value="European"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "European"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">European</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="North American"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "North American"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">North American</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5" {...register("race")}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="race"
                              value="South American"
                              defaultChecked={
                                !!generalInformation &&
                                generalInformation.race === "South American"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">South American</p>
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
                          <option value="Englisg" name="language">
                            English
                          </option>
                          <option value="Hindi" name="language">
                            Hindi
                          </option>
                          <option value="Bengali" name="language">
                            Bengali
                          </option>
                          <option value="Marathi" name="language">
                            Marathi
                          </option>
                          <option value="Telugu" name="language">
                            Telugu
                          </option>
                          <option value="Tamil" name="language">
                            Tamil
                          </option>
                          <option value="Gujarati" name="language">
                            Gujarati
                          </option>
                          <option value="Urdu" name="language">
                            Urdu
                          </option>
                          <option value="Kannada" name="language">
                            Kannada
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="gen-form mb-3">
                    <div className="row justify-content-between align-items-start">
                      <div className="col-md-8">
                        <h3 className="fs-6 fs-bold text-dark">
                          Highest Level of Education
                        </h3>
                      </div>
                      <div className="col-md-4">
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Hand Foot Dominance
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div
                        className="col-md-2"
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
                          <div className="col-md-8">
                            <p className="space-x-4">N/A</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-5"
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
                          <div className="col-md-8">
                            <p className="space-x-4">Ambidexterous</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-2"
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
                          <div className="col-md-8">
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
                          <div className="col-md-8">
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
