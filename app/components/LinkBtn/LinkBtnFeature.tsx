import {Link} from "@remix-run/react";
import {IconCaretRight} from "@tabler/icons-react";

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
        ease-in-out-cubic
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
        shadow-md
        shadow-melon-400/20
        transition
        duration-75
        hover:bg-melon-400
        hover:shadow-sm
        focus:shadow-none
        focus:outline-none
        focus:ring-4
        focus:ring-melon-600"
    >
      <span className="text-base font-semibold tracking-tight text-white group-active:text-melon-900">
        {btnText}
      </span>
      {hasIcon && (
        <div className="group-hover:translate-x-0.5">
          <IconCaretRight
            className="text-white group-active:text-melon-900"
            stroke={2}
          />
        </div>
      )}
    </Link>
  );
}
