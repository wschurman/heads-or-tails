import ExpoModulesCore

public class CoinFlipModule: Module {
  public func definition() -> ModuleDefinition {
    Name("CoinFlip")

    Function("flipCoin") { () -> String in
      Int.random(in: 0...1) == 0 ? "heads" : "tails"
    }
  }
}
