/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        // 互补色系统 - 橙色系（温暖、活力、正面）
        warm: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        // 紫色系（创意、智慧、高级）
        creative: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87'
        },
        // 绿色系（成长、成功、完成）
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d'
        },
        // 情感色彩系统
        emotion: {
          trust: '#3b82f6',      // 蓝色 - 信任、专业
          passion: '#f97316',    // 橙色 - 热情、活力
          wisdom: '#a855f7',     // 紫色 - 智慧、创意
          growth: '#22c55e',     // 绿色 - 成长、成功
          energy: '#fbbf24',     // 黄色 - 能量、乐观
          calm: '#06b6d4'        // 青色 - 平静、专注
        }
      },
      gridTemplateColumns: {
        'phi': '1fr 1.618fr',
        'phi-reverse': '1.618fr 1fr'
      },
      spacing: {
        'phi': '1.618rem',
        '2phi': '3.236rem',
        '3phi': '5.236rem',
        '4phi': '8.472rem'
      }
    }
  },
  plugins: []
};


