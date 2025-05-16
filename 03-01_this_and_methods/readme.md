# 03-01_this_and_methods

ここでは、JSにおける`this`の挙動とそれに関連するメソッドの使い方を学ぶ。

## ファイル

- `object_with_method.js`:
  オブジェクト内の関数定義と`this`が指す対象の基本挙動

- `aroow_vs_function.js`:
  通常の関数とアロー関数の`this`の違い。呼び出し元と定義元の違いを注目

- `this_in_callback.js`:
  コールバック関数(foreach)で`this`が意図通り動かない例

- `bind_this.js`:
  `bind(this)`によって`this`を固定し、コールバック内でも保持できることを確認

- `call_and_apply.js`:
  `call()`,`apply()`,`bind()`の違いと用途を比較。即時実行と呼び出し元・関数の再利用について

- `mission_summary.js`;
  `this`,`arrow`,`bind`,`call`,`apply`を総動員して通知システム実装する演習課題

## ゴール

- `this`の基本的な決まり(関数VSアロー)を理解する
- `.bind(this)` を用いて `this` を固定する方法を使いこなす
- `.call()` や `.apply()` による `this` の即時指定と実行の違いを理解する
- 状況に応じた `this` の扱い方を判断し、バグを防げるようになる
