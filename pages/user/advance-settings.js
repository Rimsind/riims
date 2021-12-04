import ProfileLayout from "components/layout/ProfileLayout";

const AdvanceSettings = () => {
  return (
    <>
      <div className="p-4">
        <h6 className="mb-0 fw-normal">
          Do you want to delete the account? Please press below
          &quot;Delete&quot; button
        </h6>
        <div className="mt-4">
          <button className="btn btn-danger">Delete Account</button>
        </div>
      </div>
    </>
  );
};

export default AdvanceSettings;
AdvanceSettings.getLayout = (AdvanceSettings) => (
  <ProfileLayout>{AdvanceSettings}</ProfileLayout>
);
