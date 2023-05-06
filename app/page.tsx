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
      <div className="mx-auto max-w-screen-xl px-6 sm:px-10 md:px-15 lg:px-24 pt-4">
        <div className="max-w md:mt-10 mx-auto">
          <div className="md:mt-8">
            <h1 className="font-semibold text-slate-700 leading-loose text-center">
              <span className="block pb-1">
                STU48 <span className="">ドラフト3期生</span>
              </span>
              <ruby className="text-xl md:text-2xl tracking-wide">
                信濃　宙花<rt className="text-[14px]">しなの そらは</rt>
                さんの紹介ページ 🍜
              </ruby>
            </h1>
          </div>
          <div>
            <div className="flex-1 min-w-[220px] flex justify-center mt-6 md:mt-10">
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

        <div className="flex flex-col gap-y-4 md:gap-y-8 justify-center py-8 md:py-12">
          <a
            href="https://sp.stu48.com/schedule/detail/15267"
            className="bg-sky-500 text-white px-3 md:px-12 py-2 rounded text-center shadow w-full text-sm md:text-base"
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
            className="bg-teal-500 text-white px-3 md:px-12 py-2 rounded text-center shadow w-full  text-sm md:text-bas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="block">お話し会 受付中！</span>
          </a>
          <a
            href="https://twitter.com/soraha_stu48/status/1654398209832390657?s=20"
            className="bg-blue-500 text-white px-3 md:px-12 py-2 rounded text-center shadow w-full  text-sm md:text-bas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="block">ライキン × STU48コラボイベント 👑</span>
          </a>
        </div>

        <section className="pt-10 md:pt-20 pb-20 md:pb-32">
          <div className="grid grod-col-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-50 px-4 md:px-8 py-10 rounded-md relative shadow-sm">
              <a
                href="https://sp.stu48.com/feature/rikujou_teamunit_miker_fs"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 text-white bg-sky-400">
                ユニット
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800">
                MiKER!
              </h3>
              <p className="break-words leading-7">
                STU48の課外活動ユニット、トークが面白くてパフォーマンスも最高！
              </p>
            </div>
            <div className="bg-emerald-50 px-4 md:px-8 py-10 rounded-md relative shadow-sm">
              <a
                href="https://www.showroom-live.com/r/48_SHINANO_SORAHA"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 text-white bg-emerald-500">
                配信
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800">
                SHOWROOM
              </h3>
              <p className="break-words leading-7">
                カラオケ配信、買ったもの紹介、
                たまにSTU2期生の尾崎世里花さんとのコラボ配信も！
              </p>
            </div>
            <div className="bg-rose-50 px-4 md:px-8 py-10 rounded-md relative shadow-sm">
              <a
                href="https://www.youtube.com/playlist?list=PLgH27eqLR8Y8czJOH_mH9nOKaDQEn-7JS"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 text-white bg-rose-400">
                YouTube
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800">
                STU LABO 宙花亭
              </h3>
              <p className="break-words leading-7">
                STU48 公式YouTube 「STU
                LABO」の中で、「宙花亭」というラーメンに関するソロ企画を行なっています！
                セルフプロデュースしたラーメンの商品化を目指している！
              </p>
            </div>
            <div className="bg-orange-50 px-4 md:px-8 py-10 rounded-md relative shadow-sm">
              <a
                href="https://www.nhk.jp/p/koiraji/rs/Q7L6MXWKGL/"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 text-white bg-orange-400">
                ラジオ
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800">
                コイらじ
              </h3>
              <p className="break-words leading-7">
                宙花さんの回は、毎週木曜日 17:05〜
                NHKラジオ第1（広島）で聴けます！
              </p>
            </div>
            <div className="bg-teal-50 px-4 md:px-8 py-10 rounded-md relative shadow-sm">
              <a
                href="https://sp.stu48.com/"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 text-white bg-teal-400">
                ブログ
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800">
                宙日記/まいにちそらは
              </h3>
              <p className="break-words leading-7">毎日更新中！</p>
            </div>
            <div className="bg-blue-50 px-4 md:px-8 py-10 rounded-md relative shadow-sm">
              {" "}
              <a
                href="https://stu48-specialsupporter-rooms.fanpla.jp/"
                className="absolute inset-0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Badge className="absolute right-4 top-3 text-white bg-blue-400">
                コミュニティ
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800">
                スペシャルサポーター
              </h3>
              <p className="break-words leading-7">
                毎週日曜日21時30分に更新！
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 md:pb-20">
          <h2 className="text-3xl font-medium mb-8 text-slate-700">楽曲</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-yellow-50 px-4 md:px-8 py-6 rounded-md relative shadow-sm">
              <Badge className="absolute right-4 top-3 text-slate-700 hidden md:block">
                「風を待つ」 - 2019.02.13
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-6 text-slate-800">
                やがて菜の花が咲く頃
              </h3>
              <p className="break-words leading-7">
                ドラフト3期生として初めの曲！
              </p>
              <div className="flex justify-end w-full">
                <MusciShare
                  apple_share_url={`https://music.apple.com/jp/album/%E3%82%84%E3%81%8C%E3%81%A6-%E8%8F%9C%E3%81%AE%E8%8A%B1%E3%81%8C%E5%92%B2%E3%81%8F%E9%A0%83/1451565449?i=1451565452`}
                  line_share_url={`https://lin.ee/KexKZia`}
                  spotify_share_url={`https://open.spotify.com/intl-ja/track/2XZkRHszWoNd5qACYwUQUF?si=849ecbde42d74374`}
                />
              </div>
            </div>
            <div className="bg-sky-50 px-4 md:px-8 py-6 rounded-md relative shadow-sm">
              <Badge className="absolute right-4 top-3 text-slate-700 hidden md:block">
                「花は誰のもの?」 - 2022.04.13
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-6 text-slate-800">
                船から降りた僕たちは
              </h3>
              <p className="break-words leading-7">初センター曲！</p>{" "}
              <div className="flex justify-end w-full">
                <MusciShare
                  apple_share_url={`https://music.apple.com/jp/album/%E8%88%B9%E3%81%8B%E3%82%89%E9%99%8D%E3%82%8A%E3%81%9F%E5%83%95%E3%81%9F%E3%81%A1%E3%81%AF/1616820916?i=1616820935`}
                  line_share_url={`https://lin.ee/84qnvQR`}
                  spotify_share_url={`https://open.spotify.com/intl-ja/track/71VUr7JoLqpsclSHtXpUo0?si=3da2de77d16a4613`}
                />
              </div>
            </div>
            <div className="bg-slate-50 px-4 md:px-8 py-6 rounded-md relative shadow-sm">
              <Badge className="absolute right-4 top-3 text-slate-700 hidden md:block">
                「息をする心」 - 2023.03.15
              </Badge>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-6 text-slate-800">
                自然淘汰主義
              </h3>
              <p className="break-words leading-7">そらはさんセンター！</p>{" "}
              <div className="flex justify-end w-full">
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
