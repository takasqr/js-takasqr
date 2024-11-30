// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist', // 出力先
    emptyOutDir: false, // ディレクトリをクリアしない
    lib: {
      // 複数のエントリーポイントのディクショナリや配列にもできます
      entry: resolve(__dirname, 'src/js-takasqr.ts'),
      name: 'JsTakasqr',
      // 適切な拡張子が追加されます
      fileName: 'js-takasqr'
    }
  }
})