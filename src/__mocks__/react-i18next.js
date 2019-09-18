/**
 * Mock for the react i18next implmentation
 * Parts are taken from the official react i18next repository:
 * https://github.com/i18next/react-i18next/blob/master/example/test-jest/__mocks__/react-i18next.js
 *
 */
const useMock = [k => k, {}];
useMock.t = k => k;
useMock.i18n = {};

module.exports = {
  useTranslation: () => useMock,
  initReactI18next: jest.fn(),
};
