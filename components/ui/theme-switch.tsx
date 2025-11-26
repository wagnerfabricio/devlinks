"use client";

import { cn } from "@/lib/utils";
import { Switch } from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { SunIcon, MoonStarsIcon } from "@phosphor-icons/react";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? "light" : "dark");
  };

  const isLight = theme === "light";

  return (
    <Switch
      checked={isLight}
      onCheckedChange={handleThemeChange}
      className="bg-surface-10 hover:bg-surface-5 backdrop-blur-sm relative inline-flex h-6 w-16 shrink-0 cursor-pointer rounded-full border border-stroke transition-colors duration-200 ease-in-out"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={cn(
          isLight ? "translate-x-10" : "-translate-x-1",
          "-translate-y-1/2 top-1/2 pointer-events-none absolute inline-block h-8 w-8 transform rounded-full bg-text shadow ring-0 transition-transform duration-700 ease-in-out"
        )}
      >
        <span className="absolute inset-0 flex h-full w-full items-center justify-center text-text-inverted">
          {isLight ? <SunIcon size={16} /> : <MoonStarsIcon size={16} />}
        </span>
      </span>
    </Switch>
  );
}

export default ThemeSwitch;
