export type Tag = {
    id: string;
    className: string;
}

export type GroupRequest = {
    image?: any;
    members?: Tag[];
    name: string;
}

export type GroupType = {
    id: string;
    name: string;
    users: string[];
    picture?: any;
}