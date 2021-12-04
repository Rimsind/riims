import PharmacyCard from "components/PharmacyCard";
import { ItemCard } from "components/common/index";
const Index = () => {
  return (
    <>
      {/* <Hero image="/images/bg/prf.jpg" alt="Hero Image" /> */}
      <section
        className="bg-half-200 d-table w-100"
        style={{
          background: "url('/images/bg/prf.jpg') center",
          height: "79vh",
        }}
      ></section>

      <section className="categories-polyclinic m-auto">
        <div className="container">
          <div className="row categories-item-list">
            <ItemCard
              image="/images/pharmacy categories/homeopathy.png"
              title="Homeopathy"
            />
            <ItemCard
              image="/images/pharmacy categories/ayurved.png"
              title="Ayurveda"
            />
            <ItemCard
              image="/images/pharmacy categories/personal.png"
              title="Personal Care"
            />
            <ItemCard
              image="/images/pharmacy categories/diabates.png"
              title="Diabetes"
            />
            <ItemCard
              image="/images/pharmacy categories/fitness.png"
              title="Fitness"
            />
            <ItemCard
              image="/images/pharmacy categories/all-med.png"
              title="All Medicines"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="mb-0">Most Viewed Products</h5>
            </div>
          </div>

          <div className="row">
            <PharmacyCard />
            <PharmacyCard />
            <PharmacyCard />
            <PharmacyCard />
          </div>
        </div>

        <div className="container-fluid mt-100 mt-60">
          <div
            className="py-5 px-4 rounded shadow"
            style={{
              background: "url('images/bg/pharmacy-1.png') center",
              height: "40vh",
            }}
          ></div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <h5 className="mb-0">Popular Products</h5>
            </div>
          </div>

          <div className="row">
            <PharmacyCard />
            <PharmacyCard />
            <PharmacyCard />
            <PharmacyCard />
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <h5 className="mb-0">Recent Products</h5>
            </div>
          </div>

          <div className="row">
            <PharmacyCard />
            <PharmacyCard />
            <PharmacyCard />
            <PharmacyCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
