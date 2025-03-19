#!/usr/bin/env node
const path = require('path');

const prodFile = '.env.production';
const envFile = path.resolve(__dirname, '..', prodFile);

if (!envFile) {
  console.log(`❌ 缺少生产环境配置文件: ${prodFile}`);
  process.exit(1);
}
