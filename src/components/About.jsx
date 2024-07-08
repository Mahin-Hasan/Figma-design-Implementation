import SectionTitle from "./SectionTitle";
import about from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="my-28 px-2 sm:px-0">
      <div className="bg-white rounded-md flex items-center flex-col md:flex-row pt-8 md:pt-0">
        <div className="ps-2 md:ps-8 lg:ps-32 w-full md:w-[45%] lg:w-[54%] py-2">
          <SectionTitle title={"About WPPOOL"} />
          <h1 className="text-[#7D7F81] text-3xl font-Nantes mt-1 mb-2">
            Investing in wppool for over 50 years
          </h1>
          <p className="font-Messina mb-2 lg:mb-8 w-full md:w-[360px] lg:w-[622px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi{" "}
            <a
              className="underline underline-offset-4"
              target="blank"
              href="https://wppool.dev/"
            >
              repudiandae
            </a>{" "}
            consequuntur voluptatum laborum numquam blanditiis harum quisquam
            eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            Provident similique accusantium nemo autem.
          </p>

          <button className="bg-primaryBlue px-2 py-1 lg:px-4 lg:py-3 text-white rounded-full">
            Contact WPPOOL
          </button>
        </div>
        <div className="w-full md:w-[55%] lg:w-[46%] pt-8 md:pt-0">
          <img
            className="w-full h-full object-cover"
            src={about}
            alt="about banner"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
