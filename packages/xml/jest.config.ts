/* eslint-disable */
export default {
  displayName: 'xml',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!csv-parse/.*)',
    '../node_modules/(?!csv-parse/.*)',
    '../../node_modules/(?!csv-parse/.*)',
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'html', 'xml', 'ejs'],
  coverageDirectory: '../../coverage/packages/xml',
};
