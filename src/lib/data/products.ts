export const products = [
	{
		id: 'pottery-bowl',
		name: 'Handmade Pottery Bowl',
		maker: 'Sarah M.',
		price: 25,
		image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop',
		imageLarge: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop',
		description: 'A beautifully crafted ceramic bowl, perfect for serving or display. Each piece is hand-thrown on the wheel and finished with a food-safe glaze.',
		details: [
			'Handmade ceramic',
			'Food-safe glaze',
			'Approx. 15cm diameter',
			'Dishwasher safe'
		]
	},
	{
		id: 'woven-basket',
		name: 'Woven Basket',
		maker: 'James K.',
		price: 35,
		image: 'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=400&h=300&fit=crop',
		imageLarge: 'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=800&h=600&fit=crop',
		description: 'Traditional woven basket made from sustainable materials. Great for storage, decoration, or as a unique gift.',
		details: [
			'Natural materials',
			'Sustainably sourced',
			'Approx. 25cm x 20cm',
			'Lightweight and sturdy'
		]
	},
	{
		id: 'painted-canvas',
		name: 'Hand-painted Canvas',
		maker: 'Amira T.',
		price: 45,
		image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop',
		imageLarge: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop',
		description: 'Original acrylic painting on stretched canvas. A vibrant abstract piece that brings colour and energy to any space.',
		details: [
			'Acrylic on canvas',
			'30cm x 40cm',
			'Ready to hang',
			'Signed by artist'
		]
	},
	{
		id: 'cutting-board',
		name: 'Wooden Cutting Board',
		maker: 'Daniel R.',
		price: 30,
		image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=300&fit=crop',
		imageLarge: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=800&h=600&fit=crop',
		description: 'Solid hardwood cutting board, handcrafted and finished with food-safe oil. Built to last for years of daily use.',
		details: [
			'Solid hardwood',
			'Food-safe mineral oil finish',
			'30cm x 20cm',
			'Hand-sanded smooth'
		]
	},
	{
		id: 'knitted-scarf',
		name: 'Knitted Scarf',
		maker: 'Priya S.',
		price: 20,
		image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=300&fit=crop',
		imageLarge: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=600&fit=crop',
		description: 'Soft, cosy scarf hand-knitted from premium yarn. Perfect for keeping warm during the colder months.',
		details: [
			'100% acrylic yarn',
			'Machine washable',
			'Approx. 150cm x 25cm',
			'Soft and lightweight'
		]
	},
	{
		id: 'plant-pot',
		name: 'Ceramic Plant Pot',
		maker: 'Marcus L.',
		price: 28,
		image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop',
		imageLarge: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop',
		description: 'Hand-thrown ceramic pot with drainage hole. A stylish home for your favourite houseplant.',
		details: [
			'Handmade ceramic',
			'Drainage hole included',
			'12cm diameter',
			'Matching saucer included'
		]
	}
];

export function getProductById(id: string) {
	return products.find(p => p.id === id);
}
