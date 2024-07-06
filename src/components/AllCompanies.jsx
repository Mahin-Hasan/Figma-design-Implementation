import { IoIosSearch } from "react-icons/io";
import SectionTitle from "./SectionTitle";
import Table from "./Table";

const AllCompanies = () => {
  return (
    <section>
      <div className="p-5 mt-20 bg-white rounded-xl">
        <div className="flex items-center justify-between px-8 py-8">
          <SectionTitle title={"All Companies"} />
          <fieldset className="w-2/4 space-y-1 text-gray-800">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <IoIosSearch className="text-2xl" />
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search Companies"
                className="w-full p-4 pl-10 text-2xl rounded-md focus:outline-none bg-secondary placeholder:ps-3 placeholder:text-[#191618] text-blue-600 focus:bg-blue-50 focus:border-blue-600"
              />
            </div>
          </fieldset>
        </div>
        {/* Table */}
        <Table />
      </div>

      <div className="flex justify-center font-Messina text-white gap-4 my-8">
        <button className="bg-primaryBlue px-5 py-3 rounded-full drop-shadow-2xl">
          Download ‘All Companies’ Data
        </button>
        <button className="bg-primaryBlue px-5 py-3 rounded-full drop-shadow-2xl">
          View Methodology
        </button>
      </div>
    </section>
  );
};

export default AllCompanies;
