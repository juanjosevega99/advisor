import type { Config } from 'jest';
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/tests'],
};

export default createJestConfig(config);
