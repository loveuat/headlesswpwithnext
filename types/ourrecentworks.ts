type nodeImageData = { 
    altText: string;
    mediaItemUrl: string;
    fileSize:number;
}
type ImageNodeData = {
    node:nodeImageData;
}

type TermData ={
    name:string;
}
type TermsNodeData = {
    nodes:TermData[];
}
export type OurRecentWorkType = {
    title: string;
    featuredImage: ImageNodeData;
    excerpt: string;
     terms: {
    nodes: TermsNodeData[];
  };
}