import { CoinFlipResult } from '@/modules/coin-flip/src/CoinFlip.types';
import { NativeModule, registerWebModule } from 'expo';

class CoinFlipModule extends NativeModule {
  flipCoin(): CoinFlipResult {
    return Math.random() < 0.5 ? CoinFlipResult.HEADS : CoinFlipResult.TAILS;
  }
};

export default registerWebModule(CoinFlipModule, 'CoinFlipModule');
