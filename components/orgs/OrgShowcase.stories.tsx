import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { shuffle } from "../random";
import OrgShowcase, { OrgShowcaseProps } from "./OrgShowcase";

export default {
  title: "Orgs/OrgShowcase",
  component: OrgShowcase,
  argTypes: {
    orgs: { control: "object" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof OrgShowcase>;

const Template: ComponentStory<typeof OrgShowcase> = (args) => (
  <OrgShowcase {...args} />
);

const showcase: OrgShowcaseProps = {
  orgs: shuffle(
    [
      {
        orgName: "アメリカ民謡研究会",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "奇術部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ギター部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "軽音楽部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "交響楽団",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "古美術研究会",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "コンピュータ部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "茶道部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "自然愛好会",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "室内管弦楽団",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "写真研究部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "美術部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "漫画研究部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "テーブルトーク部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "文藝部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "アニメーション研究会",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "音楽サークルRaccoon",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ダンスサークル",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "映像研究会オリヲン座",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "謎解き研究部 Xcape",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "e-sports部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "アメリカンフットボール部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "弓道部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "剣道部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "硬式テニス部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "硬式野球部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "サッカー部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "自動車部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "水泳部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ソフトテニス部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "卓球部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "バスケットボール部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "男子バレーボール部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "男子ラクロス部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "女子ラクロス部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "軟式野球部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "バドミントン部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ハンドボール部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ラグビー部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "陸上競技部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ワンダーフォーゲル部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "合気道部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "スキー部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "モーターサイクルスポーツクラブ",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "バスケットボール同好会",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "バドミントンサークル",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "生協学生委員会",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "企画部",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "加子母木匠塾",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "フットサルサークルWith",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "地域創生学生団体（テクテク工房）",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ぽっけ",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "学生フォーミュラ",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "ロボコン",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
      {
        orgName: "鳥人間サークル",
        description: "ここに説明が入る",
        link: "/orgs/details/0",
      },
    ],
    0
  ),
};

export const Default = Template.bind({});
Default.args = showcase;
