import Image from "next/image";
import HomeLayout from "@/components/Main/HomeLayout";


export async function getProductBySlug(slug) {
  const url = `http://localhost:3000/api/product/${slug}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
async function ProductPage({ params }) {
  const { slug } = params;
  const productObject =await getProductBySlug(slug);
  const product = productObject?.data;
  const items = [
    { title: "description", content: "ویژگی ها" },
    { title: "barcode", content: "کد محصول" },
    { title: "category", content: "دسته بندی" },
    { title: "coloring", content: "تعداد رنگ" },
    { title: "numberInPack", content: "تعداد در جین" },
    { title: "season", content: "فصل" },
    { title: "size", content: "ابعاد" },
  ];
 
  return (
    <>
      <HomeLayout>
        <div className="flex  md:mt-40 mt-20 flex-col justify-center md:flex-row-reverse ">
          <div className="max-w-xs object-cover m-8 ">
            <Image
              src={product?.image}
              alt={product?.productName}
              className="rounded-xl"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-around overflow-hidden content-between shadow-lg  rtl ">
            <div className="px-6  ">
              <div className="font-bold text-xl mb-2">
                {product?.productName}
              </div>
              {items.map((item) => (
                <div
                  className="flex justify-between text-gray-700 font-bold py-2 items-center"
                  key={item.title}
                >
                  <div className="rtl px-2 ">{item.content}</div>
                  <div>{product?.[item.title]}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="flex justify-between rounded-md bg-pedram-1 text-sm text-gray-100 px-4 py-4 m-4">
                <h3>{product?.price}</h3>
                <h3 className="rtl px-2">تومان</h3>
              </div>
                
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default ProductPage;
