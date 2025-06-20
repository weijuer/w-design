import { Command } from 'commander'
import { version } from '../package.json'
const program = new Command()
// info
program
    .name('WD')
    .description('CLI 工具，用于修改 Linux 服务器配置文件')
    .version(version, '-v, --version', 'output the version number')
// main command
program
    .option('-f, --file <path>', '配置文件路径')
    // .requiredOption('-k, --key <key>', '要修改的键')
    // .requiredOption('-v, --value <value>', '新的值')
    .action(async options => {
        console.log('main action', options)
    })
// sub command
program
    .command('set <file>')
    .description('Set a config of a file at Linux/Windows')
    .argument('<key>', 'key of a config')
    .argument('<value>', 'value of a config')
    .option('-f --file <path>', 'path of the config file')
    .action(async (key, value, options) => {
        console.log('update action', key, value, options)
    })
// parse
program.parse()
// options
// console.log('options', program.opts())
// 提取选项
// const configFile: string = path.resolve(program.file);
// const keyToModify: string = program.key;
// const newValue: string = program.value;
// const init = () => {
//     // 读取配置文件
//     fs.readFile(configFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error(`无法读取配置文件 ${configFile}: ${err.message}`);
//             process.exit(1);
//         }
//         // 将配置文件内容按行分割
//         const lines = data.split('\n');
//         // 查找要修改的键
//         let keyFound = false;
//         for (let i = 0; i < lines.length; i++) {
//             const line = lines[i];
//             if (line.startsWith(`${keyToModify}=`)) {
//                 // 修改键值对
//                 lines[i] = `${keyToModify}=${newValue}`;
//                 keyFound = true;
//                 break;
//             }
//         }
//         // 如果键不存在，则添加新的键值对
//         if (!keyFound) {
//             lines.push(`${keyToModify}=${newValue}`);
//         }
//         // 将修改后的内容写回配置文件
//         const modifiedContent = lines.join('\n');
//         fs.writeFile(configFile, modifiedContent, 'utf8', (err) => {
//             if (err) {
//                 console.error(`无法写入配置文件 ${configFile}: ${err.message}`);
//                 process.exit(1);
//             }
//             console.log(`配置文件 ${configFile} 中的 ${keyToModify} 已修改为 ${newValue}`);
//         });
//     });
// }
