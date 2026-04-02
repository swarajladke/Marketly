export const categories = [
  { id: 1, name: "Themes", icon: "FiLayout", productCount: 12450 },
  { id: 2, name: "Plugins", icon: "FiCode", productCount: 8320 },
  { id: 3, name: "Templates", icon: "FiLayers", productCount: 6540 },
  { id: 4, name: "UI Kits", icon: "FiSmartphone", productCount: 3210 },
  { id: 5, name: "Fonts", icon: "FiType", productCount: 2150 },
  { id: 6, name: "Graphics", icon: "FiImage", productCount: 15430 },
  { id: 7, name: "Illustrations", icon: "FiPenTool", productCount: 4320 },
  { id: 8, name: "Dashboard", icon: "FiMonitor", productCount: 1250 },
];

export const sellers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Creator Studio ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?u=seller${i}`,
  rating: (Math.random() * (5 - 4) + 4).toFixed(1),
  totalSales: Math.floor(Math.random() * 5000) + 100,
  totalProducts: Math.floor(Math.random() * 50) + 5,
  verified: Math.random() > 0.3,
}));

export const products = Array.from({ length: 20 }, (_, i) => {
  const isBestseller = Math.random() > 0.7;
  const isNew = Math.random() > 0.8;
  const isSale = Math.random() > 0.85;

  let badge = null;
  if (isBestseller) badge = "Bestseller";
  else if (isNew) badge = "New";
  else if (isSale) badge = "Sale";

  return {
    id: i + 1,
    title: `Premium Dashboard Template ${i + 1} - React & Tailwind`,
    category: categories[Math.floor(Math.random() * categories.length)].name,
    price: Math.floor(Math.random() * 80) + 10,
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    reviewCount: Math.floor(Math.random() * 500) + 10,
    sales: Math.floor(Math.random() * 2000) + 50,
    seller: sellers[Math.floor(Math.random() * sellers.length)],
    previewImage: `https://picsum.photos/seed/prod${i}/600/400`,
    badge,
    tags: ["React", "Admin", "Tailwind", "Dashboard"],
  };
});

export const reviews = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  user: `User ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?u=user${i}`,
  rating: Math.floor(Math.random() * 2) + 4,
  comment: "This is an amazing product. The code quality is excellent and the design is beautiful. Highly recommended!",
  date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split("T")[0],
}));

export const orders = Array.from({ length: 5 }, (_, i) => ({
  id: `ORD-2026-${1000 + i}`,
  product: products[Math.floor(Math.random() * products.length)].title,
  price: Math.floor(Math.random() * 80) + 10,
  date: new Date(Date.now() - Math.floor(Math.random() * 5000000000)).toISOString().split("T")[0],
  status: ["Completed", "Completed", "Completed", "Pending", "Refunded"][Math.floor(Math.random() * 5)],
  buyer: `Customer ${i + 1}`
}));

export const revenueData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000);
  return {
    date: `${date.getMonth() + 1}/${date.getDate()}`,
    revenue: Math.floor(Math.random() * 1000) + 200,
    sales: Math.floor(Math.random() * 20) + 5,
  };
});
