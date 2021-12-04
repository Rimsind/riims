import Link from "next/link";
import Image from "next/image";
const PolyclinicCard = (props) => {
  return (
    <>
      <div className="col-lg-6 col-md-12 mt-4 pt-2">
        <div className="card team border-0 rounded shadow overflow-hidden">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="team-person position-relative overflow-hidden">
                <Image
                  height="290"
                  width="270"
                  src={props.image}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <Link href={`/polyclinic/${props.id}`}>
                  <a className="title text-dark h5 d-block mb-0">
                    {props.name}
                  </a>
                </Link>
                <small className="text-muted speciality">{props.city}</small>
                <ul className="list-unstyled mt-2 mb-0">
                  <li className="d-flex">
                    <i className=" ri-phone-line text-primary align-middle"></i>
                    <small className="text-muted ms-2">{props.phone}</small>
                  </li>
                </ul>
                <ul className="list-unstyled mt-2 mb-0">
                  <li className="d-flex">
                    <i className=" ri-mail-line text-primary align-middle"></i>
                    <small className="text-muted ms-2">{props.email}</small>
                  </li>
                </ul>
                <ul className="list-unstyled mt-2 mb-0">
                  <li className="d-flex">
                    <i className=" ri-map-pin-line text-primary align-middle"></i>
                    <small className="text-muted ms-2">
                      {props.street},{props.city}
                    </small>
                  </li>
                </ul>
                <div className="dr-button mt-4">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <Link href={`/polyclinic/${props.id}`}>
                        <a className="btn btn-primary">View</a>
                      </Link>
                    </div>
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

export default PolyclinicCard;
