import Image from "next/image";
import { ItemCard, ProfileCard } from "../components/common/index";
import Link from "next/link";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import LoadingError from "components/common/LoadingError";

const Index = () => {
  const {
    data: specialties,
    loading,
    error,
  } = useSWR(`${apiUrl}/specialties`, fetcher);
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);

  if (loading) {
    return <loading />;
  }

  if (error) {
    return <LoadingError />;
  }

  return (
    <>
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
                  B'ooking Your Appointments
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

        <div className="container mt-100 mt-60">
          <div className="row align-items-lg-end">
            <div className="col-md-6">
              <div className="me-xl-3">
                <div className="section-title mb-4 pb-2">
                  <i className="ri-booklet-line text-primary h2"></i>
                  <h4 className="title mb-4">Book Your Appointment</h4>
                  <p className="text-muted para-desc mb-0">
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                  </p>
                </div>

                <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden">
                  <i className="ri-stethoscope-line icons h2 mb-0 text-primary custom-icon"></i>
                  <div className="ms-3">
                    <h5 className="titles">Success Of Treatment</h5>
                    <p className="text-muted para mb-0">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                  </div>
                  <div className="big-icon">
                    <i className="ri-stethoscope-line"></i>
                  </div>
                </div>

                <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
                  <i className="ri-microscope-line icons h2 mb-0 text-primary custom-icon"></i>
                  <div className="ms-3">
                    <h5 className="titles">Modern Technology</h5>
                    <p className="text-muted para mb-0">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                  </div>
                  <div className="big-icon">
                    <i className="ri-microscope-line"></i>
                  </div>
                </div>

                <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
                  <i className="ri-nurse-line icons h2 mb-0 text-primary custom-icon"></i>
                  <div className="ms-3">
                    <h5 className="titles">Certified Doctors</h5>
                    <p className="text-muted para mb-0">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                  </div>
                  <div className="big-icon">
                    <i className="ri-nurse-line"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 rounded shadow p-4 ms-xl-3">
                <div className="custom-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Patient Name <span className="text-danger">*</span>
                          </label>
                          <input
                            name="name"
                            id="name1"
                            type="text"
                            className="form-control"
                            placeholder="Patient Name :"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Departments</label>
                          <select className="form-control department-name select2input">
                            <option value="EY">Eye Care</option>
                            <option value="GY">Gynecologist</option>
                            <option value="PS">Psychotherapist</option>
                            <option value="OR">Orthopedic</option>
                            <option value="DE">Dentist</option>
                            <option value="GA">Gastrologist</option>
                            <option value="UR">Urologist</option>
                            <option value="NE">Neurologist</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Doctor</label>
                          <select className="form-control doctor-name select2input">
                            <option value="CA">Dr. Calvin Carlo</option>
                            <option value="CR">Dr. Cristino Murphy</option>
                            <option value="AL">Dr. Alia Reddy</option>
                            <option value="TO">Dr. Toni Kovar</option>
                            <option value="JE">Dr. Jessica McFarlane</option>
                            <option value="EL">Dr. Elsie Sherman</option>
                            <option value="BE">Dr. Bertha Magers</option>
                            <option value="LO">Dr. Louis Batey</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email :"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            name="phone"
                            id="phone"
                            type="tel"
                            className="form-control"
                            placeholder="Your Phone :"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Date <span className="text-danger">*</span>
                          </label>
                          <input
                            name="date"
                            type="text"
                            className="flatpickr flatpickr-input form-control"
                            id="checkin-date"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="input-time">
                            Time <span className="text-danger">*</span>
                          </label>
                          <input
                            name="time"
                            type="text"
                            className="form-control timepicker"
                            id="input-time"
                            placeholder="03:30 PM"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Comments <span className="text-danger">*</span>
                          </label>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Your Message :"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Book An Appointment
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
    </>
  );
};

export default Index;
