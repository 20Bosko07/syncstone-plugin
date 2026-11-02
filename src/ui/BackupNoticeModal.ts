import { Modal, Setting, type App } from "obsidian";
import { t } from "../i18n/index.js";

/**
 * Shown once after the plugin was installed, before anything is synced: sync tools can make mistakes, so the user makes a
 * backup first. "Start syncing" is the confirmation; "Not now" keeps sync switched off and asks again next time;
 * until then the settings tab and the status menu offer the same confirmation.
 */
export class BackupNoticeModal extends Modal {
  constructor(
    app: App,
    private readonly onConfirm: () => void | Promise<void>,
    private readonly onClosed: () => void,
  ) {
    super(app);
  }

  onOpen(): void {
    this.titleEl.setText(t("p.backup.title"));
    this.contentEl.createEl("p", { text: t("p.backup.text") });
    this.contentEl.createEl("p", { text: t("p.backup.laterHint"), cls: "setting-item-description" });
    new Setting(this.contentEl)
      .addButton((button) => button.setButtonText(t("p.backup.later")).onClick(() => this.close()))
      .addButton((button) =>
        button
          .setButtonText(t("p.backup.confirm"))
          .setCta()
          .onClick(() => {
            this.close();
            void this.onConfirm();
          }),
      );
  }

  onClose(): void {
    this.contentEl.empty();
    this.onClosed();
  }
}
