import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export default function useTheme() {
  let context = useContext(ThemeContext);
  if (context === undefined) {
    new Error("theme context should be only used in ThemeContextProvider");
  }
  return context; //{theme:'dark'}
}
