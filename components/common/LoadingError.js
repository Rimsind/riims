import Link from "next/link";
const LoadingError = () => {
  return (
    <>
      <div
        style={{
          height: "45vh",
          width: "100%",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        <div className="row">
          <div className="col-md-4"></div>
          <div
            className="col-md-4"
            style={{
              marginTop: "200px",
              marginLeft: "45px",
            }}
          >
            <h1>Loading Error...</h1>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Link href="/">
              <a className="btn btn-primary">Back</a>
            </Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingError;
