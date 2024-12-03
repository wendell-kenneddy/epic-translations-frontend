import Image from "next/image";

export default function Chuulia() {
  return (
    <main className="w-full h-full flex flex-col items-center rounded-md shadow-lg">
      <Image
        priority={true}
        unoptimized={true}
        src="/chuulia.gif"
        alt="Aggressive Chuu gif"
        width={256}
        height={256}
        className="w-full h-full"
      />
    </main>
  );
}
