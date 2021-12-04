import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import { parseCookies } from "nookies";

const FamilyMadicalHistory = ({ patient }) => {
  const { familyHistory } = patient;
  // console.log(familyHistory, "family");
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
  const updateFamilyHistory = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        familyHistory: [
          ...familyHistory,
          {
            relation: data.relation,
            age_if_living: data.age_if_living,
            age_if_death: data.age_if_death,
            cause_of_death: data.cause_of_death,
            diseases: data.disease.toString(),
          },
        ],
      };
      // console.log(payload, "payload");
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
      alert("FamilyMedical History Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  const disease = [
    "Anemia",
    "Cancer",
    "Diabetes",
    "Epilepsy",
    "Glaucoma",
    "Heart Disease",
    "High Blood Pressure",
    "Hay Fever",
    "Hives",
    "Kidney Disease",
    "Mental Illness",
    "Rheumatoid Arthritis",
    "Tuberculosis",
  ];

  return (
    <>
      <div className="accordion-item border rounded mt-2">
        <h2 className="accordion-header" id="headingSeven">
          <button
            className="accordion-button border-0 bg-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-9">Family Medical History</div>
              <div className="col-md-3">
                <span className="badge bg-warning"> Pending </span>
              </div>
            </div>
          </button>
        </h2>
        <div
          id="collapseSeven"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form onSubmit={handleSubmit(updateFamilyHistory)}>
              <div className="gen-form mb-3">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="" className="form-label">
                          Relation
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="relation"
                          {...register("relation")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-8">
                        <label htmlFor="" className="form-label">
                          Age (if leaving)
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          name="age_if_living"
                          {...register("age_if_living")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-8">
                        <label htmlFor="" className="form-label">
                          Age (if death)
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          name="age_if_death"
                          {...register("age_if_death")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-7">
                        <label htmlFor="" className="form-label">
                          Cause of death
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          name="cause_of_death"
                          {...register("cause_of_death")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-2 fs-6 fs-bold text-dark">
                  Which disease you have? (Check all that apply)
                </h3>
                <div className="row justify-centent-between align-items-center">
                  {disease.map((item, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="disease"
                            value={item}
                            {...register("disease")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>{item}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
              </div>
            </form>
            <div
              className="rfa-gen-form-data-table mb-3"
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "3px",
                borderBottom: "1px solid #bbbaba",
              }}
            />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Relation</th>
                  <th scope="col">Age (if living)</th>
                  <th scope="col">Age (if death)</th>
                  <th scope="col">Cause of death</th>
                  <th>Problems</th>
                </tr>
              </thead>
              <tbody>
                {familyHistory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.relation}</td>
                    <td>{item.age_if_living}</td>
                    <td>{item.age_if_death}</td>
                    <td>{item.cause_of_death}</td>
                    <td>{item.diseases}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyMadicalHistory;
