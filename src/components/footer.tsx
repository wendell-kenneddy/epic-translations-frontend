import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full h-[10vh] bg-slate-900 flex items-center justify-center py-2 border-t border-slate-800">
      <p className="text-slate-100/60 font-medium text-sm">
        Feito com ❤️ por{" "}
        <a
          href="https://github.com/wendell-kenneddy"
          className="underline hover:text-slate-100/100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wendell Kenneddy
        </a>{" "}
        e
        <Link href="/chuulia" className="underline hover:text-slate-100/100">
          Julia Lana
        </Link>
        .
      </p>
    </footer>
  );
}
