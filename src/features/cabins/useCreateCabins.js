import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabins } from "../../services/apiCabins";

export function useCreateCabins() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabins } = useMutation({
    mutationFn: createEditCabins,
    onSuccess: () => {
      toast.success("Successfully upload the new cabin");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabins };
}
