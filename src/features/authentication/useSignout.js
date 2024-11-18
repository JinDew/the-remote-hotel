import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signout as signoutApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, mutate: signout } = useMutation({
    mutationFn: signoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); // lack somthing
      toast.success("Logout successfully");
      navigate("/login", { replace: true });
    },
  });

  return { signout, isLoading };
}
