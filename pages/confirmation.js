import Link from "next/link";
import { useRouter } from "next/router";
const Confirmation = () => {
  const { appointmentId, date } = useRouter().query;

  if (!appointmentId || !date) {
    return (
      <div>
        <h2>Booking Unsuccesfull</h2>
      </div>
    );
  }
  return (
    <>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="confirmation-section text-center">
                <div className="confirmation-item">
                  <div className="confirmation-icon">
                    <i className="ri-check-line"></i>
                  </div>
                  <div className="confirmation-details">
                    <h3>Booking Successfull</h3>
                    <p className="fs-6">Booking ID - {appointmentId}</p>
                    <h6>Your appointment is booked.</h6>
                    <h6>For {date}</h6>
                  </div>
                </div>
              </div>
              <div className="back-to-home-btn text-center mt-4">
                <Link href="/">
                  <a
                    className="btn btn-secondary"
                    style={{ marginRight: "8px" }}
                  >
                    Back to Home
                  </a>
                </Link>
                <Link href="/user/profile">
                  <a className="btn btn-secondary">Back to Profile</a>
                </Link>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confirmation;
