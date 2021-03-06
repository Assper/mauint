module.exports = {
  clearMocks: true,
  'moduleDirectories': [
    'node_modules',
    'app'
  ],
  'moduleFileExtensions': [
    'js',
    'jsx'
  ],
  setupFiles: [
    '<rootDir>/node_modules/regenerator-runtime/runtime',
    '<rootDir>/tests/setup.js'
  ]
}
