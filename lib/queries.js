export const GET_PRIMARY_MENU = `
  query GetPrimaryMenu {
    menu(id: "primary", idType: NAME) {
      menuItems {
        nodes {
          id
          label
          url
        }
      }
    }
  }
`;
