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
