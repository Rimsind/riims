import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import { parseCookies } from "nookies";
import { useAuth } from "context";

const MedicalHistory = ({ patient }) => {
  const { medicalHistory } = patient;
  const { auth } = useAuth();
  const { register, handleSubmit } = useForm();
  const updateMedicalHistory = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        medicalHistory: {
          past_medical_history: data.past_medical_history.toString(),
          diagnostic_tests: data.diagnostic_tests.toString(),
          allergies: data.allergies,
          prescription_medications: data.prescription_medications,
          non_prescription_medications:
            data.non_prescription_medications.toString(),
          pastMedicalHistoryForWomen: {
            pelvicDisease: data.pelvicDisease,
            endometriosis: data.endometriosis,
            periodTrouble: data.periodTrouble,
            isPregnant: data.isPregnant,
            complicatedPregnancy: data.complicatedPregnancy,
            other: data.other,
          },
          // surgicalHistory: [
          //   ...medicalHistory.surgicalHistory,
          //   {
          //     name: data.surgicalHistoryTitle,
          //     date: data.surgicalHistoryDate,
          //   },
          // ],
        },
      };
      // console.log(payload, "surgical history");

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
      alert("Medical History Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  const pastMedicalHistory = [
    "No past medical history",
    "Diabetes",
    "Genetic Disease",
    "Pacemaker",
    "AIDS",
    "Emphysema",
    "Kidney Disease",
    "Parkinson’s Disease",
    "Asthma",
    "Epilepsy/Seizures",
    "Liver Disease",
    "Prostate Disease",
    "Arthritis",
    "Glaucoma",
    "Low Blood Pressure",
    "Skin Disorder",
    "Blood Disorder",
    "Heart Attack",
    "Lung Disorder",
    "Stroke",
    "Broken Bones",
    "Heart Disease",
    "Lyme’s Disease",
    "Thyroid Disorder",
    "Circulation Problems",
    "Hepatitis",
    "Macular Degeneration",
    "Ulcers (Stomach)",
    "Cancer",
    "Head Injury",
    "Multiple Sclerosis",
    "Repeated Infections",
    "Cystic Fibrosis",
    "High Blood Pressure",
    "Osteoporosis",
    "Depression",
    "High Cholesterol",
    "Muscular Dystrophy",
  ];
  const diagnostic_tests = [
    "No Diagnostic Testing",
    "Bronchoscopy",
    "EMG/Nerve Conduction",
    "Stool Test",
    "Angiogram",
    "CT scan",
    "Mammogram",
    "Stress Test",
    "Arthroscopy",
    "Ultrasound",
    "MRI",
    "Urine Test",
    "Biopsy",
    "Echocardiogram",
    "Pap smear",
    "X - Ray",
    "Blood Test",
    "EEG",
    "Pulmonary function Test",
    "Bone Scan",
    "EKG",
    "Spinal Tap",
  ];

  const non_prescription_medications = [
    "No Medications",
    "Decongestant",
    "Motrin",
    "Advil/Alleve",
    "Excedrin",
    "Vitamins/Minerals",
    "Antihistamines",
    "Herbal Supplements",
    "Tylenol",
    "Asprin",
    "Ibuprophen/Naproxen",
    "Medications",
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
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button border-0 bg-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-12">Medical History</div>
              {/* <div className="col-md-4">
                <span className="badge bg-warning"> Pending </span>
              </div> */}
            </div>
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form onSubmit={handleSubmit(updateMedicalHistory)}>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <h3 className="fs-6 fs-bold text-dark">
                  Past medical history - Please check if you have or had any of
                  the following:
                </h3>
                <div className="row justify-content-between align-items-center">
                  {pastMedicalHistory.map((item, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="past_medical_history"
                            value={item}
                            {...register("past_medical_history")}
                            defaultChecked={
                              !!medicalHistory &&
                              !!medicalHistory.past_medical_history &&
                              makeArrfromString(
                                medicalHistory.past_medical_history
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
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                </div>
              </div>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <h3 className="fs-6 fs-bold text-dark">
                  Past medical history - For Women Only:
                </h3>
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="space-x-4">
                          ☆ Pelvic Inflammatory Disease
                        </p>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pelvicDisease"
                              value="Yes"
                              {...register("pelvicDisease")}
                              defaultChecked={
                                !!medicalHistory &&
                                !!medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .pelvicDisease === "Yes"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pelvicDisease"
                              value="No"
                              {...register("pelvicDisease")}
                              defaultChecked={
                                !!medicalHistory &&
                                !!medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .pelvicDisease === "No"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="space-x-4">☆ Trouble with Period</p>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="periodTrouble"
                              value="Yes"
                              {...register("periodTrouble")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .periodTrouble === "Yes"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="periodTrouble"
                              value="No"
                              {...register("periodTrouble")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .periodTrouble === "No"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="space-x-4">☆ Complicated Pregnancies</p>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="complicatedPregnancy"
                              value="Yes"
                              {...register("complicatedPregnancy")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .complicatedPregnancy === "Yes"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="complicatedPregnancy"
                              value="No"
                              {...register("complicatedPregnancy")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .complicatedPregnancie === "No"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="space-x-4">☆ Pregnant</p>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="isPregnant"
                              value="Yes"
                              {...register("isPregnant")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .isPregnant === "Yes"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="isPregnant"
                              value="No"
                              {...register("isPregnant")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .isPregnant === "No"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="space-x-4">☆ Endometriosis</p>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="endometriosis"
                              value="Yes"
                              {...register("endometriosis")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .endometriosis === "Yes"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="endometriosis"
                              value="No"
                              {...register("endometriosis")}
                              defaultChecked={
                                !!medicalHistory &&
                                medicalHistory.pastMedicalHistoryForWomen &&
                                medicalHistory.pastMedicalHistoryForWomen
                                  .endometriosis === "No"
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6" {...register("other")}>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="space-x-4">☆ Any Other</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="other"
                          placeholder=""
                          defaultValue={
                            !!medicalHistory &&
                            !!medicalHistory.pastMedicalHistoryForWomen
                              ? medicalHistory.pastMedicalHistoryForWomen.other
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <h3 className="fs-6 fs-bold text-dark">
                  Surgical History – Please list any surgeries you had, and if
                  known include dates:
                </h3>
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-12">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-12">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-3">Surgery Name</div>
                          <div className="col-md-4">
                            <input
                              type="text"
                              className="form-control"
                              name="surgicalHistoryTitle"
                              placeholder=""
                              {...register("surgicalHistoryTitle")}
                            />
                          </div>
                          <div className="col-md-3">
                            <input
                              type="date"
                              className="form-control"
                              name="surgicalHistoryDate"
                              placeholder=""
                              {...register("surgicalHistoryDate")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalHistory?.surgicalHistory?.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> */}

              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <h3 className="fs-6 fs-bold text-dark">
                  Diagnostic Test/Measures - within the past year, have you had
                  any of the following (Check all that apply):
                </h3>
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-12">
                    <div className="row">
                      {diagnostic_tests.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="diagnostic_tests"
                                value={item}
                                {...register("diagnostic_tests")}
                                defaultChecked={
                                  !!medicalHistory &&
                                  medicalHistory.diagnostic_tests &&
                                  makeArrfromString(
                                    medicalHistory.diagnostic_tests
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
                  Medications & Allergies – please check or list all medications
                  or allergies:
                </h3>
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      Non - Prescription
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {non_prescription_medications.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="non_prescription_medications"
                                value={item}
                                {...register("non_prescription_medications")}
                                defaultChecked={
                                  !!medicalHistory &&
                                  medicalHistory.non_prescription_medications &&
                                  makeArrfromString(
                                    medicalHistory.non_prescription_medications
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
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">Prescription:</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-10">
                            <p className="space-x-4">Medications:</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="prescriptionText"
                          placeholder=""
                          {...register("prescription_medications")}
                          defaultValue={
                            !!medicalHistory &&
                            !!medicalHistory.prescription_medications
                              ? medicalHistory.prescription_medications
                              : ""
                          }
                        />
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">Allergies</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-10">
                            <p className="space-x-4">
                              Known allergies to date:
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="allergies"
                          placeholder=""
                          {...register("allergies")}
                          defaultValue={
                            !!medicalHistory && !!medicalHistory.allergies
                              ? medicalHistory.allergies
                              : ""
                          }
                        />
                      </div>
                      <div className="col-md-4"></div>
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

export default MedicalHistory;
