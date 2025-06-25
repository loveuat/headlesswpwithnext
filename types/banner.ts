type AcfLink = {
  url: string;
  title?: string;
  target?: string;
};
export type BannerType = {
  bannerHeading: string;
  bannerSubHeading: string;
  bannerContent: string;
  bannerLink:AcfLink;
  bannerImage: {
    node: {
      mediaItemUrl: string;
      altText: string;
    };
  };
  bannerImageDark: {
    node: {
      mediaItemUrl: string;
      altText: string;
    };
  };
}