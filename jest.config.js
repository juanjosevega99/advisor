const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/tests'],
};

module.exports = createJestConfig(config)