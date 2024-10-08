import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center py-4 text-slate-100 bg-slate-900 shadow-lg">
      <Link href="/">
        <Image src="/greek-temple.svg" width={32} height={32} alt="Greek temple icon" />
      </Link>
    </header>
  );
}
