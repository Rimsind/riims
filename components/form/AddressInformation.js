import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import { parseCookies } from "nookies";

const AddressInformation = ({ patient }) => {
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
  const updateAddress = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        address: {
          street_address: data.street,
          city: data.city,
          pincode: data.pinCode,
          state: data.state,
          country: data.country,
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
      alert("Details Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div
        className="p-4 mb-3"
        style={{
          background: "aliceblue",
          marginBottom: "20px",
        }}
      >
        <form onSubmit={handleSubmit(updateAddress)}>
          <div className="col-md-12">
            <legend
              style={{
                textDecoration: "underline",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Address
            </legend>
            <div className="mb-3" {...register("street")}>
              <label className="form-label">Street Address</label>
              <input
                name="street"
                id="text"
                type="text"
                className="form-control"
                placeholder="Village, Street Address, P.O."
                defaultValue={
                  !!patient.address && !!patient.address.street_address
                    ? patient.address.street_address
                    : ""
                }
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3" {...register("city")}>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  placeholder="Your city"
                  defaultValue={
                    !!patient.address && !!patient.address.city
                      ? patient.address.city
                      : ""
                  }
                />
              </div>
            </div>
            <div className="col-md-3" {...register("state")}>
              <div className="mb-3">
                <label className="form-label">State</label>
                <input
                  name="state"
                  type="text"
                  className="form-control"
                  placeholder="Your state"
                  defaultValue={
                    !!patient.address && !!patient.address.state
                      ? patient.address.state
                      : ""
                  }
                />
              </div>
            </div>
            <div className="col-md-3" {...register("pinCode")}>
              <div className="mb-3">
                <label className="form-label">PIN Code</label>
                <input
                  name="pinCode"
                  id="number"
                  type="number"
                  className="form-control"
                  placeholder="Enter Your PIN code"
                  defaultValue={
                    !!patient.address && !!patient.address.pincode
                      ? patient.address.pincode
                      : ""
                  }
                />
              </div>
            </div>
            <div className="col-md-3" {...register("country")}>
              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  name="country"
                  type="text"
                  className="form-control"
                  placeholder="Your country"
                  defaultValue={
                    !!patient.address && !!patient.address.country
                      ? patient.address.country
                      : ""
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="submit-btn-item" style={{ textAlign: "right" }}>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressInformation;
