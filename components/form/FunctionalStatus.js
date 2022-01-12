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
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Current Functional Mobility
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Bed Mobility</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Transfers (such as bed to chair, from bed to commode /
                      toilet)
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div
                  className="row justify-content-between align-items-start"
                  {...register("currentFunctionalStatus")}
                >
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty with Walking / movement such as
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">On Ramps</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Gai (Walking)</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Level Surfaces
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">On Stairs</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Uneven Surfaces
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div
                  className="row justify-content-between align-items-start"
                  {...register("currentFunctionalStatus")}
                >
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Self-Care Activities Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Bathing</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Dressing</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Toileting</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div
                  className="row justify-content-between align-items-start"
                  {...register("currentFunctionalStatus")}
                >
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Home Management Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Household Chores</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Shopping</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Driving / Transporting
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Care Of Dependents
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form mb-3">
                <div
                  className="row justify-content-between align-items-start"
                  {...register("currentFunctionalStatus")}
                >
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Community And Work Activities Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Work</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">School</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Recreation</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Sport</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Play Activity</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Current"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Current</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              value="Prior"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Prior</p>
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

export default FunctionalStatus;
