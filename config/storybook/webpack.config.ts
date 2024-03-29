import type webpack from 'webpack'
import type { RuleSetRule } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { DefinePlugin } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: ''
  }
  config.resolve!.modules!.push(paths.src)
  config.resolve!.extensions!.push('.ts', '.tsx')
  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': paths.src
  }

  const rules = config.module!.rules as RuleSetRule[]
  config.module!.rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ))
  // config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
  //   if (/svg/.test(rule.test as string)) {
  //     return { ...rule, exclude: /\.svg$/i }
  //   }
  //   return rule
  // })

  config.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.module!.rules.push(buildCssLoader(true))

  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify('https://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook')
  }))

  return config
}
