"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import ThemeSwitch from "@/components/ui/theme-switch";

/**
 * Props for `CustomToggle`.
 */
export type CustomToggleProps = SliceComponentProps<Content.CustomToggleSlice>;

/**
 * Component for "CustomToggle" Slices.
 */
const CustomToggle: FC<CustomToggleProps> = ({ slice }) => {
  const { theme, setTheme } = useTheme();
  const {
    primary: { show_theme_toggle },
    slice_type,
    variation,
  } = slice || {};

  if (!show_theme_toggle) return null;

  const isDark = theme === "dark";

  return (
    <section
      className="mx-auto w-fit"
      data-slice-type={slice_type}
      data-slice-variation={variation}
    >
      <ThemeSwitch />
    </section>
  );
};

export default CustomToggle;
