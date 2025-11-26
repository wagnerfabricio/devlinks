import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CustomLink from "@/components/ui/custom-link";

/**
 * Props for `CtaList`.
 */
export type CtaListProps = SliceComponentProps<Content.CtaListSlice>;

/**
 * Component for "CtaList" Slices.
 */
const CtaList: FC<CtaListProps> = ({ slice }) => {
  const {
    primary: { ctas },
    slice_type,
    variation,
  } = slice || {};
  return (
    <section
      className="mx-auto w-full max-w-[588px] p-6 flex flex-col gap-4"
      data-slice-type={slice_type}
      data-slice-variation={variation}
    >
      {ctas?.map((cta) => (
        <CustomLink href={cta.url} key={cta.key}>
          {cta.text}
        </CustomLink>
      ))}
    </section>
  );
};

export default CtaList;
