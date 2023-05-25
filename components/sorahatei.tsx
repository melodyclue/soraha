"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Sorahatei = () => {
  return (
    <div className="">
      <h3 className="mb-4 text-lg font-medium text-slate-800">
        STU LABO 宙花亭
      </h3>
      <p className="mb-3 flex-1 break-words text-sm leading-6">
        STU48 公式YouTube 「STU
        LABO」の中で、「宙花亭」というラーメンに関するソロ企画を行なっています！
        セルフプロデュースしたラーメンの商品化を目指している！
      </p>
      <div className="relative h-0 overflow-hidden pb-[56.25%] pt-[30px]">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          className="absolute inset-0 h-full w-full"
          url="https://www.youtube.com/embed/DURqgI8nMg8"
        />
      </div>
    </div>
  );
};
