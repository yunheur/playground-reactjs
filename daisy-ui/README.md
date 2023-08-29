## Daisy UI Playground

[Documentation](https://daisyui.com/docs)

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
4. daisyui 패키지 설치 ([참고](https://daisyui.com/docs/install/))
   ```
   yarn add -D daisyui@latest
   ```
5. tailwind.config.js 설정
   ```
   module.exports = {
      //...
      plugins: [require("daisyui")],
   }
   ```
6. [공식 문서](https://daisyui.com/docs)를 참고하여 컴포넌트 사용