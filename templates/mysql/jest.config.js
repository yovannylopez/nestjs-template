/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
    '!src/main.ts',
    '!src/app.module.ts',
    '!src/common/**/*.ts',
    '!src/domain/**/*.dto.ts',
    '!src/domain/**/*.entity.ts',
    '!src/domain/**/*.module.ts',
    '!src/domain/**/*.provider.ts',
    '!src/infrastructure/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: [
    '<rootDir>/src/common',
    '<rootDir>/src/infrastructure',
  ],
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
