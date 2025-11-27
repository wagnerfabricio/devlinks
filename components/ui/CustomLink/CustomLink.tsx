import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export const CustomLink = ({
  children,
  className,
  href,
  ...rest
}: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith("/");

  const linkClasses = `w-full text-center text-text px-6 py-4 bg-surface-10 hover:bg-surface-5 backdrop-blur-sm border border-stroke hover:border-text rounded-lg${className ? ` ${className}` : ""}`;

  if (isInternalLink && href) {
    return (
      <Link href={href} className={linkClasses} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={linkClasses} {...rest}>
      {children}
    </a>
  );
};
