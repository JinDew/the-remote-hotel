import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteCabinsAPI } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeleteCabins() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabins } = useMutation({
    mutationFn: deleteCabinsAPI,
    onSuccess: () => {
      toast.success("Cabin is successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabins };
}
