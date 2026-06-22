import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // 2.5 seconds total

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950">
      <div className="flex flex-col items-center">
        {/* Granite Block */}
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 border-4 border-neutral-700 rounded-xl"></div>

          <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-neutral-500 via-neutral-700 to-neutral-900 animate-pulse"></div>

          {/* Percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-amber-500">
              {progress}%
            </span>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="mt-8 text-3xl font-bold tracking-[8px] text-amber-500">
          JAYAM
        </h1>

        <p className="mt-2 text-sm uppercase tracking-[6px] text-neutral-300">
          GRANITES
        </p>

        {/* Progress Bar */}
        <div className="mt-6 h-2 w-72 overflow-hidden rounded-full bg-neutral-800">
          <div
            className="h-full rounded-full bg-amber-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}