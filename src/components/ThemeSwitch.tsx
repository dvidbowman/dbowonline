import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import IconDarkMode from "~/icons/IconDarkMode";
import IconLightMode from "~/icons/IconLightMode";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
      className="duration-150 ease-in-out hover:scale-125 hover:text-blue-300"
    >
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <IconDarkMode />
      ) : (
        <IconLightMode />
      )}
    </button>
  );
};

export default ThemeSwitch;
