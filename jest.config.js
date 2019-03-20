module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "verbose": true,
  "collectCoverage": true,
  "moduleFileExtensions": ["ts",  "tsx", "js", "jsx", "json", "node"],
  "coverageReporters": ["json", "lcov", "text", "clover"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": [ "<rootDir>/enzymeSetup.ts"],
}
