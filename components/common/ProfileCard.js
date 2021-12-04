import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2" key={props.id}>
        <div className="card team border-0 rounded shadow overflow-hidden">
          <div className="team-img position-relative">
            <Image
              height="270"
              width="270"
              src={props.image}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="card-body content text-center">
            <Link href={`/doctor/${props.id}`}>
              <a className="title text-dark h5 d-block mb-0">
                {props.fName} {props.lName}
              </a>
            </Link>
            <small className="text-muted speciality">
              {props.experience} Years Experience
            </small>
            <br />
            <small className="text-muted speciality">({props.spec})</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
