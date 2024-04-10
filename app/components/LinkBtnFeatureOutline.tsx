import {Link} from "@remix-run/react";
import {IconCaretRight} from "@tabler/icons-react";

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
        ease-in-out-cubic
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
        transition
        duration-75
        hover:bg-melon-400
        focus:shadow-none
        focus:outline-none
        focus:ring-4
        focus:ring-melon-600"
    >
      <span className="text-base font-semibold tracking-tight text-melon-400 group-hover:text-melon-900">
        {btnText}
      </span>
      {hasIcon && (
        <div className="group-hover:translate-x-0.5 group-hover:transition">
          <IconCaretRight
            className="text-melon-400 group-hover:text-melon-900"
            stroke={2}
          />
        </div>
      )}
    </Link>
  );
}
