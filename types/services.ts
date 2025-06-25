type ServiceIcon = {
    serviceIcon: string;
}

type ServiceFieldGroup= {
    sevicesField: ServiceIcon;
}

export type ServiceType = {
    title: string;
    excerpt:string;
    databaseId: number;
    servicesFieldGorup :ServiceFieldGroup;
}