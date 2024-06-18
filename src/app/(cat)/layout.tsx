import Navbar from "@/components/Navbar";

export default function categoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar
        className="text-black transition-none"
        categoryLayoutSpanClass="bg-[#000000] text-sm"
      />
      {children}
    </>
  );
}
