import {IconTrafficCone, IconSquareRoundedX} from "@tabler/icons-react";

export default function UnderConstruction() {
  return (
    <div className="w-full bg-melon-900">
      <div className="flex items-center justify-center mx-auto">
        <div className="flex gap-4 py-5 px-5">
          <IconTrafficCone className="text-melon-300" size={24} />
          <p className="tracking-tight font-kanit text-[18px] text-rosy_brown-300">
            <span className="font-medium">Under Construction</span> - Welcome!  This site is a work in progress.  Thank you for stopping by.
          </p>
          <button
            id="btnDismissConstructionAlert"
            className="relative"
            onClick={(event) => console.log(event.currentTarget)}
          >
            <IconSquareRoundedX className="text-melon-300" size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}