import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `SocialIcons`.
 */
export type SocialIconsProps = SliceComponentProps<Content.SocialIconsSlice>;

/**
 * Component for "SocialIcons" Slices.
 */
const SocialIcons: FC<SocialIconsProps> = ({ slice }) => {
  const {
    primary: { social_link },
    slice_type,
    variation,
  } = slice || {};

  return (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className="flex justify-center items-center gap-4 py-6"
    >
      {social_link.map((link) => (
        <a
          key={link.icon.id}
          href={
            link.social_link?.link_type === "Web"
              ? link.social_link.url
              : undefined
          }
          className="grid place-items-center w-14 h-14 rounded-full hover:bg-highlight"
        >
          {link.icon.url && (
            <Image
              src={link.icon.url}
              alt={link.icon.alt || ""}
              width={24}
              height={24}
              loading="eager"
              unoptimized
              className="w-6 h-6 invert dark:invert-0"
            />
          )}
        </a>
      ))}
    </section>
  );
};

export default SocialIcons;
