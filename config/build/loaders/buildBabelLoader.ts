import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export function buildBabelLoader() {
  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            babelRemovePropsPlugin,
            {
              props: ['data-testid']
            }
          ]
        ]
      }
    }
  }
}
