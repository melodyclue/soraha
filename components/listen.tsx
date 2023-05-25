"use client";

type ListenProps = {
  title: string;
  description: string;
};

export const Listen = ({ title, description }: ListenProps) => {
  return (
    <div className="">
      <h3 className="mb-4 text-lg font-medium text-slate-800">{title}</h3>

      <p className="mb-3 mt-4 flex-1 break-words text-sm leading-6">
        {description}
      </p>
      <div className="flex justify-center">
        <a
          className="rounded bg-sky-500 px-4 py-2 text-sm font-medium text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.showroom-live.com/r/48_SHINANO_SORAHA"
        >
          ルームへ
        </a>
      </div>
    </div>
  );
};
