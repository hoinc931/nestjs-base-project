import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(originPath: string): string {
  const nodeEnv: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${originPath}/.env`);
  const envFilename: string = nodeEnv ? `${nodeEnv}.env` : 'development.env';
  let filePath: string = resolve(`${originPath}/${envFilename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}
