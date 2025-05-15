import { CoinFlipResult } from '@/modules/coin-flip/src/CoinFlip.types';
import { NativeModule, requireNativeModule } from 'expo';

declare class CoinFlipModule extends NativeModule {
  flipCoin(): CoinFlipResult;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<CoinFlipModule>('CoinFlip');
