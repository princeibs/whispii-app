import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full flex-col">
        <p className="font-mono text-5xl text-center">Whispii</p>
        <div className="mt-24 flex gap-10">
          <Link
            className="border shadow text-white bg-green-600 rounded w-[130px] h-[140px] flex justify-center items-center"
            href={"/github"}
          >
            Github
          </Link>
          <Link
            className="border shadow text-white bg-yellow-600 rounded w-[130px] h-[140px] flex justify-center items-center"
            href={"/koola"}
          >
            Koola
          </Link>
        </div>
      </div>
    </>
  );
}
