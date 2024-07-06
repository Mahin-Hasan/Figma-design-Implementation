import { BiSolidDownArrow } from 'react-icons/bi';

const Table = () => {
    return (
        <div className=" p-2 rounded-md sm:p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg font-Messina">
              <tr className="text-right">
                <th title="Team name" className="p-3 text-left">
                  Company
                </th>
                <th className="p-3">
                  <div className="flex gap-2 items-center font-normal">
                    <span>Ticker</span>
                    <BiSolidDownArrow className="text-gray-600 text-[8px]" />
                  </div>
                </th>
                <th title="Losses" className="font-normal p-3">
                  L
                </th>
                <th title="Win percentage" className="font-normal p-3">
                  Win%
                </th>
                <th title="Games behind" className="font-normal p-3">
                  GB
                </th>
                <th title="Home games" className="font-normal p-3">
                  Home
                </th>
                <th title="Away games" className="font-normal p-3">
                  Away
                </th>
                <th title="Last 10 games" className="font-normal p-3">
                  L10
                </th>
                <th title="Current streak" className="font-normal p-3">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-right bg-secondary font-Nantes">
                <td className="px-3 py-2 text-left rounded-s-md">
                  <span>1</span>
                </td>
                <td className="px-3 py-2">
                  <span>MIA</span>
                </td>
                <td className="px-3 py-2">
                  <span>31</span>
                </td>
                <td className="px-3 py-2">
                  <span>.646</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>0</span>
                </td>
                <td className="px-3 py-2">
                  <span>17-5</span>
                </td>
                <td className="px-3 py-2">
                  <span>14-12</span>
                </td>
                <td className="px-3 py-2">
                  <span>8-2</span>
                </td>
                <td className="px-3 py-2 rounded-e-md">
                  <span>W2</span>
                </td>
              </tr>
              <tr className="text-right font-Nantes">
                <td className="px-3 py-2 text-left">
                  <span>2</span>
                </td>
                <td className="px-3 py-2">
                  <span>MIA</span>
                </td>
                <td className="px-3 py-2">
                  <span>31</span>
                </td>

                <td className="px-3 py-2">
                  <span>.646</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>0</span>
                </td>
                <td className="px-3 py-2">
                  <span>17-5</span>
                </td>
                <td className="px-3 py-2">
                  <span>14-12</span>
                </td>
                <td className="px-3 py-2">
                  <span>8-2</span>
                </td>
                <td className="px-3 py-2">
                  <span>W2</span>
                </td>
              </tr>
              <tr className="text-right bg-secondary font-Nantes">
                <td className="px-3 py-2 text-left rounded-s-md">
                  <span>3</span>
                </td>
                <td className="px-3 py-2">
                  <span>MIA</span>
                </td>
                <td className="px-3 py-2">
                  <span>31</span>
                </td>
                <td className="px-3 py-2">
                  <span>.646</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>0</span>
                </td>
                <td className="px-3 py-2">
                  <span>17-5</span>
                </td>
                <td className="px-3 py-2">
                  <span>14-12</span>
                </td>
                <td className="px-3 py-2">
                  <span>8-2</span>
                </td>
                <td className="px-3 py-2 rounded-e-md">
                  <span>W2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Table;