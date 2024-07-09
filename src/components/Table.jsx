import { BiSolidDownArrow } from "react-icons/bi";

const Table = () => {
  return (
    <div className=" p-2 rounded-md sm:p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg font-Messina ">
            <tr className="text-right">
              <th title="" className="p-3 text-left">
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
          <tbody className="overflow-y-auto max-h-80 custom-scrollbar">
            <tr className="text-right bg-secondary font-Nantes table-fixed">
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
            <tr className="text-right font-Nantes table-fixed">
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
            <tr className="text-right bg-secondary font-Nantes table-fixed">
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
            {/* 4 */}
            <tr className="text-right font-Nantes table-fixed">
              <td className="px-3 py-2 text-start">
                <span>AvidXchange</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AVDX</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Payments</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$10.21</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$2.0</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>27.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>61.5%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>6.0</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>10.5%</span>
              </td>
            </tr>
            {/* 5 */}
            <tr className="text-right bg-secondary font-Nantes table-fixed">
              <td className="px-3 py-2 text-start rounded-s-md">
                <span>Bakkt Holdings</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">BKKT</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Wealth</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$1.32</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$0.1</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>38%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>--</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>0.4</span>
              </td>
              <td className="px-3 py-2 text-end rounded-e-md">
                <span>13.8%</span>
              </td>
            </tr>
            {/* 6 */}
            <tr className="text-right font-Nantes table-fixed">
              <td className="px-3 py-2 text-start">
                <span>Virtu Financial Inc</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">VIRT</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Wealth</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$17.0</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$3.1</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>-22.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>38.2%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>2.6</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>-17.8%</span>
              </td>
            </tr>
            {/* 7 */}
            <tr className="text-right bg-secondary font-Nantes table-fixed">
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
                <span>$$50.5</span>
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
            {/* 8 */}
            <tr className="text-right font-Nantes table-fixed">
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
            {/* 9 */}
            <tr className="text-right bg-secondary font-Nantes table-fixed">
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
            {/* 10 */}
            <tr className="text-right font-Nantes table-fixed">
              <td className="px-3 py-2 text-start">
                <span>AvidXchange</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AVDX</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Payments</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$10.21</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$2.0</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>27.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>61.5%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>6.0</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>10.5%</span>
              </td>
            </tr>
            {/* 11 */}
            <tr className="text-right bg-secondary font-Nantes table-fixed">
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
            {/* 12 */}
            <tr className="text-right font-Nantes table-fixed">
              <td className="px-3 py-2 text-start">
                <span>AvidXchange</span>
              </td>
              <td className="px-3 text-end py-2">
                <span className="pe-2">AVDX</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>Payments</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>$10.21</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>$2.0</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>27.0%</span>
              </td>
              <td className="px-3 py-2 text-center">
                <span>61.5%</span>
              </td>
              <td className="px-3 text-center py-2">
                <span>6.0</span>
              </td>
              <td className="px-3 py-2 text-end">
                <span>10.5%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
