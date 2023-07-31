import { Link } from "react-router-dom";

const popularProducts = [
  {
    id: "3432",
    name: 'Macbook M1 Pro 14"',
    thumbnail: "https://source.unsplash.com/100x100?macbook",
    price: "$1499.00",
    stock: 341,
  },
  {
    id: "7633",
    name: "Samsung Galaxy Buds 2",
    thumbnail: "https://source.unsplash.com/100x100?earbuds",
    price: "$399.00",
    stock: 24,
  },
  {
    id: "6534",
    name: "Asus Zenbook Pro",
    thumbnail: "https://source.unsplash.com/100x100?laptop",
    price: "$899.00",
    stock: 56,
  },
  {
    id: "9234",
    name: "LG Flex Canvas",
    thumbnail: "https://source.unsplash.com/100x100?smartphone",
    price: "$499.00",
    stock: 98,
  },
  {
    id: "4314",
    name: "Apple Magic Touchpad",
    thumbnail: "https://source.unsplash.com/100x100?touchpad",
    price: "$699.00",
    stock: 0,
  },
  {
    id: "4342",
    name: "Nothing Earbuds One",
    thumbnail: "https://source.unsplash.com/100x100?earphone",
    price: "$399.00",
    stock: 453,
  },
];

const PopularProducts = () => {
  return (
    <>
      <div className="w-[25.2rem] bg-white p-4 rounded border border-gray-200">
        <strong className="text-gray-700 font-medium">Popular Products</strong>
        <div className="flex flex-col mt-4 gap-3">
          {popularProducts.map((product) => (
            <Link
              key={product?.id}
              to={`/product/${product?.id}`}
              className="flex items-center hover:no-underline">
              <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded">
                <img
                  src={product?.thumbnail}
                  alt={product?.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-1 ml-4">
                <p className="text-gray-800 text-sm">{product?.name}</p>
                <span
                  className={`${
                    product?.stock === 0
                      ? "text-red-500"
                      : product?.stock < 50
                      ? "text-orange-500"
                      : "text-green-500"
                  }text-xs font-medium`}>
                  {product?.stock === 0
                    ? "out of stocks"
                    : `${product?.stock} in stocks`}
                </span>
              </div>
              <div className="pb-7 text-red-600 text-sm">{product?.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
