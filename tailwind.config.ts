import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: {
          DEFAULT: 'var(--gray-900)',
          dark: 'var(--gray-50)',
          onBrand: {
            DEFAULT: 'var(--base-white)',
            dark: 'var(--gray-50)',
          },
        },
        secondary: {
          DEFAULT: 'var(--gray-700)',
          dark: 'var(--gray-300)',
          hover: {
            DEFAULT: 'var(--gray-800)',
            dark: 'var(--gray-200)',
          },
          onBrand: {
            DEFAULT: 'var(--brand-200)',
            dark: 'var(--gray-300)',
          },
        },
        tertiary: {
          DEFAULT: 'var(--gray-600)',
          dark: 'var(--gray-400)',
          hover: {
            DEFAULT: 'var(--gray-700)',
            dark: 'var(--gray-300)',
          },
          onBrand: {
            DEFAULT: 'var(--brand-200)',
            dark: 'var(--gray-400)',
          },
        },
        quaternary: {
          DEFAULT: 'var(--gray-500)',
          dark: 'var(--gray-400)',
          onBrand: {
            DEFAULT: 'var(--brand-300)',
            dark: 'var(--gray-400)',
          },
        },
        white: {
          DEFAULT: 'var(--base-white)',
          dark: 'var(--base-white)',
        },
        disabled: {
          DEFAULT: 'var(--gray-500)',
          dark: 'var(--gray-500)',
        },
        placeholder: {
          DEFAULT: 'var(--gray-500)',
          dark: 'var(--gray-400)',
          subtle: {
            DEFAULT: 'var(--gray-300)',
            dark: 'var(--gray-700)',
          },
        },
        brand: {
          primary: {
            DEFAULT: 'var(--brand-900)',
            dark: 'var(--gray-50)',
          },
          secondary: {
            DEFAULT: 'var(--brand-700)',
            dark: 'var(--gray-300)',
          },
          tertiary: {
            DEFAULT: 'var(--brand-600)',
            dark: 'var(--gray-400)',
            alt: {
              DEFAULT: 'var(--brand-600)',
              dark: 'var(--gray-50)',
            },
          },
        },
        'error-primary': {
          DEFAULT: 'var(--error-600)',
          dark: 'var(--error-400)',
        },
        'warning-primary': {
          DEFAULT: 'var(--warning-600)',
          dark: 'var(--warning-400)',
        },
        'success-primary': {
          DEFAULT: 'var(--success-600)',
          dark: 'var(--success-400)',
        },
      },
      borderColor: {
        primary: {
          DEFAULT: 'var(--gray-300)',
          dark: 'var(--gray-700)',
        },
        secondary: {
          DEFAULT: 'var(--gray-200)',
          dark: 'var(--gray-800)',
        },
        tertiary: {
          DEFAULT: 'var(--gray-100)',
          dark: 'var(--gray-800)',
        },
        disabled: {
          DEFAULT: 'var(--gray-300)',
          dark: 'var(--gray-700)',
          subtle: {
            DEFAULT: 'var(--gray-200)',
            dark: 'var(--gray-800)',
          },
        },
        brand: {
          DEFAULT: 'var(--brand-500)',
          dark: 'var(--brand-400)',
          alt: {
            DEFAULT: 'var(--brand-600)',
            dark: 'var(--gray-700)',
          },
        },
        error: {
          DEFAULT: 'var(--error-500)',
          dark: 'var(--error-400)',
          subtle: {
            DEFAULT: 'var(--error-300)',
            dark: 'var(--error-400)',
          },
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: 'var(--gray-50)',
          dark: 'var(--gray-900)',
          alt: {
            DEFAULT: 'var(--base-white)',
            dark: 'var(--gray-900)',
          },
          hover: {
            DEFAULT: 'var(--gray-50)',
            dark: 'var(--gray-700)',
          },
          solid: {
            DEFAULT: 'var(--gray-50)',
            dark: 'var(--gray-900)',
          },
        },
        secondary: {
          DEFAULT: 'var(--gray-100)',
          dark: 'var(--gray-800)',
          alt: {
            DEFAULT: 'var(--gray-50)',
            dark: 'var(--gray-900)',
          },
          hover: {
            DEFAULT: 'var(--gray-100)',
            dark: 'var(--gray-700)',
          },
        },
        tertiary: {
          DEFAULT: 'var(--gray-100)',
          dark: 'var(--gray-800)',
        },
        quaternary: {
          DEFAULT: 'var(--gray-50)',
          dark: 'var(--gray-900)',
        },
        active: {
          DEFAULT: 'var(--gray-100)',
          dark: 'var(--gray-800)',
        },
        disabled: {
          DEFAULT: 'var(--gray-50)',
          dark: 'var(--gray-900)',
          subtle: {
            DEFAULT: 'var(--gray-100)',
            dark: 'var(--gray-800)',
          },
        },
        overlay: {
          DEFAULT: 'var(--gray-900)',
          dark: 'var(--gray-950)',
        },
        brand: {
          primary: {
            DEFAULT: 'var(--brand-500)',
            dark: 'var(--brand-500)',
            alt: {
              DEFAULT: 'var(--brand-600)',
              dark: 'var(--gray-800)',
            },
            solid: {
              DEFAULT: 'var(--brand-800)',
              dark: 'var(--brand-500)',
              hover: {
                DEFAULT: 'var(--brand-700)',
                dark: 'var(--brand-500)',
              },
              section: {
                subtle: {
                  DEFAULT: 'var(--brand-900)',
                  dark: 'var(--gray-800)',
                },
              },
            },
          },
          secondary: {
            DEFAULT: 'var(--brand-200)',
            dark: 'var(--brand-300)',
          },
        },
        error: {
          primary: {
            DEFAULT: 'var(--error-500)',
            dark: 'var(--error-500)',
          },
          secondary: {
            DEFAULT: 'var(--error-400)',
            dark: 'var(--error-400)',
          },
          solid: {
            DEFAULT: 'var(--error-600)',
            dark: 'var(--error-500)',
          },
        },
        warning: {
          primary: {
            DEFAULT: 'var(--warning-500)',
            dark: 'var(--warning-500)',
          },
          secondary: {
            DEFAULT: 'var(--warning-400)',
            dark: 'var(--warning-400)',
          },
        },
        success: {
          primary: {
            DEFAULT: 'var(--success-500)',
            dark: 'var(--success-500)',
          },
          secondary: {
            DEFAULT: 'var(--success-400)',
            dark: 'var(--success-400)',
          },
        },
      },
      colors: {
        base: {
          white: 'var(--base-white)',
          black: 'var(--base-black)',
          transparent: 'var(--base-transparent)',
        },
        gray: {
          '25': 'var(--gray-25)',
          '50': 'var(--gray-50)',
          '100': 'var(--gray-100)',
          '200': 'var(--gray-200)',
          '300': 'var(--gray-300)',
          '400': 'var(--gray-400)',
          '500': 'var(--gray-500)',
          '600': 'var(--gray-600)',
          '700': 'var(--gray-700)',
          '800': 'var(--gray-800)',
          '900': 'var(--gray-900)',
          '950': 'var(--gray-950)',
        },
        brand: {
          '25': 'var(--brand-25)',
          '50': 'var(--brand-50)',
          '100': 'var(--brand-100)',
          '200': 'var(--brand-200)',
          '300': 'var(--brand-300)',
          '400': 'var(--brand-400)',
          '500': 'var(--brand-500)',
          '600': 'var(--brand-600)',
          '700': 'var(--brand-700)',
          '800': 'var(--brand-800)',
          '900': 'var(--brand-900)',
          '950': 'var(--brand-950)',
        },
        error: {
          '25': 'var(--error-25)',
          '50': 'var(--error-50)',
          '100': 'var(--error-100)',
          '200': 'var(--error-200)',
          '300': 'var(--error-300)',
          '400': 'var(--error-400)',
          '500': 'var(--error-500)',
          '600': 'var(--error-600)',
          '700': 'var(--error-700)',
          '800': 'var(--error-800)',
          '900': 'var(--error-900)',
          '950': 'var(--error-950)',
        },
        warning: {
          '25': 'var(--warning-25)',
          '50': 'var(--warning-50)',
          '100': 'var(--warning-100)',
          '200': 'var(--warning-200)',
          '300': 'var(--warning-300)',
          '400': 'var(--warning-400)',
          '500': 'var(--warning-500)',
          '600': 'var(--warning-600)',
          '700': 'var(--warning-700)',
          '800': 'var(--warning-800)',
          '900': 'var(--warning-900)',
          '950': 'var(--warning-950)',
        },
        success: {
          '25': 'var(--success-25)',
          '50': 'var(--success-50)',
          '100': 'var(--success-100)',
          '200': 'var(--success-200)',
          '300': 'var(--success-300)',
          '400': 'var(--success-400)',
          '500': 'var(--success-500)',
          '600': 'var(--success-600)',
          '700': 'var(--success-700)',
          '800': 'var(--success-800)',
          '900': 'var(--success-900)',
          '950': 'var(--success-950)',
        },

        // Foreground colors
        fg: {
          primary: {
            DEFAULT: 'var(--gray-900)',
            dark: 'var(--base-white)',
          },
          secondary: {
            DEFAULT: 'var(--gray-700)',
            dark: 'var(--gray-300)',
            hover: {
              DEFAULT: 'var(--gray-800)',
              dark: 'var(--gray-200)',
            },
          },
          tertiary: {
            DEFAULT: 'var(--gray-600)',
            dark: 'var(--gray-400)',
            hover: {
              DEFAULT: 'var(--gray-700)',
              dark: 'var(--gray-300)',
            },
          },
          quaternary: {
            DEFAULT: 'var(--gray-500)',
            dark: 'var(--gray-400)',
            hover: {
              DEFAULT: 'var(--gray-600)',
              dark: 'var(--gray-300)',
            },
          },
          quinary: {
            DEFAULT: 'var(--gray-400)',
            dark: 'var(--gray-300)',
            hover: {
              DEFAULT: 'var(--gray-500)',
              dark: 'var(--gray-200)',
            },
          },
          senary: {
            DEFAULT: 'var(--gray-300)',
            dark: 'var(--gray-200)',
          },
          white: {
            DEFAULT: 'var(--base-white)',
            dark: 'var(--base-white)',
          },
          disabled: {
            DEFAULT: 'var(--gray-500)',
            dark: 'var(--gray-500)',
            subtle: {
              DEFAULT: 'var(--gray-300)',
              dark: 'var(--gray-700)',
            },
          },
          brand: {
            primary: {
              DEFAULT: 'var(--brand-600)',
              dark: 'var(--brand-500)',
              alt: {
                DEFAULT: 'var(--brand-600)',
                dark: 'var(--gray-300)',
              },
            },
            secondary: {
              DEFAULT: 'var(--brand-500)',
              dark: 'var(--gray-400)',
            },
          },
          error: {
            primary: {
              DEFAULT: 'var(--error-600)',
              dark: 'var(--error-500)',
            },
            secondary: {
              DEFAULT: 'var(--error-500)',
              dark: 'var(--error-400)',
            },
          },
          warning: {
            primary: {
              DEFAULT: 'var(--warning-600)',
              dark: 'var(--warning-500)',
            },
            secondary: {
              DEFAULT: 'var(--warning-500)',
              dark: 'var(--warning-400)',
            },
          },
          success: {
            primary: {
              DEFAULT: 'var(--success-600)',
              dark: 'var(--success-500)',
            },
            secondary: {
              DEFAULT: 'var(--success-500)',
              dark: 'var(--success-400)',
            },
          },
        },

        'focus-ring': 'var(--focus-ring)',
        'focus-ring-error': 'var(--focus-ring-error)',
      },
      borderRadius: {
        none: 'calc(var(--radius) * 0)',
        xxs: 'calc(var(--radius) * 0.25)',
        xs: 'calc(var(--radius) * 0.5)',
        sm: 'calc(var(--radius) * 0.75)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) * 1.25)',
        xl: 'calc(var(--radius) * 1.5)',
        '2xl': 'calc(var(--radius) * 2)',
        '3xl': 'calc(var(--radius) * 2.5)',
        '4xl': 'calc(var(--radius) * 3)',
        full: 'calc(var(--radius) * 9999)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
