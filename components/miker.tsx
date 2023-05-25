"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Miker = () => {
  return (
    <div className="">
      <h3 className="mb-4 text-lg font-medium text-slate-800">
        STU48 課外活動 MiKER!
      </h3>

      <p className="mb-3 mt-4 flex-1 break-words text-sm leading-7">
        STU48の課外活動ユニット、トークが面白くてパフォーマンスも最高！
      </p>
      <div className="relative h-0 overflow-hidden pb-[56.25%] pt-[30px]">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          className="absolute inset-0 h-full w-full"
          url="https://www.youtube.com/embed/fmMdUw9vPzw"
        />
      </div>
    </div>
  );
};
