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
          difficultyBathing: data.difficultyBathing.toString(),
          difficultyBedMobility: data.difficultyBedMobility.toString(),
          difficultyCareOfDependents:
            data.difficultyCareOfDependents.toString(),
          difficultyDressing: data.difficultyDressing.toString(),
          difficultyDriving: data.difficultyDriving.toString(),
          difficultyGai: data.difficultyGai.toString(),
          difficultyHouseholdChores: data.difficultyHouseholdChores.toString(),
          difficultyLevelSurfaces: data.difficultyLevelSurfaces.toString(),
          difficultyPlayActivity: data.difficultyPlayActivity.toString(),
          difficultyRamps: data.difficultyRamps.toString(),
          difficultyRecreation: data.difficultyRecreation.toString(),
          difficultySchool: data.difficultySchool.toString(),
          difficultyShopping: data.difficultyShopping.toString(),
          difficultySport: data.difficultySport.toString(),
          difficultyStairs: data.difficultyStairs.toString(),
          difficultyToileting: data.difficultyToileting.toString(),
          difficultyTransfers: data.difficultyTransfers.toString(),
          difficultyUnevenSurfaces: data.difficultyUnevenSurfaces.toString(),
          difficultyWork: data.difficultyWork.toString(),
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

  const makeArrfromString = (str) => {
    if (str) {
      const arr = str.split(",");
      const result = arr.map((item) => item.trim());
      return result;
    } else {
      str = "";
    }
  };

  const option = ["Current", "Prior"];

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
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Current Functional Mobility
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Bed Mobility</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyBedMobility"
                                {...register("difficultyBedMobility")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyBedMobility &&
                                  makeArrfromString(
                                    functionalStatus.difficultyBedMobility
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Transfers (such as bed to chair, from bed to commode /
                      toilet)
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyTransfers"
                                value={item}
                                {...register("difficultyTransfers")}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyTransfers &&
                                  makeArrfromString(
                                    functionalStatus.difficultyTransfers
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty with Walking / movement such as
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">On Ramps</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyRamps"
                                {...register("difficultyRamps")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyRamps &&
                                  makeArrfromString(
                                    functionalStatus.difficultyRamps
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Gai (Walking)</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyGai"
                                {...register("difficultyGai")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyGai &&
                                  makeArrfromString(
                                    functionalStatus.difficultyGai
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Level Surfaces
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyLevelSurfaces"
                                {...register("difficultyLevelSurfaces")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyLevelSurfaces &&
                                  makeArrfromString(
                                    functionalStatus.difficultyLevelSurfaces
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">On Stairs</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyStairs"
                                {...register("difficultyStairs")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyStairs &&
                                  makeArrfromString(
                                    functionalStatus.difficultyStairs
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Uneven Surfaces
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyUnevenSurfaces"
                                {...register("difficultyUnevenSurfaces")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyUnevenSurfaces &&
                                  makeArrfromString(
                                    functionalStatus.difficultyUnevenSurfaces
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Self-Care Activities Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Bathing</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyBathing"
                                {...register("difficultyBathing")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyBathing &&
                                  makeArrfromString(
                                    functionalStatus.difficultyBathing
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Dressing</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyDressing"
                                {...register("difficultyDressing")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyDressing &&
                                  makeArrfromString(
                                    functionalStatus.difficultyDressing
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Toileting</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyToileting"
                                {...register("difficultyToileting")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyToileting &&
                                  makeArrfromString(
                                    functionalStatus.difficultyToileting
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Home Management Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Household Chores</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyHouseholdChores"
                                {...register("difficultyHouseholdChores")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyHouseholdChores &&
                                  makeArrfromString(
                                    functionalStatus.difficultyHouseholdChores
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Shopping</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyShopping"
                                {...register("difficultyShopping")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyShopping &&
                                  makeArrfromString(
                                    functionalStatus.difficultyShopping
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Driving / Transporting
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyDriving"
                                {...register("difficultyDriving")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyDriving &&
                                  makeArrfromString(
                                    functionalStatus.difficultyDriving
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Care Of Dependents
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyCareOfDependents"
                                {...register("difficultyCareOfDependents")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyCareOfDependents &&
                                  makeArrfromString(
                                    functionalStatus.difficultyCareOfDependents
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Community And Work Activities Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Work</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyWork"
                                {...register("difficultyWork")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyWork &&
                                  makeArrfromString(
                                    functionalStatus.difficultyWork
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">School</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultySchool"
                                {...register("difficultySchool")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultySchool &&
                                  makeArrfromString(
                                    functionalStatus.difficultySchool
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Recreation</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyRecreation"
                                {...register("difficultyRecreation")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyRecreation &&
                                  makeArrfromString(
                                    functionalStatus.difficultyRecreation
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Sport</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultySport"
                                {...register("difficultySport")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultySport &&
                                  makeArrfromString(
                                    functionalStatus.difficultySport
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Play Activity</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyPlayActivity"
                                {...register("difficultyPlayActivity")}
                                value={item}
                                defaultChecked={
                                  !!functionalStatus &&
                                  !!functionalStatus.difficultyPlayActivity &&
                                  makeArrfromString(
                                    functionalStatus.difficultyPlayActivity
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
