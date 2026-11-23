import { d as defineEventHandler, f as getRouterParam, e as createError, bY as extensionManifests } from '../../../nitro/nitro.mjs';
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
const _slug__get = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  if (!slug || !hasThemesExtension()) {
    throw createError({ statusCode: 404, statusMessage: "Theme not found" });
  }
  try {
    const modPath = ["..", "..", "..", "app", "extensions", "themes", "server", "marketplace"].join("/");
    const mod = await import(
      /* @vite-ignore */
      modPath
    );
    if (typeof (mod == null ? void 0 : mod.getPublishedThemeBySlug) === "function") {
      const item = await mod.getPublishedThemeBySlug(slug);
      if (item) return item;
    }
  } catch {
  }
  throw createError({ statusCode: 404, statusMessage: "Theme not found" });
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
