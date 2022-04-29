const config = {
  mode: 'development',
  entry: './src/lit/sample1.ts',
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};


module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.output.path = `${__dirname}/dist`;
  }

  return config;
};