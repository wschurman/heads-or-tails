// Reexport the native module. On web, it will be resolved to CoinFlipModule.web.ts
// and on native platforms to CoinFlipModule.ts
export * from './src/CoinFlip.types';
export { default } from './src/CoinFlipModule';

