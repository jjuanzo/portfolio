/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      use: {
        loader: 'svg-url-loader',
      },
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
          publicPath: '/_next/static/portfolio',
          outputPath: 'static',
          emitFile: !options.isServer,
        },
      },
    });
    return config;
  },
  output: 'export',
  basePath: '/portfolio',
};

module.exports = nextConfig;
