import Image from "next/image";
import { Badge } from "~/components/badge";

import type { Metadata } from "next";
import { MusciShare } from "~/components/music-share";

export const metadata: Metadata = {
  title: "しなの そらは さんの紹介ページ",
  description: "STU48 ドラフト3期生 信濃宙花さんの紹介サイトです",
};

export default function Home() {
  return (
    <>
      <div className="w-full px-6">
        <div className="flex justify-center gap-x-2 pt-6 md:pt-10">
          <div>
            <Image
              src="/soraha_header.jpg"
              alt="Vercel Logo"
              width={1200}
              height={630}
            />
          </div>
        </div>
      </div>
      <div className="md:px-15 mx-auto max-w-screen-xl px-6 pt-4 sm:px-10 lg:px-24">
        <div className="max-w mx-auto md:mt-10">
          <div className="md:mt-8">
            <h1 className="text-center font-semibold leading-loose text-slate-700">
              <span className="block pb-1">
                STU48 <span className="">ドラフト3期生</span>
              </span>
              <ruby className="text-xl tracking-wide md:text-2xl">
                信濃　宙花<rt className="text-[14px]">しなの そらは</rt>
                さんの紹介ページ 🍜
              </ruby>
            </h1>
          </div>
          <div>
            <div className="mt-6 flex min-w-[220px] flex-1 justify-center md:mt-10">
              <ul className="text-sm">
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

        <div className="flex flex-col justify-center gap-y-4 py-8 md:gap-y-8 md:py-12">
          <a
            href="https://sp.stu48.com/schedule/detail/15267"
            className="w-full rounded bg-sky-500 px-3 py-2 text-center text-sm text-white shadow md:px-12 md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="block">
              STU48 課外活動「MiKER!」公演 プレオーダー中！
            </span>
            2023年5月31日(水)　17:45開場/18:30開演
          </a>
          <a
            href="https://twitter.com/soraha_stu48/status/1653026613481844750?s=20"
            className="md:text-bas w-full rounded bg-teal-500 px-3 py-2 text-center text-sm text-white  shadow md:px-12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="block">お話し会 受付中！</span>
          </a>
          <a
            href="https://twitter.com/soraha_stu48/status/1654398209832390657?s=20"
            className="md:text-bas w-full rounded bg-blue-500 px-3 py-2 text-center text-sm text-white  shadow md:px-12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="block">ライキン × STU48コラボイベント 👑</span>
          </a>
        </div>

        <section className="pb-20 pt-10 md:pb-32 md:pt-20">
          <div className="grod-col-1 grid gap-8 md:grid-cols-2">
            <div className="relative rounded-md bg-sky-50 px-4 py-10 shadow-sm md:px-8">
              <a
                href="https://sp.stu48.com/feature/rikujou_teamunit_miker_fs"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 bg-sky-400 text-white">
                ユニット
              </Badge>
              <h3 className="mb-6 text-xl font-semibold text-slate-800 md:text-2xl">
                MiKER!
              </h3>
              <p className="break-words leading-7">
                STU48の課外活動ユニット、トークが面白くてパフォーマンスも最高！
              </p>
            </div>
            <div className="relative rounded-md bg-emerald-50 px-4 py-10 shadow-sm md:px-8">
              <a
                href="https://www.showroom-live.com/r/48_SHINANO_SORAHA"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 bg-emerald-500 text-white">
                配信
              </Badge>
              <h3 className="mb-6 text-xl font-semibold text-slate-800 md:text-2xl">
                SHOWROOM
              </h3>
              <p className="break-words leading-7">
                カラオケ配信、買ったもの紹介、
                たまにSTU2期生の尾崎世里花さんとのコラボ配信も！
              </p>
            </div>
            <div className="relative rounded-md bg-rose-50 px-4 py-10 shadow-sm md:px-8">
              <a
                href="https://www.youtube.com/playlist?list=PLgH27eqLR8Y8czJOH_mH9nOKaDQEn-7JS"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 bg-rose-400 text-white">
                YouTube
              </Badge>
              <h3 className="mb-6 text-xl font-semibold text-slate-800 md:text-2xl">
                STU LABO 宙花亭
              </h3>
              <p className="break-words leading-7">
                STU48 公式YouTube 「STU
                LABO」の中で、「宙花亭」というラーメンに関するソロ企画を行なっています！
                セルフプロデュースしたラーメンの商品化を目指している！
              </p>
            </div>
            <div className="relative rounded-md bg-orange-50 px-4 py-10 shadow-sm md:px-8">
              <a
                href="https://www.nhk.jp/p/koiraji/rs/Q7L6MXWKGL/"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 bg-orange-400 text-white">
                ラジオ
              </Badge>
              <h3 className="mb-6 text-xl font-semibold text-slate-800 md:text-2xl">
                コイらじ
              </h3>
              <p className="break-words leading-7">
                宙花さんの回は、毎週木曜日 17:05〜
                NHKラジオ第1（広島）で聴けます！
              </p>
            </div>
            <div className="relative rounded-md bg-teal-50 px-4 py-10 shadow-sm md:px-8">
              <a
                href="https://sp.stu48.com/"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 bg-teal-400 text-white">
                ブログ
              </Badge>
              <h3 className="mb-6 text-xl font-semibold text-slate-800 md:text-2xl">
                宙日記/まいにちそらは
              </h3>
              <p className="break-words leading-7">毎日更新中！</p>
            </div>
            <div className="relative rounded-md bg-blue-50 px-4 py-10 shadow-sm md:px-8">
              {" "}
              <a
                href="https://stu48-specialsupporter-rooms.fanpla.jp/"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 bg-blue-400 text-white">
                コミュニティ
              </Badge>
              <h3 className="mb-6 text-xl font-semibold text-slate-800 md:text-2xl">
                スペシャルサポーター
              </h3>
              <p className="break-words leading-7">
                毎週日曜日21時30分に更新！
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 md:pb-20">
          <h2 className="mb-8 text-3xl font-medium text-slate-700">楽曲</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative rounded-md bg-yellow-50 px-4 py-6 shadow-sm md:px-8">
              <Badge className="absolute right-4 top-3 hidden text-slate-700 md:block">
                「風を待つ」 - 2019.02.13
              </Badge>
              <h3 className="mb-2 text-xl font-semibold text-slate-800 md:mb-6 md:text-2xl">
                やがて菜の花が咲く頃
              </h3>
              <p className="break-words leading-7">
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
              <Badge className="absolute right-4 top-3 hidden text-slate-700 md:block">
                「花は誰のもの?」 - 2022.04.13
              </Badge>
              <h3 className="mb-2 text-xl font-semibold text-slate-800 md:mb-6 md:text-2xl">
                船から降りた僕たちは
              </h3>
              <p className="break-words leading-7">初センター曲！</p>{" "}
              <div className="flex w-full justify-end">
                <MusciShare
                  apple_share_url={`https://music.apple.com/jp/album/%E8%88%B9%E3%81%8B%E3%82%89%E9%99%8D%E3%82%8A%E3%81%9F%E5%83%95%E3%81%9F%E3%81%A1%E3%81%AF/1616820916?i=1616820935`}
                  line_share_url={`https://lin.ee/84qnvQR`}
                  spotify_share_url={`https://open.spotify.com/intl-ja/track/71VUr7JoLqpsclSHtXpUo0?si=3da2de77d16a4613`}
                />
              </div>
            </div>
            <div className="relative rounded-md bg-slate-50 px-4 py-6 shadow-sm md:px-8">
              <Badge className="absolute right-4 top-3 hidden text-slate-700 md:block">
                「息をする心」 - 2023.03.15
              </Badge>
              <h3 className="mb-2 text-xl font-semibold text-slate-800 md:mb-6 md:text-2xl">
                自然淘汰主義
              </h3>
              <p className="break-words leading-7">そらはさんセンター！</p>{" "}
              <div className="flex w-full justify-end">
                <MusciShare
                  apple_share_url={`https://music.apple.com/jp/album/%E8%87%AA%E7%84%B6%E6%B7%98%E6%B1%B0%E4%B8%BB%E7%BE%A9/1675294316?i=1675294318`}
                  line_share_url={`https://lin.ee/DIsygU1`}
                  spotify_share_url={`https://open.spotify.com/intl-ja/track/05FAYfOMJj6G2gauBhX9Bg?si=a9bcca24cfc94125`}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
