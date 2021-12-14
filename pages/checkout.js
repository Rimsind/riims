import Image from "next/image";
import { useForm } from "react-hook-form";
import Router, { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "context";

const Checkout = () => {
  const { doctorId, polyclinicId, fee } = useRouter().query;
  const { data: doctor } = useSWR(`${apiUrl}/doctors/${doctorId}`, fetcher);
  const { data: polyclinic } = useSWR(
    `${apiUrl}/polyclinics/${polyclinicId}`,
    fetcher
  );
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [complainList, setComplainList] = useState([]);

  const addComplaints = () => {
    setComplainList([
      ...complainList,
      {
        description: description,
        duration: duration,
      },
    ]);
    setDescription("");
    setDuration("");
  };

  const { auth } = useAuth();
  if (!auth.token && !auth.user) {
    Router.push(`/user/login?redirect=doctor/${doctorId}`);
  }

  const { register, handleSubmit } = useForm();
  const checkout = async (data, event) => {
    event.preventDefault();
    if (!data.date) {
      alert("Please Select a date");
      return;
    }

    const payload = {
      patient: auth.user.profileId,
      doctor: doctor.id,
      date: data.date,
      chiefComplaints: complainList,
      polyclinic: polyclinic.id,
      general_problems: data.general_problems.toString(),
      joint_related_problems: data.joint_related_problems.toString(),
      neuro_problems: data.neuro_problems.toString(),
      heart_problems: data.heart_problems.toString(),
      blood_problems: data.blood_problems.toString(),
      stomach_problems: data.stomach_problems.toString(),
      mental_problems: data.mental_problems.toString(),
      genetal_problems: data.genetal_problems.toString(),
    };

    const res = await axios.post(`${apiUrl}/appointments`, payload, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });

    const result = res.data;
    Router.push(
      `/confirmation?appointmentId=${result.id}&&date=${result.date}`
    );
    return result;
  };

  if (!doctorId || !polyclinicId || !fee) {
    return (
      <div
        style={{
          height: "45vh",
          width: "100%",

          textAlign: "center",
        }}
      >
        <div className="row">
          <div className="col-md-4"></div>
          <div
            className="col-md-4"
            style={{ marginTop: "200px", marginLeft: "45px" }}
          >
            <h1>Forbiden Page</h1>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }

  const generalProblems = [
    "Fever",
    "Chills",
    "Sweating",
    "Excessive weight loss",
    "Excessive weight gain",
    "Appetite loss",
    "Vomiting",
    "Felling of vomit",
    "High Blood pressure",
    "Low Blood pressure",
    "High temperature",
    "Weakness",
    "Sleeping problems",
    "Tiredness & lack of energy",
  ];

  const rehumatologic = [
    " Joint swelling",
    "Muscle pain",
    "Muscle Weakness",
    "Skin Rashes",
    "Reaction to sunlight",
    "Nail color change",
  ];
  const neurologicProblems = [
    "Headaches",
    "Pain spreading from one place to another",
    "Visibility problems",
    "Dizziness",
    "Numbness or burnings feedings",
  ];

  const heartRelatedProblems = [
    "Chest pain",
    "Fast heart beat",
    "Heavy cough",
    "Claudication (leg pain cramps)",
    "Shortness of breath",
    "Difficulty in walking",
    "Feeling of tiredness easily",
    "Snoring a lot & Sweating a lot",
    "Coughing a lot ",
    "Swollen leg ankle and feet",
    "Heart is beating fast ",
  ];

  const bloodRelatedProblems = [
    "Skin color change",
    "Nail bed change",
    "Nose bleeding",
    "Gums bleeding",
    "Headache",
    "Irritability",
  ];

  const stomachAdbdominalProblems = [
    "Abdominal pain",
    "Vomiting",
    "Difficulty in swallowing",
    "Diarrhea",
    "Heart burn",
  ];

  const mentalProblems = [
    "High Stress Level",
    "Sleeping problems",
    "Depression",
    "Confusion",
    "Anxiety",
    "Appetite change",
  ];

  const genetialProblem = [
    "Changein urine color",
    "Testicular pain or swelling",
    "Difficulty in controlling urination",
    "Pain or difficulty in urination",
  ];

  return (
    <>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <form onSubmit={handleSubmit(checkout)}>
            <div className="row">
              <div className="col-md-8">
                <div className="checkout-details-item">
                  <p className="fs-4">Checkout Details</p>
                  <div className="card border-0 rounded shadow mb-3">
                    <div className="checkout-item">
                      <div className="checkout-item-heading">
                        <p className="fs-5">Select Date & Time</p>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <input
                            type="date"
                            name="date"
                            className="form-control"
                            placeholder="Select Date"
                            {...register("date")}
                          />
                        </div>
                        {/* <div className="col-md-6">
                          <h6>Visiting Hour: 10:00 A.M to 11:00 A.M.</h6>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 rounded shadow">
                    <div className="checkout-item">
                      <div className="checkout-item-heading">
                        <p className="fs-5">
                          Explain Your Problems with Duration
                        </p>
                      </div>

                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div>
                            <textarea
                              className="form-control mb-2"
                              rows="3"
                              placeholder="Complain"
                              onChange={(e) => setDescription(e.target.value)}
                              value={description}
                            ></textarea>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              name="duration"
                              placeholder="Duration"
                              onChange={(e) => setDuration(e.target.value)}
                              value={duration}
                            />
                          </div>
                          <div className="checkout-payment-btn text-center mt-3">
                            <span
                              className="btn btn-primary"
                              onClick={addComplaints}
                            >
                              Add
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Complain Description</th>
                                <th scope="col">Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {complainList.map((item, index) => (
                                <tr key={index}>
                                  <td>{item.description}</td>
                                  <td>{item.duration}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 rounded shadow">
                    <div className="checkout-item">
                      <div className="checkout-item-heading">
                        <p className="fs-5">Advance Option</p>
                      </div>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/general-problem.png"
                                        alt="General Problem"
                                        width={80}
                                        height={80}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      General Problem
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {generalProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="general_problems"
                                          value={item}
                                          {...register("general_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/rheumatology.png"
                                        alt="Rehumatologic"
                                        width={90}
                                        height={90}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      Rehumatologic
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {rehumatologic.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="joint_related_problems"
                                          value={item}
                                          {...register(
                                            "joint_related_problems"
                                          )}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/neurological.png"
                                        alt="Neurological Problem"
                                        width={50}
                                        height={50}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      Neurologic Problems
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {neurologicProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="neuro_problems"
                                          value={item}
                                          {...register("neuro_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFour">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/heart-problem.png"
                                        alt="Heart Related Problem"
                                        width={60}
                                        height={60}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      Heart Related Problems
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {heartRelatedProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="heart_problems"
                                          value={item}
                                          {...register("heart_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFive">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFive"
                                  aria-expanded="false"
                                  aria-controls="collapseFive"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/blood.png"
                                        alt="Blood Related Problem"
                                        width={40}
                                        height={40}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      Blood Related Problems
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFive"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {bloodRelatedProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="blood_problems"
                                          value={item}
                                          {...register("blood_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingSix">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSix"
                                  aria-expanded="false"
                                  aria-controls="collapseSix"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/stomach.png"
                                        alt="Stomach & Abdominal Problems"
                                        width={40}
                                        height={40}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      Stomach & Abdominal Problems
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingSix"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {stomachAdbdominalProblems.map(
                                      (item, index) => (
                                        <div key={index}>
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="stomach_problems"
                                            value={item}
                                            {...register("stomach_problems")}
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                          >
                                            {item}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingSeven"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSeven"
                                  aria-expanded="false"
                                  aria-controls="collapseSeven"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/mental-problem.png"
                                        alt="Mental Problem"
                                        width={110}
                                        height={110}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      Mental Problems
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseSeven"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingSeven"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {mentalProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="mental_problems"
                                          value={item}
                                          {...register("mental_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingEight"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseEight"
                                  aria-expanded="false"
                                  aria-controls="collapseEight"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-3">
                                      <Image
                                        src="/images/accordian/genetial.png"
                                        alt="Genetial Problem"
                                        width={80}
                                        height={80}
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      Genetial Problem
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseEight"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingEight"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {genetialProblem.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="genetal_problems"
                                          value={item}
                                          {...register("genetal_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="checkout-details-item">
                  <p className="fs-4">Summary</p>
                </div>
                <div className="card border-0 rounded shadow mb-3">
                  <div className="checkout-item">
                    <div className="checkout-item-heading">
                      <p className="fs-5">Doctor Details</p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <div className="checkout-dr-image">
                          {doctor?.image?.url && (
                            <Image
                              height="100"
                              width="100"
                              src={doctor?.image.url}
                              className="img-fluid avatar avatar-sm rounded-circle"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-md-10">
                        <h4 className="my-3">
                          <span className="text-primary custom-doctor-name">
                            Dr. {doctor?.firstName} {doctor?.lastName}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="checkout-doctor-details">
                      <ul className="dr-details">
                        <li className="dr-ach">{doctor?.qualification}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card border-0 rounded shadow mb-3">
                  <div className="checkout-item">
                    <div className="checkout-item-heading">
                      <p className="fs-5">Clinic Details</p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <div className="checkout-dr-image">
                          {polyclinic?.coverImage?.url && (
                            <Image
                              height="100"
                              width="100"
                              src={polyclinic?.coverImage.url}
                              className="img-fluid avatar avatar-sm rounded-circle"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-md-10">
                        <h4 className="my-3">
                          <span className="text-primary custom-doctor-name">
                            {polyclinic?.name}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1">
                        <div className="pin-icon">
                          <i className="ri-map-pin-line"></i>
                        </div>
                      </div>
                      <div className="col-md-11">
                        <span>
                          {polyclinic?.street_address},{polyclinic?.city},
                          {polyclinic?.state}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0 rounded shadow mb-3">
                  <div className="checkout-item">
                    <div className="checkout-item-heading">
                      <p className="fs-5">Pricing Details</p>
                    </div>
                    <div className="pricing-details">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <p>Fee</p>
                        </div>
                        <div className="col-md-6">
                          <p>{fee}</p>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <p>Service Charge</p>
                        </div>
                        <div className="col-md-6">
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <p className="fs-5 fw-bold">Total</p>
                      </div>
                      <div className="col-md-6">
                        <p className="fs-5 fw-bold">{fee}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0 rounded shadow">
                  <div className="checkout-item">
                    <div className="checkout-item-heading">
                      <p className="fs-5">Payment Option</p>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="payment-on-cash mb-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentOption"
                            value="Cash on Clinic"
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className="col-md-10">
                        <label className="form-check-label">
                          Cash on Clinic
                        </label>
                      </div>
                    </div>
                    {/* <div className="Credit-payment-option">
                      <div className="row" {...register("paymentOption")}>
                        <div className="col-md-2">
                          <div className="payment-on-cash mb-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentOption"
                              value="Online Payment"
                            />
                          </div>
                        </div>
                        <div className="col-md-10">
                          <label className="form-check-label">
                            Online Payment
                          </label>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="checkout-payment-btn text-center mt-3">
                  <button type="submit" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
