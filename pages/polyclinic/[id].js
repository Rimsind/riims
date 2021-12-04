import { useRouter } from "next/router";
import Image from "next/image";
import Hero from "../../components/Hero";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import Link from "next/link";
import { ProfileCard } from "components/common";

const DoctorDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: polyclinic,
    error,
    loading,
  } = useSWR(`${apiUrl}/polyclinics/${id}`, fetcher);

  if (loading) {
    return (
      <div>
        <h1>loading ...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Loading Error....</h1>
      </div>
    );
  }

  return (
    <>
      <Hero image="/images/bg/polyclinic-hero1.jpg" alt="polyclinic banner" />
      <section className="bg-dashboard my-lg-5">
        <div className="container mt-xl-5">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 rounded shadow">
                <div className="row align-items-center py-4">
                  <div className="custom-dr-profile px-4">
                    <div className="col-xl-3 col-lg-3 col-md-3 custom-image">
                      <div className="custom-image">
                        {polyclinic?.coverImage?.url && (
                          <Image
                            height="200"
                            width="200"
                            src={polyclinic?.coverImage?.url}
                            className="   rounded-circle custom-polyclinic-image"
                            alt=""
                          />
                        )}
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3">
                      <h4 className="my-3">
                        <span className="text-primary custom-doctor-name">
                          {polyclinic?.name}
                        </span>
                      </h4>
                      <div className="row">
                        <div className="col-md-1">
                          <i className="ri-map-pin-line"></i>
                        </div>
                        <div className="col-md-11">
                          <p>
                            {polyclinic?.address?.street_address},
                            {polyclinic?.address?.city}, <br />
                            {polyclinic?.address?.state?.name}, Pin -
                            {polyclinic?.address?.pincode}
                          </p>
                        </div>
                      </div>
                      <div className="row polyclinic-icon">
                        <div className="col-md-1">
                          <i className="ri-phone-line"></i>
                        </div>
                        <div className="col-md-11">
                          <p>{polyclinic?.name}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i className="ri-mail-line"></i>
                        </div>
                        <div className="col-md-11">
                          <p>{polyclinic?.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2">
                      <div className="facilities-list-heading">
                        <p className="fs-5 fw-normal">Facilities:</p>
                      </div>
                      <ul className="facilities-details">
                        <li>Facilities 1</li>
                        <li>Facilities 2</li>
                        <li>Facilities 3</li>
                        <li>Facilities 4</li>
                        <li>Facilities 5</li>
                        <li>Facilities 6</li>
                      </ul>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59007.238879122684!2d87.28354375675552!3d22.430816213935103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b398c19fb15%3A0x5e88bcfa42e549cd!2sMidnapore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1635229438866!5m2!1sen!2sin"
                        width="300"
                        height="200"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-3">
            {!!polyclinic?.doctors && polyclinic?.doctors.length > 0 ? (
              <div className="row">
                {polyclinic?.doctors.map((curElem) => (
                  <ProfileCard
                    key={curElem.id}
                    id={curElem.id}
                    image={curElem.image.url}
                    fName={curElem.firstName}
                    lName={curElem.lastName}
                    spec={curElem.specialty}
                    experience={curElem.experienceInYrs}
                  />
                ))}
              </div>
            ) : (
              <h2>No doctor listed</h2>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorDetails;
