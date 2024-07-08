import { BiSolidDownArrow } from "react-icons/bi";

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
                <div className="flex gap-2 items-center justify-end font-normal">
                  <span>Ticker</span>
                  <BiSolidDownArrow className="text-gray-600 text-[8px]" />
                </div>
              </th>
              <th title="Losses" className="font-normal text-center p-3">
                Vertical
              </th>
              <th title="Win percentage" className="font-normal text-end p-3">
                Price
              </th>
              <th title="Games behind" className="font-normal text-center p-3">
                Market Cap ($B)
              </th>
              <th title="Home games" className="font-normal text-center p-3">
                Revenue Growth
              </th>
              <th title="Away games" className="font-normal text-center p-3">
                Gross Margin
              </th>
              <th title="Last 10 games" className="font-normal text-center p-3">
                EV/Revenue
              </th>
              <th title="Current streak" className="font-normal text-end">
                YTD Performance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-right bg-secondary font-Nantes">
              <td className="px-3 py-2 text-start rounded-s-md">
                <span>Adyen</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AFRM</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Payments</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$17.15</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$50.5</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>49.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>15.8%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>6.3</span>
              </td>
              <td className="px-3 py-2 text-end rounded-e-md">
                <span>24.3%</span>
              </td>
            </tr>
            {/* 2 */}
            <tr className="text-right font-Nantes">
              <td className="px-3 py-2 text-start">
                <span>Affirm</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AFRM</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Lending</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.12</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$4.7</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>32.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>48.7%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>4.9</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>77.1%</span>
              </td>
            </tr>
            {/* 3 */}
            <tr className="text-right bg-secondary font-Nantes">
              <td className="px-3 py-2 text-start rounded-s-md">
                <span>Alkami Technology</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">ALKT</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>B2B SaaS</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.27</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$1.5</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>34.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>53.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>7.0</span>
              </td>
              <td className="px-3 py-2 text-end rounded-e-md">
                <span>10.0%</span>
              </td>
            </tr>
            {/* adding dummy */}
            {/* 2 */}
            <tr className="text-right font-Nantes">
              <td className="px-3 py-2 text-start">
                <span>Affirm</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AFRM</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Lending</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.12</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$4.7</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>32.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>48.7%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>4.9</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>77.1%</span>
              </td>
            </tr>
            {/* 3 */}
            <tr className="text-right bg-secondary font-Nantes">
              <td className="px-3 py-2 text-start rounded-s-md">
                <span>Alkami Technology</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">ALKT</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>B2B SaaS</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.27</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$1.5</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>34.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>53.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>7.0</span>
              </td>
              <td className="px-3 py-2 text-end rounded-e-md">
                <span>10.0%</span>
              </td>
            </tr>
            {/* 2 */}
            <tr className="text-right font-Nantes">
              <td className="px-3 py-2 text-start">
                <span>Affirm</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AFRM</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Lending</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.12</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$4.7</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>32.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>48.7%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>4.9</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>77.1%</span>
              </td>
            </tr>
            {/* 3 */}
            <tr className="text-right bg-secondary font-Nantes">
              <td className="px-3 py-2 text-start rounded-s-md">
                <span>Alkami Technology</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">ALKT</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>B2B SaaS</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.27</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$1.5</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>34.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>53.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>7.0</span>
              </td>
              <td className="px-3 py-2 text-end rounded-e-md">
                <span>10.0%</span>
              </td>
            </tr>
            {/* 2 */}
            <tr className="text-right font-Nantes">
              <td className="px-3 py-2 text-start">
                <span>Affirm</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AFRM</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Lending</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.12</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$4.7</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>32.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>48.7%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>4.9</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>77.1%</span>
              </td>
            </tr>
            {/* 3 */}
            <tr className="text-right bg-secondary font-Nantes">
              <td className="px-3 py-2 text-start rounded-s-md">
                <span>Alkami Technology</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">ALKT</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>B2B SaaS</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.27</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$1.5</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>34.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>53.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>7.0</span>
              </td>
              <td className="px-3 py-2 text-end rounded-e-md">
                <span>10.0%</span>
              </td>
            </tr>
            {/* 2 */}
            <tr className="text-right font-Nantes">
              <td className="px-3 py-2 text-start">
                <span>Affirm</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AFRM</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Lending</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$16.12</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$4.7</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>32.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>48.7%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>4.9</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>77.1%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
