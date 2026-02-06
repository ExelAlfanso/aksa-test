import { useTheme } from "@/providers/ThemeProvider";
import DropdownItem from "./DropdownItem";
import IconDropdown from "./IconDropdown";
import { SunIcon } from "@phosphor-icons/react/dist/icons/Sun";

export default function ThemeDropdown() {
  const theme = useTheme();
  const sunWeight = theme.resolvedTheme === "light" ? "regular" : "fill";

  return (
    <IconDropdown Icon={<SunIcon size={30} weight={sunWeight} />}>
      <DropdownItem onClick={() => theme.setTheme("light")}>Light</DropdownItem>
      <DropdownItem onClick={() => theme.setTheme("dark")}>Dark</DropdownItem>
      <DropdownItem onClick={() => theme.setTheme("system")}>
        System
      </DropdownItem>
    </IconDropdown>
  );
}
