import { formatCurrency } from "../../utils/helpers";

import Stat from "./Stat";

import {
  HiCurrencyDollar,
  HiHome,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from "react-icons/hi";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const bookingsNum = bookings?.length;
  const checkins = confirmedStays?.length;
  const totalSale = bookings.reduce((acc, ind) => acc + ind.totalPrice, 0);
  const occupation = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const occupationRate = Math.round(
    (100 * occupation) / (cabinCount * numDays)
  );

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Total bookings"
        color="blue"
        value={bookingsNum}
      />
      <Stat
        icon={<HiCurrencyDollar />}
        title="Total sales"
        color="yellow"
        value={formatCurrency(totalSale)}
      />
      <Stat
        icon={<HiHome />}
        title="Total check in"
        color="green"
        value={checkins}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupation rate"
        color="purple"
        value={occupationRate + "%"}
      />
    </>
  );
}

export default Stats;
