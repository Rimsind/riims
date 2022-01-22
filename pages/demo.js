import Image from "next/image";
import { ItemCard, ProfileCard } from "../components/common/index";
import Link from "next/link";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import Slider from "react-slick";
import Head from "next/head";
const Demo = () => {
  const {
    data: specialties,
    loading,
    error,
  } = useSWR(`${apiUrl}/specialties`, fetcher);
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slideToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <section
        className="bg-half-200 d-table w-100"
        style={{
          background: "url('/images/bg/main.jpg') center",
          height: "79vh",
        }}
      >
        <div className="bg-overlay bg-dark" style={{ opacity: "0" }}></div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-xl-10">
              <div className="heading-title text-center">
                <h4 className="heading fw-bold text-white mt-3 mb-4">
                  Booking Your Appointments
                </h4>
                <p className="para-desc mx-auto text-white-50 mb-0">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>

                <div className="mt-4 pt-2">
                  <form
                    className="rounded text-start shadow p-4 "
                    style={{ backgroundColor: "#01c7ff85" }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md">
                        <div className="input-group bg-white border rounded">
                          <span className="input-group-text bg-white border-0">
                            <i className="ri-map-pin-line text-primary h5 fw-normal mb-0"></i>
                          </span>
                          <select
                            className="form-select border-0"
                            aria-label="Default select example"
                          >
                            <option selected>Select District</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md">
                        <div className="input-group bg-white border rounded">
                          <span className="input-group-text bg-white border-0">
                            <i className="ri-map-pin-line text-primary h5 fw-normal mb-0"></i>
                          </span>

                          <select
                            className="form-select border-0"
                            aria-label="Default select example"
                          >
                            <option selected>Select Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md">
                        <div className="input-group bg-white border rounded">
                          <span className="input-group-text bg-white border-0">
                            <i className="ri-search-line text-primary h5 fw-normal mb-0"></i>
                          </span>
                          <select
                            className="form-select border-0"
                            aria-label="Default select example"
                          >
                            <option selected>Select Department</option>
                            {specialties?.map((curElem, index) => {
                              return (
                                <option value={curElem.name} key={index}>
                                  {curElem.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="col-md mt-4 mt-sm-0">
                        <div className="input-group bg-white border rounded">
                          <span className="input-group-text bg-white border-0">
                            <i className="ri-search-line text-primary h5 fw-normal mb-0"></i>
                          </span>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control border-0"
                            placeholder="Seacrh by Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-auto mt-4 mt-sm-0">
                        <div className="d-grid d-md-block">
                          <button type="submit" className="btn btn-light">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-polyclinic m-auto">
        <div className="container">
          <div className="row categories-item-list">
            <ItemCard
              image="/images/main categories/appointment.png"
              title="Book Appoinments"
            />
            <ItemCard
              image="/images/main categories/doctor.png"
              title="Search Doctor"
            />
            <ItemCard
              image="/images/main categories/find-doctor.png"
              title="Online Doctor Consult"
            />
            <ItemCard
              image="/images/main categories/hospital.png"
              title="Search Hospital"
            />
            <ItemCard
              image="/images/main categories/ambulance.png"
              title="Ambulance"
            />
            <ItemCard
              image="/images/main categories/appointment.png"
              title="Store Medical Record"
            />
          </div>
        </div>
      </section>

      <div>
        <Slider {...settings}>
          <div>
            <div className="card features feature-primary bg-transparent border-0">
              <div className="rims-categories-card-image text-center">
                <div className="category-card">
                  <Image
                    height="100"
                    width="100"
                    src="/images/profile.png"
                    alt="Picture of the author"
                  />
                  <div className="card-body pt-0">
                    <a href="departments.html" className="title text-dark h5">
                      XYZ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card features feature-primary bg-transparent border-0">
              <div className="rims-categories-card-image text-center">
                <div className="category-card">
                  <Image
                    height="100"
                    width="100"
                    src="/images/profile.png"
                    alt="Picture of the author"
                  />
                  <div className="card-body pt-0">
                    <a href="departments.html" className="title text-dark h5">
                      XYZ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card features feature-primary bg-transparent border-0">
              <div className="rims-categories-card-image text-center">
                <div className="category-card">
                  <Image
                    height="100"
                    width="100"
                    src="/images/profile.png"
                    alt="Picture of the author"
                  />
                  <div className="card-body pt-0">
                    <a href="departments.html" className="title text-dark h5">
                      XYZ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card features feature-primary bg-transparent border-0">
              <div className="rims-categories-card-image text-center">
                <div className="category-card">
                  <Image
                    height="100"
                    width="100"
                    src="/images/profile.png"
                    alt="Picture of the author"
                  />
                  <div className="card-body pt-0">
                    <a href="departments.html" className="title text-dark h5">
                      XYZ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card features feature-primary bg-transparent border-0">
              <div className="rims-categories-card-image text-center">
                <div className="category-card">
                  <Image
                    height="100"
                    width="100"
                    src="/images/profile.png"
                    alt="Picture of the author"
                  />
                  <div className="card-body pt-0">
                    <a href="departments.html" className="title text-dark h5">
                      XYZ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card features feature-primary bg-transparent border-0">
              <div className="rims-categories-card-image text-center">
                <div className="category-card">
                  <Image
                    height="100"
                    width="100"
                    src="/images/profile.png"
                    alt="Picture of the author"
                  />
                  <div className="card-body pt-0">
                    <a href="departments.html" className="title text-dark h5">
                      XYZ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card features feature-primary bg-transparent border-0">
              <div className="rims-categories-card-image text-center">
                <div className="category-card">
                  <Image
                    height="100"
                    width="100"
                    src="/images/profile.png"
                    alt="Picture of the author"
                  />
                  <div className="card-body pt-0">
                    <a href="departments.html" className="title text-dark h5">
                      XYZ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <section className="section bg-white">
        <div className="container mt-50 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-4">Our Medical Services</h4>
                <p className="text-muted mx-auto para-desc mb-0">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {specialties?.map((curElem) => {
              return (
                <div
                  className="col-xl-3 col-md-4 col-12 mt-3 mb-3"
                  key={curElem.id}
                >
                  <div className="card features feature-primary bg-transparent border-0">
                    <div className="rims-categories-card-image text-center">
                      <div className="category-card">
                        <Image
                          height="100"
                          width="100"
                          src={curElem.image?.url}
                          alt="Picture of the author"
                        />
                        <div className="card-body pt-0">
                          <a
                            href="departments.html"
                            className="title text-dark h5"
                          >
                            {curElem.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section recent-doctor">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="container-fluid">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Doctors</h4>
                  <p className="text-muted mx-auto para-desc mb-0">
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="recent-doctor-list row align-items-center">
            {doctors?.slice(0, 4).map((curElem) => {
              return (
                <ProfileCard
                  key={curElem.id}
                  id={curElem.id}
                  fName={curElem.firstName}
                  lName={curElem.lastName}
                  image={curElem.image?.url}
                  spec={curElem.specialty?.name}
                  fee={curElem.fee}
                />
              );
            })}
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="container-fluid">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Polyclinic</h4>
                  <p className="text-muted mx-auto para-desc mb-0">
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="recent-doctor-list row align-items-center">
            {polyclinics?.slice(0, 4).map((curElem) => {
              return (
                <div
                  className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2"
                  key={curElem.id}
                >
                  <div className="card team border-0 rounded shadow overflow-hidden">
                    <div className="team-img position-relative">
                      <Image
                        height="260"
                        width="270"
                        src={curElem.coverImage?.url}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="card-body content text-center">
                      <Link href={`/polyclinic/${curElem.id}`}>
                        <a className="title text-dark h5 d-block mb-0">
                          {curElem.name}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;
