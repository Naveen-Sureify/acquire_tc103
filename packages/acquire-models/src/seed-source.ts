import 'reflect-metadata';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const isDevelopment = process.env['NODE_ENV'] === 'development';

const seedSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env['PHINX_MYSQL_HOST'],
  port: parseInt((process.env['PHINX_MYSQL_PORT'] as string) || '3306'),
  username: process.env['PHINX_MYSQL_USER'],
  password: process.env['PHINX_MYSQL_PWD'],
  database: process.env['PHINX_MYSQL_DB'],
  entities: [
    path.join(__dirname, 'lib/**/*.entity.ts'),
    path.join(__dirname, 'lib/**/*.entity.js'),
  ],
  migrations: [
    path.join(__dirname, 'seeds/*.ts'),
    path.join(__dirname, 'seeds/*.js'),
  ],
  migrationsTableName: 'acquire_project_x_seeds',
  migrationsRun: false,
  dropSchema: false,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
};

export const AcquireSeedSource = new DataSource(seedSourceOptions);
