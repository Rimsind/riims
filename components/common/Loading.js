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
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
