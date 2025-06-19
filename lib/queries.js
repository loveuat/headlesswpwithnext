export const GET_PRIMARY_MENU = `
query GetPrimaryMenu {
  menuItems(where: {location: PRIMARY}){
    nodes {
      key: id
      parentId
      title: label
      url
    }
  }
  }
`;
export const GET_THEME_OPTIONS = `
query GetThemeOptions {
  themeOptions {
    siteSettings {
        primaryLogo {
        node {
          altText
          mediaItemUrl
          sourceUrl
          srcSet
        }
      }
    }
  }
}
`;
export const GET_HOME_BANNER= `
query GetHomeBanner {
  page(id: "6", idType: DATABASE_ID) {
    homePage {
      fieldGroupName
      homeBanner {
        fieldGroupName
        homeBannerContent
        homeBannerHeading
        homeBannerImageLight{
          node {
            altText
            mediaItemUrl
            sourceUrl
            srcSet
          }
        }
        homeBannerImageDark{
          node {
            altText
            mediaItemUrl
            sourceUrl
            srcSet
          }
        }
      }
        services {
        ourServices {
          fieldGroupName
          serviceDescription
          serviceTitle
          serviceIcon
          
        }
      }
    }
  }
}
`;