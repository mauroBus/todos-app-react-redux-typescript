/* eslint-disable immutable/no-mutation */

const browserPresetEnv = [
  '@babel/preset-env',
  {
    targets: 'last 2 versions, not ie < 11, not ie_mob < 11',
  },
]

const proposalPlugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
]

module.exports = {
  env: {
    development: {
      presets: [
        browserPresetEnv,
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [
        // Only include react-refresh plugin if we are running WDS with `hot: true`
        process.env.WDS_HOT && 'react-refresh/babel',
        ...proposalPlugins,
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-react-jsx-source',
      ].filter(Boolean),
    },

    production: {
      presets: [
        browserPresetEnv,
        '@babel/preset-typescript',
        ['@babel/preset-react', { development: true }],
      ],
      plugins: [
        ...proposalPlugins,
        '@babel/plugin-syntax-dynamic-import',
      ],
    },

    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: 'commonjs',
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [
        ...proposalPlugins,
        'babel-plugin-dynamic-import-node',
      ],
    },
  },
}
