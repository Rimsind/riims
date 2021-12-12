import Hero from "../../components/Hero";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import LoadingError from "components/common/LoadingError";
import Loading from "components/common/Loading";

const DoctorDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: doctor,
    error,
    loading,
  } = useSWR(`${apiUrl}/doctors/${id}`, fetcher);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError />;
  }

  return (
    <>
      <Hero image="/images/bg/doctor-hero2.jpg" alt="doctor banner" />

      <section className=" my-custom-bg">
        <div className="container mt-xl-5">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 rounded shadow">
                <div className="row align-items-center">
                  <div className="custom-dr-profile px-4 py-4">
                    <div className="col-xl-3 col-lg-3 col-md-3 custom-image">
                      <div className="custom-image">
                        {doctor?.image?.url && (
                          <Image
                            height="200"
                            width="200"
                            src={doctor?.image?.url || "/images/profile.png"}
                            className="rounded-circle"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="dr-button mt-4">
                        <a href="#" className="btn btn-primary">
                          <i className="ri-skype-line"></i> Skype Id:{" "}
                          {doctor?.skype_id}
                        </a>
                      </div>
                    </div>

                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="p-4">
                        <h4 className="my-3">
                          <span className="text-primary custom-doctor-name">
                            Dr.{doctor?.firstName} {doctor?.lastName}
                          </span>
                        </h4>
                        <ul className="dr-details">
                          <li className="dr-ach">{doctor?.qualification}</li>
                          <li className="dr-exp">
                            {doctor?.experienceInYrs} years experience,
                            Consultant {doctor?.specialty?.name}
                          </li>
                        </ul>
                        <p className="text-muted">Best Treatment Info</p>
                        <p className="para-desc">{doctor?.bio}</p>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2">
                      <div className="dr-profile-status">
                        <div className="row align-items-baseline">
                          <div className="col-md-2 pe-md-0">
                            <i className="ri-checkbox-blank-circle-fill"></i>
                          </div>
                          <div className="col-md-10 ps-md-0">
                            <p>Online</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-dr-desc card border-0 rounded shadow mt-4 py-3 px-3">
            <div className="desc-heading">
              <h4 className="text-muted fs-6 fw-normal">Clinic Address</h4>
            </div>
            {doctor?.timetable?.map((curElem) => {
              return (
                <div
                  className="row align-items-center polyclinic-list"
                  key={curElem?.polyclinic?.id && curElem?.polyclinic?.id}
                >
                  <div className="col-md-2">
                    <div className="desc-image mt-2">
                      {curElem.polyclinic?.coverImage?.url && (
                        <Image
                          height="150"
                          width="150"
                          src={curElem.polyclinic?.coverImage?.url}
                          className=" rounded-circle custom-pl-image"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="desc-item mt-2">
                      <div className="item-heading">
                        <h3 className="fs-5">
                          {curElem.polyclinic?.name && curElem.polyclinic?.name}
                        </h3>

                        <div className="row">
                          <div className="col-md-1">
                            <div className="pin-icon">
                              <i className="ri-map-pin-line "></i>
                            </div>
                          </div>
                          <div className="col-md-11">
                            <p>
                              {curElem.polyclinic?.street_address &&
                                curElem.polyclinic?.street_address}
                              ,
                              {curElem.polyclinic?.city &&
                                curElem.polyclinic?.city}
                              {curElem.polyclinic?.pincode &&
                                curElem.polyclinic?.pincode}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-1">
                            <div className="pin-icon">
                              <i className="ri-phone-line "></i>
                            </div>
                          </div>
                          <div className="col-md-11">
                            <p>
                              {curElem.polyclinic?.phone &&
                                curElem.polyclinic?.phone}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-1">
                            <div className="pin-icon">
                              <i className="ri-mail-line "></i>
                            </div>
                          </div>
                          <div className="col-md-11">
                            <p>
                              {curElem.polyclinic?.email &&
                                curElem.polyclinic?.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="desc-time-table">
                      <table className="table table-striped">
                        <tbody>
                          {curElem.schedule?.map((item, index) => (
                            <tr key={index}>
                              <td>{item.day}</td>
                              <td>
                                {item?.start_time} - {item?.end_time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="desc-fees-amount">
                      <p>
                        Fees <i className="ri-bank-card-line"></i>
                        <span className="fw-bold">
                          Rs {curElem?.fee && curElem?.fee}
                        </span>
                      </p>
                    </div>
                    <div className="desc-appnt-btn">
                      <Link
                        href={`/checkout?doctorId=${doctor?.id}&&polyclinicId=${curElem?.polyclinic?.id}&&fee=${curElem.fee}`}
                      >
                        <a className="btn btn-primary">
                          <i className="ri-calendar-check-line"></i> Book
                          Appointment
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

export default DoctorDetails;
