module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
  moduleFileExtensions: ['js', 'json'],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: './jest.setup.js',
};
