import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footerSection" className="lg:pe-12  2xl:pe-[182px]">
      <div className="bg-footerBg rounded-tr-xl py-10">
        <div className="lg:ps-12 2xl:ps-48 ">
          {/* footer container */}
          <div className="flex flex-col md:flex-row justify-between px-2 lg:px-0">
            <div className="w-full  md:w-2/4">
              <h1 className="font-Nantes text-3xl sm:text-4xl md:w-[400px] lg:w-[454px]">
                Experience remarkable WordPress products with a new level of
                power, beauty, and human-centered designs.
              </h1>
            </div>
            <div className="flex w-full md:w-2/4 text-xl my-8 md:my-0 flex-col-reverse sm:flex-row justify-center lg:justify-normal md:px-2 lg:px-0">
              <div className="sm:w-60 mt-8 sm:mt-0">
                <h6 className="font-bold text-[#9FA0A1] mb-2 font-Messina">Jump to</h6>
                <ul className="text-[#115CD9] space-y-1 sm:space-y-2 ">
                  <li>
                    <a className="hover:underline underline-offset-4 font-NeueHaas" href="#about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline underline-offset-4 font-NeueHaas" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline underline-offset-4 font-NeueHaas" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline underline-offset-4 font-NeueHaas" href="#stories">
                      Stories
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline underline-offset-4 font-NeueHaas" href="#">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline underline-offset-4 font-NeueHaas" href="#about">
                      About Us
                    </a>
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
                  <hr className="bg-[#9FA0A1] w-full sm:w-[258px] p-[1px]" />
                </div>
                <div className="font-Messina my-4">
                  <h4 className="font-bold text-[#191618] mb-1">London</h4>
                  <p className="mb-4">
                    Suite 292 903 Stehr Streets,
                    <br /> Langworthtown, SC 94577-9465
                  </p>
                  <hr className="bg-[#9FA0A1] w-full sm:w-[258px] p-[1px]" />
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
                  <hr className="bg-[#9FA0A1] w-full sm:w-[258px] p-[1px]" />
                </div>
                <div className="flex gap-6 mt-4">
                  <a target="blank" href="https://www.linkedin.com/company/wppool/">
                    <FaLinkedin className="text-[#9FA0A1] hover:text-blue-600 text-[27px]" />
                  </a>
                  <a target="blank" href="https://x.com/wppool_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <FaTwitter className="text-[#9FA0A1] hover:text-sky-600 text-[27px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="font-Messina text-sm sm:-mt-12 px-2 lg:px-0">
            <ul className="flex gap-4 font-bold text-[#9FA0A1]">
              <li>
                <a className="hover:underline underline-offset-4" href="#">
                  ©2024
                </a>
              </li>
              <li>
                <a className="hover:underline underline-offset-4" href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="hover:underline underline-offset-4" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <p className="w-full sm:w-[517px] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia,molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaera
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
