import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ClubShowcase, { ClubShowcaseProps } from "./ClubShowcase";

export default {
  title: "Clubs/ClubShowcase",
  component: ClubShowcase,
  argTypes: {
    cards: { control: "object" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ClubShowcase>;

const Template: ComponentStory<typeof ClubShowcase> = (args) => (
  <ClubShowcase {...args} />
);

function shuffle({ clubs }: ClubShowcaseProps) {
  return clubs.sort(() => Math.random() - 0.5);
}

const clubs: ClubShowcaseProps = {
  clubs: [
    {
      clubName: "アメリカ民謡研究会",
      description: "ここに説明が入る",
    },
    {
      clubName: "奇術部",
      description: "ここに説明が入る",
    },
    {
      clubName: "ギター部",
      description: "ここに説明が入る",
    },
    {
      clubName: "軽音楽部",
      description: "ここに説明が入る",
    },
    {
      clubName: "交響楽団",
      description: "ここに説明が入る",
    },
    {
      clubName: "古美術研究会",
      description: "ここに説明が入る",
    },
    {
      clubName: "コンピュータ部",
      description: "ここに説明が入る",
    },
    {
      clubName: "茶道部",
      description: "ここに説明が入る",
    },
    {
      clubName: "自然愛好会",
      description: "ここに説明が入る",
    },
    {
      clubName: "室内管弦楽団",
      description: "ここに説明が入る",
    },
    {
      clubName: "写真研究部",
      description: "ここに説明が入る",
    },
    {
      clubName: "美術部",
      description: "ここに説明が入る",
    },
    {
      clubName: "漫画研究部",
      description: "ここに説明が入る",
    },
    {
      clubName: "テーブルトーク部",
      description: "ここに説明が入る",
    },
    {
      clubName: "文藝部",
      description: "ここに説明が入る",
    },
    {
      clubName: "アニメーション研究会",
      description: "ここに説明が入る",
    },
    {
      clubName: "音楽サークルRaccoon",
      description: "ここに説明が入る",
    },
    {
      clubName: "ダンスサークル",
      description: "ここに説明が入る",
    },
    {
      clubName: "映像研究会オリヲン座",
      description: "ここに説明が入る",
    },
    {
      clubName: "謎解き研究部 Xcape",
      description: "ここに説明が入る",
    },
    {
      clubName: "e-sports部",
      description: "ここに説明が入る",
    },
    {
      clubName: "アメリカンフットボール部",
      description: "ここに説明が入る",
    },
    {
      clubName: "弓道部",
      description: "ここに説明が入る",
    },
    {
      clubName: "剣道部",
      description: "ここに説明が入る",
    },
    {
      clubName: "硬式テニス部",
      description: "ここに説明が入る",
    },
    {
      clubName: "硬式野球部",
      description: "ここに説明が入る",
    },
    {
      clubName: "サッカー部",
      description: "ここに説明が入る",
    },
    {
      clubName: "自動車部",
      description: "ここに説明が入る",
    },
    {
      clubName: "水泳部",
      description: "ここに説明が入る",
    },
    {
      clubName: "ソフトテニス部",
      description: "ここに説明が入る",
    },
    {
      clubName: "卓球部",
      description: "ここに説明が入る",
    },
    {
      clubName: "バスケットボール部",
      description: "ここに説明が入る",
    },
    {
      clubName: "男子バレーボール部",
      description: "ここに説明が入る",
    },
    {
      clubName: "男子ラクロス部",
      description: "ここに説明が入る",
    },
    {
      clubName: "女子ラクロス部",
      description: "ここに説明が入る",
    },
    {
      clubName: "軟式野球部",
      description: "ここに説明が入る",
    },
    {
      clubName: "バドミントン部",
      description: "ここに説明が入る",
    },
    {
      clubName: "ハンドボール部",
      description: "ここに説明が入る",
    },
    {
      clubName: "ラグビー部",
      description: "ここに説明が入る",
    },
    {
      clubName: "陸上競技部",
      description: "ここに説明が入る",
    },
    {
      clubName: "ワンダーフォーゲル部",
      description: "ここに説明が入る",
    },
    {
      clubName: "合気道部",
      description: "ここに説明が入る",
    },
    {
      clubName: "スキー部",
      description: "ここに説明が入る",
    },
    {
      clubName: "モーターサイクルスポーツクラブ",
      description: "ここに説明が入る",
    },
    {
      clubName: "バスケットボール同好会",
      description: "ここに説明が入る",
    },
    {
      clubName: "バドミントンサークル",
      description: "ここに説明が入る",
    },
    {
      clubName: "生協学生委員会",
      description: "ここに説明が入る",
    },
    {
      clubName: "企画部",
      description: "ここに説明が入る",
    },
    {
      clubName: "加子母木匠塾",
      description: "ここに説明が入る",
    },
    {
      clubName: "フットサルサークルWith",
      description: "ここに説明が入る",
    },
    {
      clubName: "地域創生学生団体（テクテク工房）",
      description: "ここに説明が入る",
    },
    {
      clubName: "ぽっけ",
      description: "ここに説明が入る",
    },
    {
      clubName: "学生フォーミュラ",
      description: "ここに説明が入る",
    },
    {
      clubName: "ロボコン",
      description: "ここに説明が入る",
    },
    {
      clubName: "鳥人間サークル",
      description: "ここに説明が入る",
    },
  ],
};

const showcase: ClubShowcaseProps = {
  clubs: shuffle(clubs),
};

export const Default = Template.bind({});
Default.args = showcase;
