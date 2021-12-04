import Image from "next/image";
const Hero = (props) => {
  return (
    <>
      {/* <section
        className="bg-half-200 d-table w-100"
        style={{
          background: "url('/images/bg/doctor-hero1.jpg') center",
          height: "60vh",
        }}
      ></section> */}

      <Image src={props.image} alt={props.alt} width="1920" height="500" />
    </>
  );
};

export default Hero;
