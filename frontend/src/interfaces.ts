export type SelectableOptions = {
    type: string;
    value: string;
}

export interface IVariant {
    id: string;
    image: string;
    isDiscontinued: boolean;
    priceCents: number;
    quantity: number;
    selectableOptions: SelectableOptions[]
}

export interface IProduct {
    id: string,
    name: string;
    description: string;
    defaultImage: string;
    isDiscontinued: boolean;
    variants: IVariant[]
}