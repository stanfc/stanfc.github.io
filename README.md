# Odd Pocket — 奇趣口袋

小專案入口與 Cloudflare Pages 整合部署。原始專案維持獨立管理。

| 路徑 | 內容來源 |
| --- | --- |
| `/` | 本 repo 的 `index.html` 與 `portal.css` |
| `/windcity-sidewalk/` | 本 repo 的 `windcity-sidewalk/` |
| `/guess-party/` | 建置時從 `stanfc/guess-party` 的 `main` 取得 |

## Cloudflare Pages

連接 `stanfc/stanfc.github.io`，使用以下設定：

| 欄位 | 值 |
| --- | --- |
| Project name | `odd-pocket` |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `node scripts/build.mjs` |
| Build output directory | `dist` |
| Root directory | 留空（repo 根目錄） |

使用 Node.js 22 或更新版本。輸出網址由 Cloudflare 確認名稱可用後配發，預期為 `https://odd-pocket.pages.dev`。

建置會下載最新猜猜樂版本，為 Service Worker 注入該版本的 commit SHA，並產生 `dist/`，不複製專案的 Git 資料或本機未提交內容。

此 repo 推送後，Cloudflare Git integration 會自動重建。猜猜樂獨立 repo 更新時，需在 Cloudflare Pages 手動重建 Odd Pocket，才會納入新版；未設定跨 repo 自動部署通知。

## 本機驗證

```sh
node scripts/build.mjs
python3 -m http.server 5173 --directory dist
```

開啟 `http://localhost:5173/`。建置需要 Git 與網路。所有專案資源使用各自路徑；猜猜樂 Service Worker 的範圍限定於 `/guess-party/`。

## 之後新增與更新 app

Cloudflare Pages 的 Git integration 設定完成後，推送到本 repo 的 `main` 會觸發建置；建置成功才會更新網站。目前 `scripts/build.mjs` 使用明確的打包清單，**新增資料夾不會自動發布**。

### 在這個 repo 裡新增 app

以新增 `my-app` 為例：

1. 在 `my-app/` 開發並追蹤原始檔；同 repo 的 app 不要另外執行 `git init`。
2. 修改 `scripts/build.mjs`，把 app 的公開檔案輸出到 `dist/my-app/`。純靜態 app 可複製公開檔案；有框架的 app 要先安裝依賴、建置，再複製建置產物。
3. 資源路徑、前端路由與 PWA 設定須支援 `/my-app/` 子路徑。Service Worker 範圍限定在自己的 app，避免接管其他 app 或首頁。
4. 在入口 `index.html` 加上連到 `./my-app/` 的專案卡片。
5. 執行 `node scripts/build.mjs`，以 `dist/` 預覽，檢查首頁、app 連結與資源。
6. 提交並推送 `main`，到 Cloudflare Pages 確認這次建置成功。原有部署欄位維持不變。

部署成功後，app 會出現在 `https://odd-pocket.pages.dev/my-app/`。首頁卡片負責提供入口，實際發布的檔案由建置腳本決定。

### 更新既有 app

| 修改位置 | 發布方式 |
| --- | --- |
| 本 repo 的首頁、Windcity 或已加入打包流程的新 app | 推送本 repo 的 `main`，由 Cloudflare 自動建置 |
| 獨立的 `stanfc/guess-party` repo | 先推送猜猜樂的 `main`，再於 Cloudflare Pages 手動重新部署 Odd Pocket，以下載最新猜猜樂 |
| 本機未提交、未推送的檔案 | 不會部署；猜猜樂建置也不讀取本機 `guess-party/` |

目前未設定跨 repo 的部署通知。猜猜樂自己的 GitHub Pages workflow 成功，不代表 Odd Pocket 已更新。新增其他獨立 repo 的 app 時，也要明確設定下載、建置與更新觸發方式。
