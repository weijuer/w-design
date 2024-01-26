import { Command } from 'commander';
import { version } from '../package.json'
import { getValueByKey, setValue } from './utils/file'

// init commander
const program: any = new Command()

// info
program
    .name('WD')
    .description('CLI, update config file at Mac/Linux/Windows')
    .option('-d, --debug', 'output extra debugging')
    .version(version, '-v, --version', 'output the version number')

// main command
program
    // .option('-f, --file <path>', '配置文件路径')
    // .requiredOption('-k, --key <key>', '要修改的键')
    // .requiredOption('-v, --value <value>', '新的值')
    .action(async (options: object) => {
        console.log('main action', options)
    })

/**
 * sub command
 * set command
 */
program
    .command('set')
    .description('Set a config of a file at Mac/Linux/Windows')
    .argument('<key>', 'key of a config')
    .argument('<value>', 'value of a config')
    .option('-f, --file <path>', 'path of the config file')
    .action(async <T extends { file: string }>(key: string, value: any, options: T) => {
        console.log('update action', key, value, options.file)
        setValue(options.file, key, value);
    })

// get command
program
    .command('get')
    .description('Get a value of a config file by a given key')
    .argument('<key>', 'key of a config')
    .option('-f, --file <path>', 'path of the config file')
    .action(async <T extends { file: string }>(key: string, options: T) => {
        console.log('get action', key, options.file)
        getValueByKey(options.file, key)
    })

// parse
program.parse();

// console.log('options', program.opts())

// options
// const options = program.opts();
// const file: string = path.resolve(options.file);
// const key: string = options.key;
// const value: string = options.value;
