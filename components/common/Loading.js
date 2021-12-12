const Loading = () => {
  return (
    <>
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
            style={{ marginTop: "200px", marginLeft: "220px" }}
          >
            <div className=""="loader"></div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
