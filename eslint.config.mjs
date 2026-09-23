import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

const config = [
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Client-only reads (window size, localStorage) after mount are intentional here.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
]

export default config
