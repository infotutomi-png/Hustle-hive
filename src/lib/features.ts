// Feature switches for sections that are built but not live yet.

// The Makers to Market sellers pages (/programmes/makers-to-market/sellers/...) currently
// contain placeholder people and products. While this is false, those URLs redirect to
// /programmes/makers-to-market and nothing links to them. Set to true once
// src/lib/data/sellers.ts holds real makers.
export const SHOW_SELLERS = false;

// The shop (/shop and /shop/[id]) lists placeholder products and has no checkout yet.
// While this is false, those URLs redirect to /programmes/makers-to-market and the pages
// are left out of the sitemap. Set to true once src/lib/content/shop.json holds real products.
export const SHOW_SHOP = false;
