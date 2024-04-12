import { logger } from 'rslog';
import { clean } from './clean.js';
import { installDependencies } from '../common/manager.js';
import {
    setNodeEnv
} from '../common/index.js';

export async function build() {
    setNodeEnv('production');

    try {
        await clean();
        await installDependencies();
        // await runBuildTasks();
    } catch (err) {
        logger.error('Build failed');
        process.exit(1);
    }
}