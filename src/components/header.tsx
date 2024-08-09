import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center py-4 text-zinc-100 bg-zinc-900 shadow-lg">
      <Link href="/">
        <span className="font-medium text-lg">Epic Translations</span>
      </Link>
    </header>
  );
}
