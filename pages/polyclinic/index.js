import { SearchBar } from "components/common";
import Hero from "components/Hero";
import PolyclinicCard from "components/PolyclinicCard";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";

const Index = () => {
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);
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
                          street={curElem.address?.street_address}
                          city={curElem.address?.city}
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