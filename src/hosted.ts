/**
 * The API server of the hosted Syncstone service - what the plugin talks to unless the user switches on "self-hosting" in
 * the settings (Advanced). It is the address of the API server (the one the web app itself calls), not of the web app.
 */
export const HOSTED_SERVER_URL = "https://api.syncst.one";

/** Trimmed, without trailing slashes - how addresses are compared and stored. */
export function normalizeServerUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}
