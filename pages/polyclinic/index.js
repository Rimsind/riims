import { SearchBar } from "components/common";
import LoadingError from "components/common/LoadingError";
import Hero from "components/Hero";
import PolyclinicCard from "components/PolyclinicCard";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";

const Index = () => {
  const {
    data: polyclinics,
    loading,
    error,
  } = useSWR(`${apiUrl}/polyclinics`, fetcher);

  if (loading) {
    return <loading />;
  }
  if (error) {
    return <LoadingError />;
  }
  return (
    <>
      <Hero image="/images/bg/polyclinic-hero1.jpg" alt="Hero Image" />

      <section className="layout">
        <div className="container-fluid" style={{ marginLeft: "60px" }}>
          <div className="row">
            <div className="col-md-12">
              <section className="section-right">
                <div className="container">
                  <SearchBar />
                  <div className="row align-items-center">
                    {polyclinics?.map((curElem) => {
                      return (
                        <PolyclinicCard
                          key={curElem.id}
                          id={curElem.id}
                          name={curElem.name}
                          image={curElem.coverImage?.url}
                          street={curElem.street_address}
                          city={curElem.city}
                          phone={curElem.phone}
                          email={curElem.email}
                        />
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
