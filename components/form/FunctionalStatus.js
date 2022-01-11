import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";

const FunctionalStatus = ({ patient }) => {
  const { functionalStatus } = patient;
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const updateFunctionalStatus = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        functionalStatus: {
          currentfunctionalStatus: data.currentFunctionalStatus,
          difficultyWithMove: data.locomotion.toString(),
          difficultyWithSelfcare: data.selfCareActivities.toString(),
          difficultyWithHomeManagement: data.homeManagement.toString(),
          difficultyWithWorkActivities: data.workActivities.toString(),
          priorFunctionalStatus: data.functionalStatus,
          prior_difficulty_explain: data.prior_difficulty_explain,
          prior_difficulty: data.prior_difficulty,
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
      alert("Current Functional Status Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  const difficultyWithMove = [
    "Bed Mobility",
    "Transfers (such as bed to chair, from bed to commode / toilet)",
    "On ramps",
    "Gait (Walking)",
    "On level surfaces",
    "On stairs",
    "On uneven surfaces",
  ];

  const difficultyWithSelfcare = ["Bathing", "Dressing", "Toileting"];

  const difficultyWithHomeManagement = [
    "Household Chores",
    "Shopping",
    "Driving / Transportation",
    "Care of Dependents",
  ];

  const difficultyWithWorkActivities = [
    "Work",
    "School",
    "Recreation",
    "Sport",
    "Play Activity",
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
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button border-0 bg-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-12">Current Functional Status</div>
              {/* <div className="col-md-3">
                <span className="badge bg-warning"> Pending </span>
              </div> */}
            </div>
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form onSubmit={handleSubmit(updateFunctionalStatus)}>
              <div className="gen-form mb-3">
                <div
                  className="row justify-content-between align-items-start"
                  {...register("currentFunctionalStatus")}
                >
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      Any dufficulty with current Functional Mobility:
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      name="currentFunctionalStatus"
                      placeholder=""
                      defaultValue={
                        !!functionalStatus &&
                        !!functionalStatus.currentfunctionalStatus
                          ? functionalStatus.currentfunctionalStatus
                          : ""
                      }
                    />
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
                      Any Difficulty with Walking / movement such as:
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {difficultyWithMove.map((item, index) => (
                        <div
                          className="col-md-4"
                          {...register("locomotion")}
                          key={index}
                        >
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="locomotion"
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  makeArrfromString(
                                    functionalStatus.difficultyWithMove
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
                      Any Difficulty with self-care activities such as:
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {difficultyWithSelfcare.map((item, index) => (
                        <div
                          className="col-md-4"
                          {...register("selfCareActivities")}
                          key={index}
                        >
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="selfCareActivities"
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  makeArrfromString(
                                    functionalStatus.difficultyWithSelfcare
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
                      Any Difficulty with home management such as:
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {difficultyWithHomeManagement.map((item, index) => (
                        <div
                          className="col-md-4"
                          {...register("homeManagement")}
                          key={index}
                        >
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="homeManagement"
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  makeArrfromString(
                                    functionalStatus.difficultyWithHomeManagement
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
                      Any Difficulty with community and work activities such as:
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {difficultyWithWorkActivities.map((item, index) => (
                        <div
                          className="col-md-4"
                          {...register("workActivities")}
                          key={index}
                        >
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="workActivities"
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  makeArrfromString(
                                    functionalStatus.difficultyWithWorkActivities
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
                <h3 className="fs-6 fs-bold text-dark">
                  Prior Functional Status(Your status prior to the date of
                  onset/Injury):
                </h3>
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-8">
                    <h3 className="fs-6 fs-bold text-dark">
                      Difficulty with community and work activities such as:
                    </h3>
                    <p className="space-x-4">
                      Prior to your current injury or condition, were you pain
                      free without any difficulty with locomotion/movement,self
                      care activities, home management, community and work
                      activities?
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-12">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          {...register("prior_difficulty")}
                        >
                          <option
                            name="prior_difficulty"
                            defaultValue={
                              !!functionalStatus &&
                              functionalStatus.prior_difficulty
                            }
                          >
                            {!!functionalStatus &&
                            functionalStatus.prior_difficulty
                              ? functionalStatus.prior_difficulty
                              : ""}
                          </option>
                          <option value="Yes" name="prior_difficulty">
                            Yes
                          </option>
                          <option value="No" name="prior_difficulty">
                            No
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row justify-centent-between align-items-center mb-3"
                  {...register("prior_difficulty_explain")}
                >
                  <div className="col-md-4">
                    <p className="space-x-4">If No, Please Explain:</p>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="prior_difficulty_explain"
                      placeholder=""
                      defaultValue={
                        !!functionalStatus &&
                        !!functionalStatus.prior_difficulty_explain
                          ? functionalStatus.prior_difficulty_explain
                          : ""
                      }
                    />
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

export default FunctionalStatus;
