import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="inline-block w-[29rem]">
        <div className="w-0 overflow-hidden typed-out font-semibold text-3xl">
          Create fully formatted resumes.
        </div>
      </div>
    </main>
  );
}
