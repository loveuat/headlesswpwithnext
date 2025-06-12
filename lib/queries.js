export const GET_PRIMARY_MENU = `
  query GetPrimaryMenu {
    menu(id: "primary_menu", idType: NAME) {
      menuItems(where: { parentId: 0 }) {
        nodes {
          id
          label
          url
          childItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
    }
  }
`;
export const GET_THEME_OPTIONS = `
  query GetThemeOptions {
    acfOptionsThemeOptions {
      themeOptions {
        siteFooterText
        phoneNumber
        logo {
          sourceUrl
          altText
        }
      }
    }
  }
`;
