import PatientNavbar from "components/common/PatientNavbar";
import PatientHeader from "components/common/PatientHeader";
const AdvanceSettings = () => {
  return (
    <>
      <section className="bg-dashboard my-lg-4">
        <div className="container">
          <div className="row justify-content-center">
            <PatientNavbar />
            <div className="col-xl-9 col-lg-9 col-md-9">
              <PatientHeader />
              <div className="p-4">
                <h6 className="mb-0 fw-normal">
                  Do you want to delete the account? Please press below
                  &quot;Delete&quot; button
                </h6>
                <div className="mt-4">
                  <button className="btn btn-danger">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvanceSettings;
