const path = require('path')

/*
SPECIFIC RULES, SETTINGS SHOULD only be to make custom things work like
configuration resolution, and extraneous dep (where it can't be injected (yet))

If your needing to add custom rules make a PRs to:
- @znemz/js-common-eslint-config-react
- @znemz/js-common-eslint-config
*/
module.exports = {
  extends: [require.resolve('@znemz/js-common-eslint-config-react-emotion')],
  settings: {
    'import/resolver': {
      alias: [['our-config', path.resolve(__dirname, './config/index.js')]],
      typescript: {},
    },
  },
  rules: {
    'import/no-cycle': 1,
    'import/no-self-import': 1,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    // https://github.com/benmosher/eslint-plugin-import/issues/458#issuecomment-468235671
    'import/no-extraneous-dependencies': (context) => [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: [context.getFilename(), __dirname],
      },
    ],
  },
};
