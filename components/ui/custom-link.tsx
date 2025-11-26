import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  className?: string;
};

const CustomLink = ({ children, className, ...rest }: CustomLinkProps) => {
  return (
    <a
      className={cn(
        "w-full text-center text-text px-6 py-4 bg-surface-10 hover:bg-surface-5 backdrop-blur-sm border border-stroke hover:border-text rounded-lg",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export default CustomLink;
