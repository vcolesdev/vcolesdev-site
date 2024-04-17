import classNames from "classnames";

export default {
  container: {
    styles: classNames([
      "container mx-auto px-4 sm:px-6 lg:px-8"
    ]),
    noPadding: classNames([
      "container mx-auto",
    ]),
    extraClasses: classNames([
      "max-w-7xl",
      "pt-12",
      "pb-24",
      "md:py-24",
      "lg:py-32"
    ])
  }
}