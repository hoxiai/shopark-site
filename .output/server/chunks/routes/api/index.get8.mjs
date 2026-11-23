import { d as defineEventHandler, g as getQuery, bY as extensionManifests } from '../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const hasThemesExtension = () => extensionManifests.some((m) => m.id === "themes");
const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = Math.max(1, Number(query.page || 1));
  const pageSize = Math.max(1, Number(query.pageSize || query.limit || 20));
  if (!hasThemesExtension()) {
    return { items: [], total: 0, page, pageSize };
  }
  try {
    const modPath = ["..", "..", "..", "app", "extensions", "themes", "server", "marketplace"].join("/");
    const mod = await import(
      /* @vite-ignore */
      modPath
    );
    if (typeof (mod == null ? void 0 : mod.queryPublishedThemes) === "function") {
      return await mod.queryPublishedThemes({
        page,
        pageSize,
        keyword: typeof query.keyword === "string" ? query.keyword : "",
        category: typeof query.category === "string" ? query.category : ""
      });
    }
  } catch {
  }
  return { items: [], total: 0, page, pageSize };
});

export { index_get as default };
//# sourceMappingURL=index.get8.mjs.map
