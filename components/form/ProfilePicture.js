import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "config/api";
import { parseCookies } from "nookies";

const ProfilePicture = ({ patient }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token && user) {
      setToken(token);
    }
  }, []);

  const [selectedImage, setSelectedImage] = useState(
    patient.image?.url || "/images/profile.png"
  );
  const [imageFile, setImageFile] = useState(null);

  const profileImageHandler = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setImageFile(file);
    setSelectedImage(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("files", imageFile);
    console.log(formData);
    // try {
    //   const { url } = await uploadCloudinary(imageFile);
    //   const res = await axios.put(
    //     `${apiUrl}/patients/${patient.id}`,
    //     {
    //       image: formData,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );

    //   const result = await res.data;
    //   if (result.success) {
    //     setSelectedImage(result.data.image);
    //     alert("profile image updated");
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
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
              src={selectedImage}
              className=" rounded-circle"
              alt=""
            />
          </div>

          <div className="col-lg-10 col-md-10 text-center text-md-start mt-4 mt-sm-0">
            <div className="mt-4">
              <div className="row">
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="file"
                    name="profileImge"
                    id="formFile"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </div>
                <div className="col-md-4">
                  <div
                    className="submit-btn-item"
                    style={{ textAlign: "right" }}
                  >
                    <button className="btn btn-primary" onClick={uploadImage}>
                      Save Changes
                    </button>
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
