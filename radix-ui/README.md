## Radix UI (Primitives) Playground

[Documentation](https://www.radix-ui.com/themes/docs/overview/getting-started)

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
