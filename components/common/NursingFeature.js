const NursingFeature = (props) => {
  return (
    <>
      <div className="col-md-3 col-lg-3">
        <div className="offer-item">
          <div className="row align-item-center">
            <div className="col-md-4">
              <div className="offer-item-icon">
                <i className={props.icon}></i>
              </div>
            </div>
            <div className="col-md-8">
              <div className="offer-item-qty">
                <p>{props.qty}+</p>
              </div>
              <div className="offer-item-title">
                <p>{props.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NursingFeature;
