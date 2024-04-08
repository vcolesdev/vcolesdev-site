import {Link} from "@remix-run/react";
import {IconArrowRightTail} from "@tabler/icons-react";

export default function LinkBtnFeature({
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
        gap-2
        rounded-xl
        border-2
        border-melon-400
        bg-melon-400
        px-4
        py-3
        text-center
        text-base
        font-semibold
        tracking-tight
        text-melon-900
        shadow-md
        shadow-melon-400/20
        hover:bg-melon-400
        hover:text-melon-900
        hover:shadow-sm
        focus:shadow-none
        focus:outline-none
        focus:ring-4
        focus:ring-melon-600"
    >
      <span>{btnText}</span>
      {hasIcon && (
        <div className="group-hover:translate-x-1 group-hover:transition">
          <IconArrowRightTail stroke={2} />
        </div>
      )}
    </Link>
  );
}
