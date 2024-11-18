import { useSignout } from "../features/authentication/useSignout";
import ButtonIcon from "./ButtonIcon";
import { GoSignOut } from "react-icons/go";
import SpinnerMini from "./SpinnerMini";

function Logout() {
  const { signout, isLoading } = useSignout();
  return (
    <ButtonIcon onClick={signout}>
      {isLoading ? <SpinnerMini /> : <GoSignOut />}
    </ButtonIcon>
  );
}

export default Logout;
