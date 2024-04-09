import {Link} from "@remix-run/react";
import {IconPointer} from "@tabler/icons-react";

export default function LinkBtnFeatureOutline({
  btnText,
  hasIcon,
  href = "/",
}: {
  btnText: string;
  hasIcon?: boolean;
  href?: string;
}) {
  return (
    <Link
      to={href}
      type="button"
      className="
        group
        inline-flex
        items-center
        gap-1.5
        rounded-xl
        border-2
        border-melon-400
        bg-transparent
        px-4
        py-3
        text-center
        text-base
        font-semibold
        tracking-tight
        text-melon-400
        hover:bg-melon-400
        hover:text-melon-900
        focus:shadow-none
        focus:outline-none
        focus:ring-4
        focus:ring-melon-600
        transition"
    >
      <span>{btnText}</span>
      {hasIcon && (
        <div className="translate-x-0.5 group-hover:-translate-x-0.5 group-hover:transition">
          <IconPointer stroke={2} />
        </div>
      )}
    </Link>
  );
}
