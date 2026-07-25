import { getCmsEnv } from "./cf-env";
import ptMessages from "@/i18n/messages/pt.json";
import enMessages from "@/i18n/messages/en.json";
import type { Locale, MenuData, MenuPayload } from "./menu-types";

async function kv(): Promise<KVNamespace> {
  return (await getCmsEnv()).MENU_CMS_KV;
}

const dataKey = (locale: Locale) => `menuData:${locale}`;
const imageKey = (locale: Locale) => `menuImage:${locale}`;

function defaultData(locale: Locale): MenuData {
  const src = locale === "en" ? enMessages : ptMessages;
  return {
    sections: src.menu.sections as MenuData["sections"],
    notes: src.menu.notes as MenuData["notes"],
  };
}

export async function getMenuPayload(locale: Locale): Promise<MenuPayload> {
  const ns = await kv();
  const [rawData, imageUrl] = await Promise.all([
    ns.get(dataKey(locale)),
    ns.get(imageKey(locale)),
  ]);

  let data: MenuData;
  if (rawData) {
    try {
      data = JSON.parse(rawData) as MenuData;
    } catch {
      data = defaultData(locale);
    }
  } else {
    data = defaultData(locale);
  }

  return { data, imageUrl: imageUrl ?? null };
}

export async function saveMenuData(locale: Locale, data: MenuData): Promise<void> {
  const ns = await kv();
  await ns.put(dataKey(locale), JSON.stringify(data));
}

export async function saveMenuImage(locale: Locale, dataUrl: string): Promise<void> {
  const ns = await kv();
  await ns.put(imageKey(locale), dataUrl);
}

export async function deleteMenuImage(locale: Locale): Promise<void> {
  const ns = await kv();
  await ns.delete(imageKey(locale));
}
