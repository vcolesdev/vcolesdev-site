import useNavLinks from "~/hooks/useNavLinks";

export default function FooterNavLinks() {
  const navigation = useNavLinks();

  return (
    <nav
      className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
      aria-label="Footer"
    >
      {navigation.map((item) => (
        <div key={item.name} className="pb-6">
          <a
            href={item.href}
            className="text-rose_brown-600 hover:text-rose_brown-900 text-sm font-medium leading-6 tracking-tight"
          >
            {item.name}
          </a>
        </div>
      ))}
    </nav>
  );
}
