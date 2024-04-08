export default function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <p className="mt-10 text-center text-xs leading-5">
      &copy; {year} Vanessa Coles, Inc. All rights reserved.
    </p>
  );
}
