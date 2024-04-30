import classNames from "classnames";

export default {
  container: classNames([
    "mb-12",
    "lg:mb-24",
  ]),
  projects: {
    list: classNames([
      "container",
      "mx-auto",
      "grid",
      "max-w-7xl",
      "grid-cols-1",
      "gap-4",
      "lg:grid-cols-2",
      "lg:gap-6",
      "xl:grid-cols-3",
      "xl:gap-8"
    ])
  }
}