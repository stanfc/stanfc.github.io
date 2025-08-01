# 🚀 GitHub Pages 部署指南

## 前置準備

### 1. 確保你有 GitHub 帳號
如果還沒有，請先註冊：https://github.com

### 2. 創建 GitHub Repository
1. 登入 GitHub
2. 點擊右上角的 "+" 號，選擇 "New repository"
3. Repository 名稱：`stanley-profile`
4. 設為 Public（GitHub Pages 需要）
5. 不要勾選 "Add a README file"（我們已經有了）
6. 點擊 "Create repository"

## 部署步驟

### 1. 初始化 Git（如果還沒有的話）
```bash
git init
```

### 2. 添加遠端倉庫
```bash
git remote add origin https://github.com/stanfc/stanley-profile.git
```

### 3. 提交所有檔案
```bash
git add .
git commit -m "Initial commit: Stanley Chen Portfolio"
```

### 4. 推送到 GitHub
```bash
git push -u origin main
```

### 5. 部署到 GitHub Pages
```bash
npm run deploy
```

## 部署後設定

### 1. 設定 GitHub Pages
1. 進入你的 GitHub repository
2. 點擊 "Settings" 標籤
3. 左側選單找到 "Pages"
4. Source 選擇 "Deploy from a branch"
5. Branch 選擇 "gh-pages"
6. 點擊 "Save"

### 2. 等待部署完成
- 通常需要 5-10 分鐘
- 你可以在 Actions 標籤中查看部署進度

## 更新網站

每次修改後，執行以下命令重新部署：

```bash
# 提交變更
git add .
git commit -m "Update: 描述你的變更"
git push

# 部署到 GitHub Pages
npm run deploy
```

## 自動化部署（可選）

### 設定 GitHub Actions
創建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 常見問題

### Q: 部署後網站無法訪問
A: 檢查以下幾點：
1. Repository 是否設為 Public
2. GitHub Pages 是否正確設定
3. 等待 5-10 分鐘讓部署完成

### Q: 圖片無法顯示
A: 確保圖片路徑正確：
- 使用相對路徑：`/profile_image.jpg`
- 或使用絕對路徑：`https://stanfc.github.io/stanley-profile/profile_image.jpg`

### Q: 樣式無法載入
A: 檢查 CSS 檔案是否正確匯入：
- 確保 `src/styles/index.css` 存在
- 確保所有樣式檔案都正確匯入

## 網站連結

部署完成後，你的網站將在：
**https://stanfc.github.io/stanley-profile**

## 自定義域名（可選）

如果你想使用自定義域名：
1. 購買域名
2. 在 GitHub Pages 設定中添加自定義域名
3. 在域名提供商處設定 DNS 記錄

## 技術支援

如果遇到問題，可以：
1. 檢查 GitHub Actions 日誌
2. 查看瀏覽器開發者工具的錯誤訊息
3. 確認所有依賴都已正確安裝 