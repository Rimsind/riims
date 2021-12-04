import ProfileLayout from "components/layout/ProfileLayout";
const PrivacySettings = () => {
  return (
    <>
      <div className="p-4">
        <form>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Old password :</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Old password"
                  required=""
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">New password :</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="New password"
                  required=""
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Re-type New password :</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-type New password"
                  required=""
                />
              </div>
            </div>

            <div className="col-lg-12 mt-2 mb-0">
              <button className="btn btn-primary">Save password</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PrivacySettings;
PrivacySettings.getLayout = (PrivacySettings) => (
  <ProfileLayout>{PrivacySettings}</ProfileLayout>
);
