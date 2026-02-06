import { authDropdownData } from "@/datas/authDropdown";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { useAuthStore } from "@/store/auth.store";

interface AuthDropdownProps {
  username: string;
}

export default function AuthDropdown({ username }: AuthDropdownProps) {
  const user = useAuthStore((state) => state.user);

  return (
    <Dropdown label={`Hello, ${username}`}>
      {user == null ? (
        <DropdownItem href="/login">Login</DropdownItem>
      ) : (
        <DropdownItem href="/logout">Logout</DropdownItem>
      )}
    </Dropdown>
  );
}
