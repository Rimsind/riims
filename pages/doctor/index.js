import { ProfileCard, SearchBar } from "components/common/index";
import Hero from "components/Hero";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";

const Index = () => {
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: specialities } = useSWR(`${apiUrl}/specialties`, fetcher);
  return (
    <>
      <Hero image="/images/bg/doctor-hero1.jpg" alt="Hero Image" />

      <section className="section pt-4">
        <div className="container">
          <div className="row">
            <SearchBar specialities={specialities} />
            {doctors?.map((curElem) => {
              return (
                <ProfileCard
                  key={curElem.id}
                  id={curElem.id}
                  fName={curElem.firstName}
                  lName={curElem.lastName}
                  image={curElem.image?.url || "/images/profile.png"}
                  spec={curElem.specialty?.name}
                  fee={curElem.fee}
                  experience={curElem.experienceInYrs}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
