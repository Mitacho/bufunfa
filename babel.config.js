module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@types': './src/types',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@settings': './src/settings',
          '@context': './src/context',
        },
      },
    ],
  ],
};
