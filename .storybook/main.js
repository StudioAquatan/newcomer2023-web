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
    options.presets.push([
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ]);
    // Emotionプラグインを追加
    options.plugins.push(require.resolve("@emotion/babel-plugin"));

    return options;
  },
};
