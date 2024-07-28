
# kintone-get-pluginid

A tool to generate plugin IDs for Kintone plugins from private keys.

## Installation

You can install this package globally using npm:

\`\`\`bash
npm install -g kintone-get-pluginid
\`\`\`

## Usage

To generate a plugin ID from a private key, you can use the command line tool \`kintone-get-pluginid\`. 

### Basic Usage

\`\`\`bash
kintone-get-pluginid -i path/to/your/private_key.pem
\`\`\`

This command will generate a plugin ID and print it to the console.

### Output to File

To output the plugin ID to a file, use the \`--out\` or \`-o\` option:

\`\`\`bash
kintone-get-pluginid -i path/to/your/private_key.pem -o path/to/output_file.txt
\`\`\`

This will write the generated plugin ID to the specified file.

## Options

- \`-i, --input\`: Path to the private key file (required).
- \`-o, --out\`: Output file path for the plugin ID (optional).

## Example

\`\`\`bash
kintone-get-pluginid -i my_private_key.pem -o plugin_id.txt
\`\`\`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This project includes code from the following MIT-licensed projects:

- kintone/js-sdk (https://github.com/kintone/js-sdk/tree/main/packages/plugin-packer)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Author

rex0220 - [rex0220@gmail.com](mailto:rex0220@gmail.com)

## Repository

[https://github.com/rex0220/kintone-get-pluginid](https://github.com/rex0220/kintone-get-pluginid)

## Bugs

If you encounter any issues, please report them at [https://github.com/rex0220/kintone-get-pluginid/issues](https://github.com/rex0220/kintone-get-pluginid/issues).

## Homepage

For more information, visit the project homepage: [https://github.com/rex0220/kintone-get-pluginid#readme](https://github.com/rex0220/kintone-get-pluginid#readme)
