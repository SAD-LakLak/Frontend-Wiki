import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";


const config: Config = {
  title: "LakLak Wiki",
  tagline: "مستندات آموزشی لک‌لک",
  favicon: "meta/favicon.ico",

  url: "https://wiki.laklakbox.ir",
  baseUrl: "/",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fa",
    locales: ["fa"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "docs",
          routeBasePath: "/"
        },
        theme: {
          customCss: [
            "./src/css/custom-ifm.css",
            "./src/css/custom-layout.css",
            "./src/css/custom-code.css",
            "./src/css/custom-images.css"
          ]
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    navbar: {
      title: "LakLak Wiki",
      logo: {
        alt: "لوگوی لک لک",
        src: "logo/logo.png",
        srcDark: "logo/logo-dark.png"
      },
      items: [
        {
          to: "/general",
          label: "عمومی",
          position: "left"
        },
        {
          to: "/supplier-panel",
          label: "پنل تامین‌کننده",
          position: "left"
        },
        {
          to: "/customer-panel",
          label: "پنل مشتری",
          position: "left"
        },
        {
          to: "/admin-panel",
          label: "پنل ادمین",
          position: "left"
        },
        {
          href: "https://laklakbox.ir",
          label: "لک‌لک",
          position: "right"
        }
      ]
    },
    footer: {
      style: "light",
      links: [
        {
          title: "مستندات",
          items: [
            {
              to: "/general",
              label: "عمومی"
            },
            {
              to: "/supplier-panel",
              label: "پنل تامین‌کننده"
            },
            {
              to: "/customer-panel",
              label: "پنل مشتری"
            },
            {
              to: "/admin-panel",
              label: "پنل ادمین"
            }
          ]
        },

        {
          title: "متفرقه",
          items: [
            {
              label: "سایت اصلی",
              href: "https://laklakbox.ir"
            },
            {
              label: "سایت تامین‌کننده",
              href: "https://supplier.laklakbox.ir"
            },
            {
              label: "GitHub",
              href: "https://github.com/sad-laklak"
            }
          ]
        },
        {
          title: "لینک‌های مفید",
          items: [
            {
              label: "متابیس",
              href: "https://metabase.laklakbox.ir"
            },
            {
              label: "کافکا",
              href: "https://kafka.laklakbox.ir"
            },
            {
              label: "ادمین",
              href: "https://api.laklakbox.ir/admin"
            }

          ]
        }
      ],
      copyright: "تمامی حقوق مادی و معنوی این وب‌سایت متعلق به لک‌لک می‌باشد."
    },
    tableOfContents: {
      maxHeadingLevel: 5
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["diff", "ini"],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" }
        },
        {
          className: "custom-code-block-warning-line",
          line: "warning-next-line"
        },
        {
          className: "custom-code-block-error-line",
          line: "error-next-line"
        },
        {
          className: "custom-code-block-diff-remove-line",
          line: "diff-remove-next-line",
          block: { start: "diff-remove-start", end: "diff-remove-end" }
        },
        {
          className: "custom-code-block-diff-add-line",
          line: "diff-add-next-line",
          block: { start: "diff-add-start", end: "diff-add-end" }
        },
        {
          className: "custom-code-block-strike-line",
          line: "strike-next-line"
        },
        {
          className: "custom-code-block-prettier-ignore",
          line: "prettier-ignore"
        }
      ]
    }
  } satisfies Preset.ThemeConfig
};

export default config;
