import { useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import Link from "next/link";
import { useAuth } from "context";
import { uploadImage } from "utils/uploadImage";

const UploadMedicalRecord = ({ patient }) => {
  const { upload_medical_record } = patient;
  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState();
  const [profileImage, setProfileImage] = useState();

  const uploadProfileImage = async () => {
    setLoading(true);
    const image = await uploadImage(profileImage, auth.token);
    const payload = {
      upload_medical_record: [
        ...upload_medical_record,
        {
          title: title,
          file: image,
        },
      ],
    };
    const response = await axios.put(
      `${apiUrl}/patients/${auth.user.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = await response.data;
    alert("Image uploaded succesfully");
    setLoading(false);
    return result;
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
            <form>
              <div className="gen-form mb-3">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-6">
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
                          name="title"
                          placeholder="File Name"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload your Image"
                      name="uploadFile"
                      required=""
                      onChange={(e) => setProfileImage(e.target.files[0])}
                    />
                  </div>
                </div>

                <div
                  className="right-button"
                  style={{ textAlign: "right", marginTop: "10px" }}
                >
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn btn-primary"
                    value={loading ? "loading..." : "upload"}
                    disabled={loading}
                    onClick={uploadProfileImage}
                  />
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
                        <Link href={item.file?.url}>
                          <a target="_blank">Download</a>
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
