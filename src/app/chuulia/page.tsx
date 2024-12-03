import Image from "next/image";

export default function Chuulia() {
  return (
    <main className="w-full h-full flex flex-col items-center p-4 space-y-4 rounded-md shadow-lg">
      <p className="text-slate-100 font-medium">live julia lana reaction:</p>

      <Image
        priority={true}
        unoptimized={true}
        src="/chuulia.gif"
        alt="Aggressive Chuu gif"
        width={200}
        height={200}
      />
    </main>
  );
}
