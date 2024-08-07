export type Tag = {
    id: string;
    className: string;
}

export type GroupRequest = {
    image?: File | undefined;
    members?: Tag[];
    name: string;
}