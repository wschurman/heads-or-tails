package expo.modules.coinflip

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class CoinFlipModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("CoinFlip")

    Function("flipCoin") {
      return@Function if ((0..1).random() == 0) "heads" else "tails"
    }
  }
}
