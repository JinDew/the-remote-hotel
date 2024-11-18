// stop at 5:56 in lecture 379
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  //Filter
  const filterValue = searchParams.get("status");

  const filter =
    filterValue === "all" || !filterValue
      ? null
      : { field: "status", value: filterValue };

  // Sort:
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";

  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //Pagination

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},

    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () =>
      getBookings({
        filter,
        sortBy,
        page,
      }),
  });
  // Prefetching: useQueryClient and then call .prefetchQuery({}), wrap qrKey qrFn and paste here
  // remember page+1, in qrFn: page: page + 1, can use cond page < lastpage, delare lastpage
  // Reapeat for prevPage

  return { isLoading, error, bookings, count };
}
