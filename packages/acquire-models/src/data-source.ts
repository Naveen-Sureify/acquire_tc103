import 'reflect-metadata';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as models from './models';

// TODO - use the same config as previously for development / production
const isDevelopment = process.env['NODE_ENV'] === 'development';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env['PHINX_MYSQL_HOST'],
  port: parseInt((process.env['PHINX_MYSQL_PORT'] as string) || '3306'),
  username: process.env['PHINX_MYSQL_USER'],
  password: process.env['PHINX_MYSQL_PWD'],
  database: process.env['PHINX_MYSQL_DB'],
  entities: [...Object.values(models)],
  migrations: [
    path.join(__dirname, 'migrations/*.ts'),
    path.join(__dirname, 'migrations/*.js'),
  ],
  migrationsTableName: 'acquire_project_x_migrations',
  migrationsRun: process.env['DB_MIGRATIONS_RUN'] === 'true' && isDevelopment,
  dropSchema: process.env['DB_DROP_SCHEMA'] === 'true' && isDevelopment,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AcquireDataSource = new DataSource(dataSourceOptions);
