
# kintone-get-pluginid

秘密鍵からKintoneプラグインのプラグインIDを生成するツールです。

## インストール

このパッケージをグローバルにインストールするには、npmを使用します：

\`\`\`bash
npm install -g @rex0220/kintone-get-pluginid
\`\`\`

## 使用方法

秘密鍵からプラグインIDを生成するには、コマンドラインツール\`rex0220-get-pluginid\`を使用します。

### 基本的な使用方法

\`\`\`bash
rex0220-get-pluginid -i path/to/your/private_key.pem
\`\`\`

このコマンドはプラグインIDを生成し、コンソールに出力します。

### ファイルへの出力

プラグインIDをファイルに出力するには、\`--out\`または\`-o\`オプションを使用します：

\`\`\`bash
rex0220-get-pluginid -i path/to/your/private_key.pem -o path/to/output_file.txt
\`\`\`

これにより、指定されたファイルに生成されたプラグインIDが書き込まれます。

## オプション

- \`-i, --input\`: 秘密鍵ファイルへのパス（必須）。
- \`-o, --out\`: プラグインIDの出力ファイルパス（オプション）。

## 例

\`\`\`bash
rex0220-get-pluginid -i my_private_key.pem -o plugin_id.txt
\`\`\`

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細については[LICENSE](LICENSE)ファイルを参照してください。

このプロジェクトには、以下のMITライセンスプロジェクトのコードが含まれています：

- kintone/js-sdk (https://github.com/kintone/js-sdk/tree/main/packages/plugin-packer)

## 貢献

貢献は歓迎します！GitHubでissueを開くか、プルリクエストを送信してください。

## 作者

rex0220 - [rex0220@gmail.com](mailto:rex0220@gmail.com)

## リポジトリ

[https://github.com/rex0220/kintone-get-pluginid](https://github.com/rex0220/kintone-get-pluginid)

## バグ

もし問題が発生した場合は、こちらで報告してください：[https://github.com/rex0220/kintone-get-pluginid/issues](https://github.com/rex0220/kintone-get-pluginid/issues)。

## ホームページ

詳細については、プロジェクトのホームページをご覧ください：[https://github.com/rex0220/kintone-get-pluginid#readme](https://github.com/rex0220/kintone-get-pluginid#readme)
