// ponytail: dynamic import avoids static `cloudflare:workers` resolution failure
// in dev (the lovable vite config only adds the CF plugin during build).

export interface CmsEnv {
  MENU_CMS_KV: KVNamespace;
  ADMIN_PASSWORD: string | undefined;
}

export async function getCmsEnv(): Promise<CmsEnv> {
  // dev: wrangler proxy mocks the real runtime bindings
  // prod/build: the cloudflare vite plugin provides cloudflare:workers
  if (import.meta.env.DEV) {
    const { getPlatformProxy } = await import("wrangler");
    const proxy = await getPlatformProxy<CmsEnv>();
    return proxy.env as unknown as CmsEnv;
  }
  const { env } = await import("cloudflare:workers");
  return env as unknown as CmsEnv;
}
