import shop from '$lib/content/shop.json';

export interface Product {
	id: string;
	name: string;
	maker: string;
	price: number;
	image: string;
	imageLarge: string;
	description: string;
	details: string[];
}

// Product data is editable in the CMS via src/lib/content/shop.json
export const products: Product[] = shop.products;

export function getProductById(id: string) {
	return products.find((p) => p.id === id);
}
