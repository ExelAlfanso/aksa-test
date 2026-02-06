import { useTheme } from "@/providers/ThemeProvider";
import DropdownItem from "./DropdownItem";
import IconDropdown from "./IconDropdown";
import { SunIcon } from "@phosphor-icons/react/dist/icons/Sun";

export default function ThemeDropdown() {
  const theme = useTheme();
  return (
    <IconDropdown
      Icon={
        <SunIcon
          size={30}
          weight={theme.theme === "light" ? "regular" : "fill"}
        />
      }
    >
      <DropdownItem onClick={() => theme.setTheme("light")}>Light</DropdownItem>
      <DropdownItem onClick={() => theme.setTheme("dark")}>Dark</DropdownItem>
      <DropdownItem onClick={() => theme.setTheme("system")}>
        System
      </DropdownItem>
    </IconDropdown>
  );
}
