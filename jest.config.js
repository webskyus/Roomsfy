module.exports = {
  roots: [
    "<rootDir>",
    "pages"
  ],
  modulePaths: [
    "<rootDir>",
    "pages"
  ],
  moduleDirectories: ["node_modules"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**"
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg|ttf|woff|woff2)$/i": `<rootDir>/__mocks__/fileMock.js`,
    "^@/components/(.*)$": "<rootDir>/components/$1"
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest", {
        presets: [
          "next/babel"
        ]
      }
    ]
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  collectCoverage: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  clearMocks: true,
  maxWorkers: "50%",
  cacheDirectory: ".jest/cache",
  coverageDirectory: ".jest/coverage",
  moduleFileExtensions: ["ts", "tsx", "js"]
};