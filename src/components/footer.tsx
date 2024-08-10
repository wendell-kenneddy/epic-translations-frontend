export function Footer() {
  return (
    <footer className="flex items-center justify-center py-2">
      <p className="text-zinc-100/60 font-medium text-sm">
        Feito com ❤️ por{" "}
        <a
          href="https://github.com/wendell-kenneddy"
          className="underline hover:text-zinc-100/100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wendell Kenneddy
        </a>{" "}
        e <span className="underline hover:text-zinc-100/100">Julia Lana</span>.
      </p>
    </footer>
  );
}
