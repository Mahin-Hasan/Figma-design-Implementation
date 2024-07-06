import { LuPlus } from 'react-icons/lu';

const DashboardOptions = () => {
    return (
        <div className="w-full sm:w-56 bg-[#eff3f6] p-2 font-Nantes rounded-xl">
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-md bg-primaryBlue px-2 py-2 text-sm font-medium text-white"
              >
                The Index
              </a>
            </li>
            <li>
              <div className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700">
                <span className="text-sm font-medium">The Index Tab Two</span>
                <LuPlus className="text-xs"/>
              </div>
            </li>
            <li>
              <div className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700">
                <span className="text-sm font-medium">The Index Tab Three</span>
                <LuPlus className="text-xs"/>
              </div>
            </li>
            <li>
              <div className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700">
                <span className="text-sm font-medium">The Index Tab Four</span>
                <LuPlus className="text-xs"/>
              </div>
            </li>
            <li>
              <div className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700">
                <span className="text-sm font-medium">The Index Tab Five</span>
                <LuPlus className="text-xs"/>
              </div>
            </li>
          </ul>
        </div>
    );
};

export default DashboardOptions;