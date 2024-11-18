import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Name from A to Z" },
          { value: "name-desc", label: "Name from Z to A" },
          { value: "regularPrice-asc", label: "Price from low to high" },
          { value: "regularPrice-desc", label: "Price from high to low" },
          { value: "maxCapacity-asc", label: "Capacity from small to big" },
          { value: "maxCapacity-desc", label: "Capacity from big to small" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
