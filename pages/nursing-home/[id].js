import Image from "next/image";
import NursingFeature from "components/common/NursingFeature";
import Hero from "components/Hero";
import { apiUrl, fetcher } from "config/api";
import LoadingError from "components/common/LoadingError";
import Loading from "components/common/Loading";
import useSWR from "swr";
import { useRouter } from "next/router";
import { ProfileCard } from "components/common";
const Id = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: nursingHome,
    error,
    loading,
  } = useSWR(`${apiUrl}/nursing-homes/${id}`, fetcher);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <LoadingError />;
  }
  return (
    <>
      <Hero image="/images/bg/polyclinic-hero1.jpg" alt="Hero Image" />
      <div className="nursing-main">
        <div className="container">
          <div className="nursing-profile">
            <div className="row align-items-center">
              <div className="col-md-4 col-lg-4">
                <div className="nursing-profile-item">
                  <Image
                    src={
                      nursingHome?.profile_image?.url ||
                      "/images/doctors/polyclinic"
                    }
                    alt="Profile Images"
                    width="200"
                    height="200"
                    className="nursing-profile-image"
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="nursing-profile-details-item">
                  <div className="nursing-profile-details-title">
                    <p className="nursing-name fs-4">{nursingHome?.name}</p>
                    <p className="nursing-address fs-6">
                      <i className="ri-map-pin-line"></i>{" "}
                      {nursingHome?.street_address}, {nursingHome?.city},
                      {nursingHome?.state}
                    </p>
                    <p className="nursing-phone fs-6">
                      <i className="ri-phone-line"></i>
                      {nursingHome?.phone}
                    </p>
                    <p className="nursing-email fs-6">
                      <i className="ri-mail-line"></i>
                      {nursingHome?.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="nursing-profile-location">
                  <iframe
                    src={nursingHome?.google_map}
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
          <div className="nursing-overview">
            <div className="row align-items-start">
              <div className="col-md-8 col-lg-8">
                <div className="nursing-overview-details">
                  <p className="fs-6 fw-bold">Overview</p>
                  <p className="fs-6" style={{ textAlign: "justify" }}>
                    {nursingHome?.overview}
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="nursing-emergency">
                  <p className="fs-6 fw-bold">Contact</p>
                  <ul>
                    <li>
                      Emergency:
                      <a href="tel:10012" style={{ color: "black" }}>
                        {nursingHome?.emergency_no}
                      </a>
                    </li>
                    <li>
                      Ambulance:
                      <a href="tel:12002" style={{ color: "black" }}>
                        {nursingHome?.ambulance_no}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nursing-feature mb-3">
            <p className="fs-5 fw-bold text-center mb-3">What We Offer</p>
            <div className="row align-item-center">
              <NursingFeature
                icon="fas fa-bed"
                qty={nursingHome?.no_of_regular_beds}
                title="Regular Bed"
              />
              <NursingFeature
                icon="fas fa-procedures"
                qty={nursingHome?.no_of_icu_beds}
                title="ICU Bed"
              />
              <NursingFeature
                icon="fas fa-ambulance"
                qty={nursingHome?.no_of_ambulance}
                title="Ambulance"
              />
              <NursingFeature
                icon="fas fa-ambulance"
                qty={nursingHome?.no_of_icu_ambulance}
                title="ICU Ambulance"
              />
            </div>
          </div>
          <div className="nursing-facilities mb-3">
            <p className="fs-5 fw-bold text-center mb-3">Our Facilities</p>
            <div className="row align-items-start">
              {nursingHome?.images.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card border-0 text-center nursing-card-item mb-3">
                    <Image
                      src={item?.url}
                      alt="ueghu"
                      width="100"
                      height="300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="nursing-doctor mb-3">
            <p className="fs-5 fw-bold text-center mb-3">Available Doctors</p>
            <div className="card border-0 mb-3 nursing-doctor-card-item">
              <div className="row my-3">
                {!!nursingHome?.doctors && nursingHome?.doctors.length > 0 ? (
                  <div className="row">
                    {nursingHome?.doctors.map((curElem) => (
                      <ProfileCard
                        key={curElem?.id}
                        id={curElem?.id}
                        image={
                          curElem?.image.url || "/images/doctors/polyclinic"
                        }
                        fName={curElem?.firstName}
                        lName={curElem?.lastName}
                        spec={curElem?.specialty?.name}
                        experience={curElem?.experienceInYrs}
                      />
                    ))}
                  </div>
                ) : (
                  <h2>No doctor listed</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Id;
