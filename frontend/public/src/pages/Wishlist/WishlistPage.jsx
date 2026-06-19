import WishlistCard from "../../components/wishlist/WishlistCard";

function WishlistPage() {

  const wishlist = [
    {
      id: 1,
      title: "MacBook Air M5",
      price: 114999
    },
    {
      id: 2,
      title: "iPhone 17 Pro",
      price: 127999
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Wishlist
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {wishlist.map((item) => (
          <WishlistCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </div>
  );
}

export default WishlistPage;