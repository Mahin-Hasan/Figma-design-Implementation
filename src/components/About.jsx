import SectionTitle from "./SectionTitle";
import about from "../assets/about.png";

const About = () => {
  return (
    <section className="my-28">
      <div className="bg-white rounded-md flex items-center flex-row">
        <div className="ps-32 w-[54%]">
          <SectionTitle title={"About WPPOOL"} />
          <h1 className="text-[#7D7F81] text-3xl font-Nantes mt-1 mb-2">
            Investing in wppool for over 50 years
          </h1>
          <p className="font-Messina mb-8 w-[622px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi{" "}
            <a
              className="underline underline-offset-4"
              target="blank"
              href="https://wppool.dev/"
            >
              repudiandae
            </a>{" "}
            consequuntur voluptatum laborumnumquam blanditiis harum quisquam
            eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!
            Provident similique accusantium nemo autem.
          </p>
          <button className="bg-primaryBlue px-4 py-3 text-white rounded-full">
            Contact WPPOOL
          </button>
        </div>
        <div className="w-[46%]">
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
