import { Link } from "@remix-run/react";
import { IconArrowRightCircle } from "@tabler/icons-react";

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
        gap-2
        rounded-full
        border-2
        border-salmon_pink-400
        bg-transparent
        px-6
        py-3.5
        text-center
        text-base
        font-semibold
        tracking-tight
        text-salmon_pink-400
        transition-all
        hover:bg-salmon_pink-400
        hover:text-salmon_pink-800
        focus:outline-none
        focus:ring-4
        focus:ring-melon-600"
    >
      <span>{btnText}</span>
      {hasIcon && (
        <div className="group-hover:translate-x-1 group-hover:transition">
          <IconArrowRightCircle size={20} />
        </div>
      )}
    </Link>
  );
}
