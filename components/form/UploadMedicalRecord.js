import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import { parseCookies } from "nookies";
import Link from "next/link";

const UploadMedicalRecord = ({ patient }) => {
  const { upload_medical_record } = patient;

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
  const update_medical_records = async (data, event) => {
    console.log(data.whereLive);
    event.preventDefault();
    try {
      const payload = {};
      console.log(payload, "payload");
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
      alert("Medical Records Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="accordion-item border rounded mt-2">
        <h2 className="accordion-header" id="headingEight">
          <button
            className="accordion-button border-0 bg-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEight"
            aria-expanded="false"
            aria-controls="collapseEight"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-12">Upload Your Medical Record</div>
              {/* <div className="col-md-3">
                <span className="badge bg-warning"> Pending </span>
              </div> */}
            </div>
          </button>
        </h2>
        <div
          id="collapseEight"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="headingEight"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form onSubmit={handleSubmit(update_medical_records)}>
              <div className="gen-form mb-3">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-6" {...register("fileTitle")}>
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="" className="form-label">
                          Title
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="fileTitle"
                          placeholder="File Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6" {...register("uploadFile")}>
                    <input
                      type="file"
                      className="form-control"
                      name="uploadFile"
                    />
                  </div>
                </div>

                <div
                  className="right-button"
                  style={{ textAlign: "right", marginTop: "10px" }}
                >
                  <button type="submit" className="btn btn-success">
                    Save Changes
                  </button>
                </div>
              </div>
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
                    <th scope="col">Title</th>
                    <th scope="col">File Name</th>
                  </tr>
                </thead>
                <tbody>
                  {upload_medical_record.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>
                        <Link href="/">
                          <a>Download</a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadMedicalRecord;
