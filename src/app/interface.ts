export interface IProducts {
    quantity: number
    id: number,
    title: string,
    iphone: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[];
}

export interface Idetails {
    products: IProducts[],
    total: number,
    skip: number,
    limit: number
}
