## Shadcn UI Playground

[Documentation](https://ui.shadcn.com/docs)

## Setup

1. Vite 기반의 프로젝트 생성
   ```
   yarn create vite PROJECT_NAME --template react-ts
   ```
2. 프로젝트에 tailwind 적용 ([참고](https://tailwindcss.com/docs/guides/vite))
   ```
   yarn add -D tailwindcss postcss autoprefixer
   yarn tailwindcss init -p
   ```

   tailwind.config.js
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
      content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
         extend: {},
      },
      plugins: [],
   }
   ```

   index.css
   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. VS Code에 플러그인 설치
  - Tailwind CSS IntelliSense
  - PostCSs Language Support
4. tsconfig.json 설정 ([참고](https://ui.shadcn.com/docs/installation/vite))
   ```js
   {
      "baseUrl": ".",
      "paths": {
         "@/*": ["./src/*"]
         }
      ...
   }
   ```
5. vite.config.ts 설정
   ```
   # (so you can import "path" without error)
   yarn add -D @types/node
   ```

   vite config.ts
   ```js
   import path from "path"
   import react from "@vitejs/plugin-react"
   import { defineConfig } from "vite"
   
   export default defineConfig({
      plugins: [react()],
      resolve: {
         alias: {
            "@": path.resolve(__dirname, "./src"),
         },
      },
   })
   ```
6. Run the CLI
   ```
   npx shadcn-ui@latest init
   Would you like to use TypeScript (recommended)? yes
   Which style would you like to use? › New York
   Which color would you like to use as base color? › Slate
   Where is your global CSS file? › › src/index.css
   Do you want to use CSS variables for colors? › yes
   Where is your tailwind.config.js located? › tailwind.config.js
   Configure the import alias for components: › @/components
   Configure the import alias for utils: › @/lib/utils
   Are you using React Server Components? › no
   ```
7. [공식문서](https://ui.shadcn.com/docs/components/accordion)에서 필요한 컴포넌트를 설치해서 사용