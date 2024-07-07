const Footer = () => {
  return (
    <footer className="lg:pe-48">
      <div className="bg-footerBg rounded-tr-md  py-10">
        <div className="lg:ps-48 bg-stone-500">
          {/* footer container */}
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-2/4">
            <h1 className="font-Nantes text-4xl w-[454px]">
              Experience remarkable WordPress products with a new level of
              power, beauty, and human-centered designs.
            </h1>
            </div>
            <div className="flex w-2/4 ">
              <div className="w-36">
                <h6>Jump to</h6>
                <ul>
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
                <div>
                  <h4>Cambridge</h4>
                  <p>
                    70728 Yost Burg,
                    <br /> North Magdaleneview,
                    <br /> UT 97952-2814
                  </p>
                  <hr />
                </div>
                <div>
                  <h4>Cambridge</h4>
                  <p>
                    70728 Yost Burg,
                    <br /> North Magdaleneview,
                    <br /> UT 97952-2814
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
