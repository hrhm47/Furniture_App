
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['babel-plugin-inline-import'],
    ['react-native-reanimated/plugin'],
    ['module:react-native-dotenv'],
  ],
};
