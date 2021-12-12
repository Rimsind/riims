import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";

const ProfileInformation = ({ patient }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const updateProfile = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        first_name: data.first_name,
        last_name: data.last_name,
        dob: data.dob,
        gender: data.gender,
        marital_status: data.marital_status,
        phone: data.phone,
        blood_group: {
          id: data.blood_group,
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
      alert("Profile Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div
        className="p-4"
        style={{
          background: "aliceblue",
          marginBottom: "20px",
        }}
      >
        <form onSubmit={handleSubmit(updateProfile)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  placeholder="First Name"
                  {...register("first_name")}
                  defaultValue={!!patient.first_name ? patient.first_name : ""}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  name="last_name"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("last_name")}
                  defaultValue={!!patient.last_name ? patient.last_name : ""}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">DOB</label>
                <input
                  name="dob"
                  type="date"
                  className="form-control"
                  placeholder="Your age"
                  {...register("dob")}
                  defaultValue={!!patient.dob ? patient.dob : ""}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...register("gender")}
                >
                  <option
                    name="gender"
                    defaultValue={!!patient.gender && patient.gender}
                  >
                    {!!patient.gender && patient.gender}
                  </option>
                  <option name="gender" value="Male">
                    Male
                  </option>
                  <option name="gender" value="Female">
                    Female
                  </option>
                  <option name="gender" value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Matarial Status</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...register("marital_status")}
                >
                  <option
                    name="marital_status"
                    defaultChecked={
                      !!patient.marital_status && patient.marital_status
                    }
                  >
                    {!!patient.marital_status && patient.marital_status}
                  </option>
                  <option name="marital_status" value="Single">
                    Single
                  </option>
                  <option name="marital_status" value="Married">
                    Married
                  </option>
                  <option name="marital_status" value="Separated">
                    Separated
                  </option>
                  <option name="marital_status" value="Divorced">
                    Divorced
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...register("blood_group")}
                >
                  <option
                    name="blood_group"
                    defaultValue={
                      !!patient.blood_group?.name && patient.blood_group?.name
                    }
                  >
                    {!!patient.blood_group?.name && patient.blood_group?.name}
                  </option>
                  <option name="blood_group" value="2">
                    A+
                  </option>
                  <option name="blood_group" value="3">
                    A-
                  </option>
                  <option name="blood_group" value="4">
                    B+
                  </option>
                  <option name="blood_group" value="5">
                    B-
                  </option>
                  <option name="blood_group" value="6">
                    AB+
                  </option>
                  <option name="blood_group" value="7">
                    AB-
                  </option>
                  <option name="blood_group" value="9">
                    O+
                  </option>
                  <option name="blood_group" value="8">
                    O-
                  </option>
                </select>
              </div>
            </div>

            <div className="col-md-4" {...register("contactDetailsEmail")}>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  name="contactDetailsEmail"
                  id="email"
                  type="email"
                  className="form-control"
                  readOnly
                  defaultValue={!!patient.email ? patient.email : ""}
                />
              </div>
            </div>

            <div className="col-md-4" {...register("phone")}>
              <div className="mb-3">
                <label className="form-label">Phone no.</label>
                <input
                  name="phone"
                  id="number"
                  type="number"
                  className="form-control"
                  placeholder="Phone no."
                  defaultValue={!!patient.phone ? patient.phone : ""}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="submit-btn-item" style={{ textAlign: "right" }}>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInformation;
