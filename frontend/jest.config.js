module.exports = {
    testPathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    transformIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
    testEnvironment: "jsdom"
};