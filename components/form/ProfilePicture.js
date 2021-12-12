import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "config/api";
import { uploadImage } from "utils/uploadImage";
import { useAuth } from "context";

const ProfilePicture = ({ patient }) => {
  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState();

  const uploadProfileImage = async () => {
    setLoading(true);
    const image = await uploadImage(profileImage, auth.token);

    const payload = {
      image,
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
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-2">
            <Image
              height="250"
              width="250"
              src={patient?.image?.url || "/images/profile.png"}
              className=" rounded-circle"
              alt=""
            />
          </div>

          <div className="col-lg-10 col-md-10 text-center text-md-start mt-4 mt-sm-0">
            <div className="mt-4">
              <div className="row">
                <div className="col-md-8">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Upload your Image"
                    name="uploadFile"
                    required=""
                    onChange={(e) => setProfileImage(e.target.files[0])}
                  />
                </div>
                <div className="col-md-4">
                  <div
                    className="submit-btn-item"
                    style={{ textAlign: "right" }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;
