import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export function loadEnv() {
  const path =
    process.env.NODE_ENV === 'test'
      ? '.env.test'
      : process.env.NODE_ENV === 'development'
      ? '.env.development'
      : '.env';

  console.log(path);
  const currentEnvs = dotenv.config({ path });
  console.log(currentEnvs);
  console.log(dotenvExpand.expand(currentEnvs));
  dotenvExpand.expand(currentEnvs);
  console.log(process.env.DATABASE_URL)
}