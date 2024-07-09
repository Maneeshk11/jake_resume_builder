"use client";

import StoreProvider from "../providers";

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl text-center justify-center">
          {children}
        </div>
      </section>
    </StoreProvider>
  );
}