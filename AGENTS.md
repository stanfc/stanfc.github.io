# Odd Pocket 開發與部署

此 repo 是 `odd-pocket.pages.dev` 的入口與整合部署來源。先讀 `README.md` 的部署設定及「之後新增與更新 app」。

## 專案結構

- 根目錄 `index.html`、`portal.css`：Odd Pocket 入口。
- `windcity-sidewalk/`：同 repo 內追蹤的風城人行道。
- `guess-party/`：忽略追蹤的獨立本機 checkout。猜猜樂原始碼由 `stanfc/guess-party` repo 管理，不要把其 `.git` 或整個 checkout 加到本 repo。
- `scripts/build.mjs`：Cloudflare 的唯一整合建置入口。
- `dist/`：產生的部署檔案，不提交。

## 新增 app

1. 同 repo 的新 app 使用自己的資料夾，不另建巢狀 Git repo。
2. 明確把公開檔案或框架建置產物加入 `scripts/build.mjs`，輸出到 `dist/<app-name>/`。不要假設新資料夾會自動發布。
3. 在根目錄 `index.html` 新增 app 卡片，連結使用相對子路徑。
4. 確認資源、路由、manifest、Service Worker 都支援 app 的部署子路徑；Service Worker 不可接管其他 app。
5. 只發布公開資源，不複製憑證、Git 資料、依賴目錄或其他開發檔案。
6. 介面使用台灣繁體中文，沿用 Odd Pocket 的入口風格；各 app 保留自己的品牌與操作。

## 驗證與發布

- Cloudflare 設定：`main`、Framework `None`、Build command `node scripts/build.mjs`、Build output `dist`、Root directory 留空。
- 程式或建置修改後，執行合適的檢查，並以 `node scripts/build.mjs` 產生完整輸出；需要瀏覽器驗證時從 `dist/` 預覽，確認 app 子路徑及既有專案入口。
- 純文件修改只需檢查差異及格式，不必重跑遊戲或完整建置。
- 沿用使用者授權的發布範圍；發布時提交並推送正確 repo 的 `main`。以 Cloudflare 實際結果確認部署成功，不能把 Git push 成功當作部署成功。
- 本 repo 的 main 推送可觸發 Cloudflare Git integration；猜猜樂獨立 repo 的推送不會自動觸發 Odd Pocket。更新猜猜樂後須重建 Odd Pocket，目前尚未設定跨 repo 通知。
- 猜猜樂 PWA 快取版本由建置時取得的猜猜樂 commit SHA 決定，保留版本注入與子路徑隔離。
