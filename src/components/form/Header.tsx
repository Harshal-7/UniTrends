"use client";

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4">
      <p className="text-xl md:text-3xl font-semibold">{label}</p>
    </div>
  );
};

export default Header;
