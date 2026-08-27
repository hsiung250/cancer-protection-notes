# 夥伴學習筆記庫

這是鄭占禮處經理的課程學習總目錄，可直接發布到 GitHub Pages，不需要安裝任何套件。

## 網站結構

```text
index.html                         課程總目錄首頁
styles.css                         總目錄首頁樣式
og.png                             總目錄社群分享圖
.nojekyll                          GitHub Pages 靜態發布設定
assets/
  haven-logo.png                   網站頁首品牌圖示
courses/
  cancer-protection/
    index.html                     癌症保障自學筆記
    styles.css                     課程頁樣式
    app.js                         自我檢核與學習進度
    og.png                         課程社群分享圖
```

## 新增下一堂課

1. 在 `courses` 內新增一個英文資料夾，例如 `sales-conversation`。
2. 把新課程的 `index.html`、樣式、互動程式及圖片放進該資料夾。
3. 在根目錄 `index.html` 的課程總目錄加入一張課程卡片，連結到 `courses/資料夾名稱/`。
4. 上傳變更到 GitHub；GitHub Pages 會自動更新。

每堂課使用獨立資料夾，因此未來新增內容不會互相覆蓋，也能各自分享網址。

## 使用提醒

本網站內容為課程逐字稿的學習整理。案例、費用、統計與商品內容可能受語音辨識、個案條件與時間影響；實際投保與理賠請以當期正式條款及保險公司認定為準。
