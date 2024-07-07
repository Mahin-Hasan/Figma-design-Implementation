import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:pe-48">
      <div className="bg-footerBg rounded-tr-md  py-10">
        <div className="lg:ps-48 ">
          {/* footer container */}
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-full sm:w-2/4">
              <h1 className="font-Nantes text-4xl sm:w-[454px]">
                Experience remarkable WordPress products with a new level of
                power, beauty, and human-centered designs.
              </h1>
            </div>
            <div className="flex w-full sm:w-2/4 text-xl">
              <div className="sm:w-60">
                <h6 className="font-bold text-[#9FA0A1] mb-2">Jump to</h6>
                <ul className="text-[#115CD9] space-y-2">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Portfolio</a>
                  </li>
                  <li>
                    <a href="">News</a>
                  </li>
                  <li>
                    <a href="">Stories</a>
                  </li>
                  <li>
                    <a href="">Jobs</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-Messina">
                  <h4 className="font-bold text-[#191618] mb-1">Cambridge</h4>
                  <p className="mb-4">
                    70728 Yost Burg,
                    <br /> North Magdaleneview,
                    <br /> UT 97952-2814
                  </p>
                  <hr className="bg-[#9FA0A1] w-[258px] p-[1px]" />
                </div>
                <div className="font-Messina my-4">
                  <h4 className="font-bold text-[#191618] mb-1">London</h4>
                  <p className="mb-4">
                    Suite 292 903 Stehr Streets,
                    <br /> Langworthtown, SC 94577-9465
                  </p>
                  <hr className="bg-[#9FA0A1] w-[258px] p-[1px]" />
                </div>
                <div className="font-Messina">
                  <h4 className="font-bold text-[#191618] mb-1">
                    San Francisco
                  </h4>
                  <p className="mb-4">
                    19837 Gilberto Lodge,
                    <br /> Lake Kendallville,
                    <br /> Colorado - 97392, Bhutan
                  </p>
                  <hr className="bg-[#9FA0A1] w-[258px] p-[1px]" />
                </div>
                <div className="flex gap-6 mt-4">
                  <FaLinkedin className="text-[#9FA0A1] text-[27px]" />
                  <FaTwitter className="text-[#9FA0A1] text-[27px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="font-Messina text-sm sm:-mt-12">
            <ul className="flex gap-4 font-bold text-[#9FA0A1]">
              <li><a href=""></a>©2024</li>
              <li><a href=""></a>Terms of Use</li>
              <li><a href=""></a>Privacy Policy</li>
            </ul>
            <p className="sm:w-[517px] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaera 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
