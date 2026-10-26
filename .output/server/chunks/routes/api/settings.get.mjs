import { d as defineEventHandler, b as db, a$ as settings, dQ as isPublicSettingKey } from '../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const settings_get = defineEventHandler(async () => {
  const rows = await db.select({ key: settings.key, value: settings.value }).from(settings);
  return rows.filter((row) => isPublicSettingKey(row.key));
});

export { settings_get as default };
//# sourceMappingURL=settings.get.mjs.map
