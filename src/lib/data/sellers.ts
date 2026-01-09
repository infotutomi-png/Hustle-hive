export interface Product {
	id: string;
	name: string;
	price: number;
	image: string;
	imageLarge: string;
	description: string;
	details: string[];
}

export interface Seller {
	id: string;
	name: string;
	shopName: string;
	image: string;
	bio: string;
	specialty: string;
	products: Product[];
}

export const sellers: Seller[] = [
	{
		id: 'kierons-marketplace',
		name: 'Kieron Smith',
		shopName: "Kieron's Marketplace",
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
		bio: 'Passionate woodworker creating beautiful handcrafted furniture and home decor. Every piece tells a story.',
		specialty: 'Woodworking & Furniture',
		products: [
			{
				id: 'oak-serving-board',
				name: 'Oak Serving Board',
				price: 35,
				image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=800&h=600&fit=crop',
				description: 'Beautiful oak serving board, perfect for cheese and charcuterie. Hand-finished with food-safe oil.',
				details: ['Solid oak', 'Food-safe finish', '40cm x 25cm', 'Handcrafted']
			},
			{
				id: 'walnut-coasters',
				name: 'Walnut Coaster Set',
				price: 18,
				image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
				description: 'Set of 4 walnut coasters with cork backing. Elegant and practical.',
				details: ['American walnut', 'Cork backing', 'Set of 4', '10cm diameter']
			}
		]
	},
	{
		id: 'emmas-creations',
		name: 'Emma Johnson',
		shopName: "Emma's Creations",
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
		bio: 'Self-taught potter bringing earthy, organic designs to life. Inspired by nature and everyday moments.',
		specialty: 'Pottery & Ceramics',
		products: [
			{
				id: 'speckled-mug',
				name: 'Speckled Stoneware Mug',
				price: 22,
				image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=600&fit=crop',
				description: 'Hand-thrown stoneware mug with a beautiful speckled glaze. Perfect for your morning coffee.',
				details: ['Stoneware clay', 'Food-safe glaze', '350ml capacity', 'Dishwasher safe']
			},
			{
				id: 'ceramic-vase',
				name: 'Minimalist Ceramic Vase',
				price: 38,
				image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=600&fit=crop',
				description: 'Elegant minimalist vase, perfect for single stems or small bouquets.',
				details: ['Hand-thrown ceramic', 'Matte white finish', '20cm tall', 'Watertight']
			}
		]
	},
	{
		id: 'marcus-art-studio',
		name: 'Marcus Williams',
		shopName: "Marcus Art Studio",
		image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
		bio: 'Abstract artist exploring colour and emotion through acrylic and mixed media paintings.',
		specialty: 'Painting & Art',
		products: [
			{
				id: 'abstract-blue',
				name: 'Ocean Dreams Canvas',
				price: 65,
				image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop',
				description: 'Original abstract painting in shades of blue and teal. Brings calm energy to any space.',
				details: ['Acrylic on canvas', '50cm x 70cm', 'Ready to hang', 'Signed original']
			},
			{
				id: 'sunset-print',
				name: 'Golden Hour Print',
				price: 25,
				image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop',
				description: 'High-quality print of an original painting. Warm sunset tones.',
				details: ['Giclée print', 'A3 size', 'Archival paper', 'Unframed']
			}
		]
	},
	{
		id: 'sarahs-textiles',
		name: 'Sarah Chen',
		shopName: "Sarah's Textiles",
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
		bio: 'Textile artist specialising in hand-dyed fabrics and sustainable fashion accessories.',
		specialty: 'Textiles & Fashion',
		products: [
			{
				id: 'tie-dye-tote',
				name: 'Hand-dyed Tote Bag',
				price: 28,
				image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&h=600&fit=crop',
				description: 'Unique hand-dyed cotton tote bag. Each one is one-of-a-kind.',
				details: ['100% organic cotton', 'Hand-dyed', 'Machine washable', '40cm x 35cm']
			},
			{
				id: 'silk-scarf',
				name: 'Hand-painted Silk Scarf',
				price: 55,
				image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=600&fit=crop',
				description: 'Luxurious silk scarf with hand-painted botanical design.',
				details: ['100% silk', 'Hand-painted', '90cm x 90cm', 'Dry clean only']
			}
		]
	},
	{
		id: 'james-jewellery',
		name: 'James Okonkwo',
		shopName: "James Jewellery",
		image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
		bio: 'Crafting modern jewellery with traditional metalsmithing techniques. Each piece is made to last.',
		specialty: 'Jewellery & Accessories',
		products: [
			{
				id: 'silver-ring',
				name: 'Hammered Silver Ring',
				price: 42,
				image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop',
				description: 'Hand-forged sterling silver ring with hammered texture.',
				details: ['Sterling silver', 'Handmade', 'Multiple sizes', 'Comes in gift box']
			},
			{
				id: 'brass-earrings',
				name: 'Geometric Brass Earrings',
				price: 24,
				image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
				description: 'Modern geometric earrings in brushed brass.',
				details: ['Solid brass', 'Hypoallergenic posts', 'Lightweight', '3cm drop']
			}
		]
	},
	{
		id: 'priya-candles',
		name: 'Priya Patel',
		shopName: "Priya's Candle Co",
		image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
		bio: 'Creating hand-poured soy candles with natural fragrances. Bringing warmth and calm to your home.',
		specialty: 'Candles & Home Fragrance',
		products: [
			{
				id: 'lavender-candle',
				name: 'Lavender Dreams Candle',
				price: 18,
				image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=800&h=600&fit=crop',
				description: 'Relaxing lavender soy candle, perfect for unwinding after a long day.',
				details: ['100% soy wax', 'Natural fragrance', '40+ hour burn', 'Reusable jar']
			},
			{
				id: 'citrus-candle',
				name: 'Citrus Burst Candle',
				price: 18,
				image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=800&h=600&fit=crop',
				description: 'Uplifting citrus blend to energise your space.',
				details: ['100% soy wax', 'Essential oils', '40+ hour burn', 'Cotton wick']
			}
		]
	},
	{
		id: 'daniels-leather',
		name: 'Daniel Murphy',
		shopName: "Daniel's Leather Goods",
		image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
		bio: 'Traditional leatherworker creating timeless wallets, belts, and accessories built to last generations.',
		specialty: 'Leather Goods',
		products: [
			{
				id: 'leather-wallet',
				name: 'Classic Bifold Wallet',
				price: 48,
				image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=600&fit=crop',
				description: 'Hand-stitched leather wallet in rich brown. Ages beautifully over time.',
				details: ['Full grain leather', 'Hand-stitched', '6 card slots', 'Note compartment']
			},
			{
				id: 'leather-keyring',
				name: 'Leather Key Fob',
				price: 15,
				image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=600&fit=crop',
				description: 'Simple leather key fob with brass hardware.',
				details: ['Vegetable-tanned leather', 'Brass ring', 'Can be personalised', '8cm length']
			}
		]
	},
	{
		id: 'amiras-plants',
		name: 'Amira Hassan',
		shopName: "Amira's Plant Shop",
		image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
		bio: 'Plant enthusiast sharing the joy of greenery through propagated plants and handmade planters.',
		specialty: 'Plants & Planters',
		products: [
			{
				id: 'pothos-plant',
				name: 'Golden Pothos in Ceramic Pot',
				price: 22,
				image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop',
				description: 'Easy-care golden pothos in a handmade ceramic pot. Perfect for beginners.',
				details: ['Live plant', 'Handmade pot', '12cm pot size', 'Care guide included']
			},
			{
				id: 'macrame-hanger',
				name: 'Macramé Plant Hanger',
				price: 20,
				image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&h=600&fit=crop',
				description: 'Hand-knotted macramé hanger for your favourite trailing plants.',
				details: ['100% cotton cord', 'Handmade', 'Fits pots up to 15cm', '80cm length']
			}
		]
	},
	{
		id: 'olivias-bakes',
		name: 'Olivia Brown',
		shopName: "Olivia's Bakes",
		image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
		bio: 'Home baker creating delicious treats using traditional recipes and quality ingredients.',
		specialty: 'Baked Goods & Treats',
		products: [
			{
				id: 'cookie-box',
				name: 'Artisan Cookie Box',
				price: 16,
				image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop',
				description: 'Box of 12 assorted artisan cookies. Perfect for gifting or treating yourself.',
				details: ['12 cookies', 'Assorted flavours', 'Fresh baked', 'Gift box included']
			},
			{
				id: 'brownie-box',
				name: 'Triple Chocolate Brownies',
				price: 14,
				image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop',
				description: 'Rich, fudgy brownies loaded with three types of chocolate.',
				details: ['6 brownies', 'Triple chocolate', 'Gluten-free option', '3-day shelf life']
			}
		]
	},
	{
		id: 'leos-prints',
		name: 'Leo Thompson',
		shopName: "Leo's Print Studio",
		image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face',
		bio: 'Graphic designer and printmaker creating bold, colourful prints and stationery.',
		specialty: 'Prints & Stationery',
		products: [
			{
				id: 'botanical-print',
				name: 'Botanical Art Print',
				price: 20,
				image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=800&h=600&fit=crop',
				description: 'Minimalist botanical illustration on premium paper.',
				details: ['A4 size', 'Recycled paper', 'Unframed', 'Signed']
			},
			{
				id: 'notebook-set',
				name: 'Illustrated Notebook Set',
				price: 12,
				image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop',
				imageLarge: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&h=600&fit=crop',
				description: 'Set of 3 pocket notebooks with original cover designs.',
				details: ['Set of 3', 'A6 size', '48 pages each', 'Recycled paper']
			}
		]
	}
];

export function getSellerById(id: string): Seller | undefined {
	return sellers.find(s => s.id === id);
}

export function getAllSellers(): Seller[] {
	return sellers;
}
