import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextFooter`.
 */
export type TextFooterProps = SliceComponentProps<Content.TextFooterSlice>;

/**
 * Component for "TextFooter" Slices.
 */
const TextFooter: FC<TextFooterProps> = ({ slice }) => {
  const {
    primary: { text_footer },
    slice_type,
    variation,
  } = slice || {};
  return (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className="text-center text-sm text-text-secondary py-6 [&_a]:underline [&_a]:underline-offset-2"
    >
      <PrismicRichText field={text_footer} />
    </section>
  );
};

export default TextFooter;
