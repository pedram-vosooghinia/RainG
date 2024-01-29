import ProductCard from "@/components/Main/ProductCard";
import HomeLayout from "@/components/Main/HomeLayout";

export default async function Home() {
  // const products = await getProduct();
  return (
    <main>
      <HomeLayout title="Home Page">
        {/* <div className="mt-28 md:mt-40	 relative pb-12 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          {products?.data.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div> */}
      </HomeLayout>
    </main>
  );
}
