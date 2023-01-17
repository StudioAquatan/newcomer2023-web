module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"],
  // https://qiita.com/1994spagetian/items/579718b7091ac7e5ec8b
  babel: async (options) => {
    // emotion用の注入設定
    // preset-react ローダーを取得してくる
    const presetReact = options.presets.find((p) => /preset-react/.test(p[0]));
    // preset-react　ローダのオプションを設定
    presetReact[1] = {
      ...presetReact[1],
      runtime: "automatic",
      importSource: "@emotion/react",
    };
    // Emotionプラグインを追加
    options.plugins.push(require.resolve("@emotion/babel-plugin"));

    return options;
  },
};
