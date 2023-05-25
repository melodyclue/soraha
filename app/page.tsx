import Image from "next/image";
import type { Metadata } from "next";
import { MusciShare } from "~/components/music-share";
import { Miker } from "~/components/miker";
import { Sorahatei } from "~/components/sorahatei";
import { Listen } from "~/components/listen";

export const metadata: Metadata = {
  title: "信濃宙花さんの紹介サイト | STU48 ドラフト3期生",
  description: "STU48 ドラフト3期生 信濃宙花さんの紹介サイトです",
};

export default function Home() {
  return (
    <>
      <div className="w-full px-4">
        <div className="flex justify-center gap-x-2 pt-5 md:pt-10">
          <div className="aspect-square max-w-[10rem] overflow-hidden rounded-full">
            <Image
              src="/soraha_stu_2023_01.png"
              alt="Shinano Soraha STU48 2023"
              width={1200}
              height={630}
            />
          </div>
        </div>
      </div>

      <div className="px-8 md:mx-auto md:max-w-2xl">
        <h1 className="text-center leading-loose">
          <span className="mt-4 block pb-2 text-sm">
            STU48 <span className="">ドラフト3期生</span>
          </span>
          <ruby className="text-xl font-medium tracking-wide">
            信濃　宙花<rt className="text-[14px]">しなの そらは</rt>
            さんの紹介ページ 🍜
          </ruby>
        </h1>

        <div className="mx-auto pt-12 text-center md:pb-8">
          <h4 className="text-xl font-medium">Profile</h4>
          <div className="mt-4">
            <ul className="text-sm leading-7">
              <li>生年月日 / 2003年 8月9日</li>
              <li>出身地 / 兵庫県</li>
              <li>星座 / しし座</li>
              <li>血液型 / A型</li>
              <li>身長 / 163.5cm</li>
              <li>剣道3段</li>
              <li>ペンライトカラー 赤・緑</li>
              <li>ニックネーム / そらは</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-8 bg-[#f8fcff] px-8 py-10">
        <h2 className="mb-8 flex flex-col items-center justify-center rounded-sm px-4 py-1 text-center text-2xl font-medium tracking-wide text-slate-800">
          <span>Movie</span>
          <div className="flex items-center justify-center pt-1">
            <span className="h-0.5 w-5 bg-blue-400"></span>
          </div>
        </h2>
        <div className="flex flex-col gap-y-12 md:mx-auto md:max-w-xl">
          <Miker />
          <Sorahatei />
        </div>
      </section>

      <section className="px-8 py-16 md:mx-auto md:max-w-2xl md:py-20">
        <h2 className="mb-8 flex flex-col items-center justify-center rounded-sm px-4 py-1 text-center text-2xl font-medium tracking-wide text-slate-800">
          <span>Talk</span>
          <div className="flex items-center justify-center pt-1">
            <span className="h-0.5 w-5 bg-red-400"></span>
          </div>
        </h2>
        <div className="flex flex-col gap-y-6">
          {/* href="https://www.nhk.jp/p/koiraji/rs/Q7L6MXWKGL/" */}

          <Listen
            title={`SHOWROOM`}
            description={`カラオケ配信、買ったもの紹介、行ったところの思い出話など、様々な配信をしています！`}
          />

          <div className="border border-slate-100"></div>

          <div className="">
            <h3 className="mb-4 text-lg font-medium text-slate-800">
              コイらじ
            </h3>

            <p className="mb-3 mt-4 flex-1 break-words text-sm leading-6">
              宙花さんの回は、毎週木曜日 17:05〜
              NHKラジオ第1（広島）で聴けます！
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f9fbfd] px-8 pb-40 pt-10 md:py-20">
        <h2 className="mb-8 flex flex-col items-center justify-center rounded-sm px-4 py-1 text-center text-2xl font-medium tracking-wide text-slate-800">
          <span>Blog</span>
          <div className="flex items-center justify-center pt-1">
            <span className="h-0.5 w-5 bg-emerald-400"></span>
          </div>
        </h2>
        <div className="flex flex-col gap-y-6 md:mx-auto md:max-w-2xl">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-800">
              宙日記/まいにちそらは
            </h3>
            <div className="flex items-center justify-between">
              <p className="mb-3 mt-4 flex-1 break-words text-sm leading-6">
                毎日更新中！
              </p>
              <a
                className="rounded bg-teal-500 px-4 py-2 text-sm font-medium text-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://sp.stu48.com/"
              >
                ブログへ
              </a>
            </div>
          </div>
          <div className="border border-slate-100"></div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-800">
              スペシャルサポーター
            </h3>
            <div className="flex items-center justify-between">
              <p className="mb-3 mt-4 flex-1 break-words text-sm leading-6">
                毎週日曜日21時30分に更新！
              </p>
              <a
                className="rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://stu48-specialsupporter-rooms.fanpla.jp/"
              >
                サイトへ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mb-10 md:pb-20">
          <h2 className="mb-8 text-3xl font-medium text-slate-700">楽曲</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative rounded-md bg-yellow-50 px-4 py-6 shadow-sm md:px-8">
              <Badge className="absolute right-6 top-5 hidden text-slate-700 md:block">
                「風を待つ」 - 2019.02.13
              </Badge>
              <h3 className="mb-2 text-xl font-semibold text-slate-700 md:mb-6 md:text-2xl">
                やがて菜の花が咲く頃
              </h3>
              <p className="mb-4 flex-1 break-words leading-7 md:mb-0">
                ドラフト3期生として初めの曲！
              </p>
              <div className="flex w-full justify-end">
                <MusciShare
                  apple_share_url={`https://music.apple.com/jp/album/%E3%82%84%E3%81%8C%E3%81%A6-%E8%8F%9C%E3%81%AE%E8%8A%B1%E3%81%8C%E5%92%B2%E3%81%8F%E9%A0%83/1451565449?i=1451565452`}
                  line_share_url={`https://lin.ee/KexKZia`}
                  spotify_share_url={`https://open.spotify.com/intl-ja/track/2XZkRHszWoNd5qACYwUQUF?si=849ecbde42d74374`}
                />
              </div>
            </div>
            <div className="relative rounded-md bg-sky-50 px-4 py-6 shadow-sm md:px-8">
              <Badge className="absolute right-6 top-5 hidden text-slate-700 md:block">
                「花は誰のもの?」 - 2022.04.13
              </Badge>
              <h3 className="mb-2 text-xl font-semibold text-slate-700 md:mb-6 md:text-2xl">
                船から降りた僕たちは
              </h3>
              <p className="mb-4 flex-1 break-words leading-7 md:mb-0">
                初センター曲！
              </p>{" "}
              <div className="flex w-full justify-end">
                <MusciShare
                  apple_share_url={`https://music.apple.com/jp/album/%E8%88%B9%E3%81%8B%E3%82%89%E9%99%8D%E3%82%8A%E3%81%9F%E5%83%95%E3%81%9F%E3%81%A1%E3%81%AF/1616820916?i=1616820935`}
                  line_share_url={`https://lin.ee/84qnvQR`}
                  spotify_share_url={`https://open.spotify.com/intl-ja/track/71VUr7JoLqpsclSHtXpUo0?si=3da2de77d16a4613`}
                />
              </div>
            </div>
            <div className="relative rounded-md bg-slate-50 px-4 py-6 shadow-sm md:px-8">
              <Badge className="absolute right-6 top-5 hidden text-slate-700 md:block">
                「息をする心」 - 2023.03.15
              </Badge>
              <h3 className="mb-2 text-xl font-semibold text-slate-700 md:mb-6 md:text-2xl">
                自然淘汰主義
              </h3>
              <p className="mb-4 flex-1 break-words leading-7 md:mb-0">
                そらはさんセンター！
              </p>{" "}
              <div className="flex w-full justify-end">
                <MusciShare
                  apple_share_url={`https://music.apple.com/jp/album/%E8%87%AA%E7%84%B6%E6%B7%98%E6%B1%B0%E4%B8%BB%E7%BE%A9/1675294316?i=1675294318`}
                  line_share_url={`https://lin.ee/DIsygU1`}
                  spotify_share_url={`https://open.spotify.com/intl-ja/track/05FAYfOMJj6G2gauBhX9Bg?si=a9bcca24cfc94125`}
                />
              </div>
            </div>
          </div>
        </section> */}

      <div className="w-full">
        <div className="flex items-center justify-center pt-1">
          <span className="h-1 w-1/2 bg-red-400"></span>
          <span className="h-1 w-1/2 bg-green-400"></span>
        </div>
      </div>
    </>
  );
}
