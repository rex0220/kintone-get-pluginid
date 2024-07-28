/**
 * get-pluginid.js
 * 
 * This script generates a plugin ID for Kintone plugins from a given RSA private key.
 * It reads the private key from a file, extracts the public key, and generates a 
 * unique plugin ID by hashing the public key with SHA-256 and converting it to a 
 * custom alphanumeric string.
 * 
 * Usage:
 * node get-pluginid.js --input <path-to-private-key-file> [--out <output-file-path>]
 * 
 * Options:
 * -i, --input  Path to the private key file (required).
 * -o, --out    Output file path for the plugin ID (optional).
 * 
 * Example:
 * node get-pluginid.js -i path/to/your/private_key.pem -o path/to/output_file.txt
 * 
 * License:
 * MIT License
 * 
 * This project includes code from the following MIT-licensed projects:
 * - kintone/js-sdk (https://github.com/kintone/js-sdk/tree/main/packages/plugin-packer)
 * 
 * Author:
 * rex0220
 */

const fs = require('fs');
const RSA = require('node-rsa');
const crypto = require('crypto');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

/**
 * `tr '0-9a-f' 'a-p'` in JS
 */
function hex2a(hex) {
  const N_TO_A = 'a'.charCodeAt(0) - '0'.charCodeAt(0);
  const A_TO_K = 'k'.charCodeAt(0) - 'a'.charCodeAt(0);

  return Array.from(hex)
    .map((s) => {
      if (s >= '0' && s <= '9') {
        return String.fromCharCode(s.charCodeAt(0) + N_TO_A);
      } else if (s >= 'a' && s <= 'f') {
        return String.fromCharCode(s.charCodeAt(0) + A_TO_K);
      }
      throw new Error(`invalid char: ${s}`);
    })
    .join('');
}

// uuid関数の定義
function uuid(publicKey) {
  const hash = crypto.createHash('sha256');
  hash.update(publicKey);
  const hexId = hash.digest().toString('hex').slice(0, 32);
  return hex2a(hexId);
}

// メイン関数
function main() {
  const argv = yargs(hideBin(process.argv))
    .option('input', {
      alias: 'i',
      describe: 'Path to the private key file',
      demandOption: true,
      type: 'string'
    })
    .option('out', {
      alias: 'o',
      describe: 'Output file path for the pluginId',
      type: 'string'
    })
    .help()
    .alias('help', 'h')
    .argv;

  const privateKeyPath = argv.input;
  const outputPath = argv.out;

  // 秘密鍵をファイルから読み込む
  const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

  // RSA オブジェクトを作成し、秘密鍵をセットする
  const key = new RSA(privateKey);

  // 公開鍵をDER形式でエクスポートする
  const publicKeyDer = key.exportKey('pkcs8-public-der');

  // pluginId 作成
  const pluginId = uuid(publicKeyDer);
  console.log('pluginId:', pluginId);

  // pluginId ファイル出力
  if (outputPath) {
    fs.writeFileSync(outputPath, pluginId);
    console.log('pluginId has been written to', outputPath);
  }
}

// メイン関数を呼び出す
main();
