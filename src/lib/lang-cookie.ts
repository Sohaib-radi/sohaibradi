import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";

import { LANG_COOKIE } from "@/lib/lang-constants";

export const getLangCookie = createServerFn({ method: "GET" }).handler(async () => {
  return getCookie(LANG_COOKIE) ?? null;
});
