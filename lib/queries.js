import { gql } from "@apollo/client";
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
        darkLogo {
        node {
          altText
          mediaItemUrl
          sourceUrl
          srcSet
        }
      }
        footerSettings {
        companyContactNumber
        companyEmailId
        companyOverview
        companyWebsiteLink
        companyWhatsappNumber
        compayAddress {
          address1
          addressCity
          addressState
        }
        socialLinks {
          platformLink
          platformName
        }
      }
    }
  }
}
`;
// export const GET_HOME_BANNER= `
// query GetHomeBanner {
//   page(id: "6", idType: DATABASE_ID) {
//     homePage {
//       fieldGroupName
//       homeBanner {
//         fieldGroupName
//         homeBannerContent
//         homeBannerHeading
//         homeBannerImageLight{
//           node {
//             altText
//             mediaItemUrl
//             sourceUrl
//             srcSet
//           }
//         }
//         homeBannerImageDark{
//           node {
//             altText
//             mediaItemUrl
//             sourceUrl
//             srcSet
//           }
//         }
//       }
//         services {
//         ourServices {
//           fieldGroupName
//           serviceDescription
//           serviceTitle
//           serviceIcon
          
//         }
//       }
//          whyChooseUs {
//         whySectionTitle
//         whySectionDescription
//         listOfQuality {
//           titleOfQuality
//         }
//       }
//     }
//   }
// }
// `;
export const GET_PAGE_WITH_BANNER = gql`
query GetPageBySlug($slug: ID!) {
page(id: $slug, idType: URI) {
   title
    slug
    banners {
      banner {
        bannerContent
        bannerHeading
        bannerImage {
          node {
            mediaItemUrl
            fileSize
            altText
          }
        }
        bannerImageDark{
        node {
            mediaItemUrl
            fileSize
            altText
          }
        }
        bannerSubHeading
        bannerLink {
      url
      title
      target
    }
      }
    }
      iconBoxes {
      icoxBox {
      iconWrapperDescription
      iconWrapperHeading
        iconBoxDetails {
          boxContent
          boxIcon
          boxLink {
            target
            title
            url
          }
          boxSubTitle
          boxTitle
        }
      }
    }
contentWithImageRight {
      contentBoxWithImageRight {
        contentBoxDescriotion
        contentBoxHeading
        contentBoxLists {
          contentBoxListItem
        }
        contentBoxSubheading
        contentBoxImage {
          node {
            altText
            fileSize
            mediaItemUrl
          }
        }
        contentBoxImageDark {
          node {
            altText
            fileSize
            mediaItemUrl
          }
        }
      }
    } 
    }
  }
`;
export const GET_ALL_TESTIMONIALS = gql`
query GetAllTestimonials {
  allTestimonials {
    nodes {
      slug
      title
      status
      modified
      modifiedGmt
      id
      excerpt
      date
      dateGmt
      uri
      testimonialsWrapper {
        testimonialData {
          testimonialClientCompany
          testimonialClientName
          testimonialStarCount
        }
      }
    }
  }
}
`;
export const GET_ALL_TECHSTACKS = gql`
query GetAllTechStacks {
  allTechStacks {
    nodes {
      slug
      title
      status
      modified
      modifiedGmt
      id
      date
      dateGmt
      uri
      techStacksFields {
        techStacksGroup {
          teckStackIcon
        }
      }
    }
  }
}
`;
export const GET_ALL_PORTFOLIO_CATS = gql`
query GetAllPortfolioCats {
  categoriesPortfolio {
    nodes {
      name
      link
      id
      slug
      databaseId
    }
  }
}
`;
export const GET_ALL_PORTFOLIOS = gql`
query GetAllPortfolios {
 allOurWorks {
    nodes {
      date
      databaseId
      excerpt
      featuredImage {
        node {
          altText
          mediaItemUrl
          fileSize
        }
      }
      featuredImageId
      featuredImageDatabaseId
      terms {
        nodes {
          databaseId
          name
          slug
          link
          termTaxonomyId
          taxonomyName
          uri
          description
        }
      }
      status
      slug
      id
      title
    }
  }
}
`;
export const GET_ALL_SERVICES = gql`
query GetAllServices($first: Int = 6, $after: String) {
  ourServices(first: $first, after: $after)  {
  pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      title
      slug
      status
      excerpt
      date
      databaseId
      id
      servicesFieldGorup {
        sevicesField {
          serviceIcon
        }
      }
    }
  }
}
`;