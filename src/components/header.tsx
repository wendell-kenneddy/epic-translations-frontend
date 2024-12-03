import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="w-full h-[10vh] flex items-center justify-center py-4 text-slate-100 bg-slate-900 shadow-lg border-b border-slate-800">
      <div className="w-[90%] max-w-[500px] flex items-center justify-between sm:justify-center">
        {children}

        <Link href="/">
          <Image src="/greek-temple.svg" width={32} height={32} alt="Greek temple icon" />
        </Link>
      </div>
    </header>
  );
}
