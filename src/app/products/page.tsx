import Image from "next/image";
import Link from "next/link";
async function Products() {
  const fetchproduct = await fetch("https://fakestoreapi.com/products");
  const response = await fetchproduct.json();

  return (
    <div className="bg-purple-500 flex justify-center p-5">
      <div className="bg-purple-400 w-5/6 sm:h-2/4 p-5 rounded-lg flex flex-col items-center">
        <h1 className="font-bold py-4">Products Page</h1>
        <div>
          {response.map((item: any, index: number) => {
            return (
              <div key={index} className=" sm:px-40 font-bold">
                <br />
                <Link href={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt="image"
                    className="w-3/4 sm:w-2/12 rounded-xl py-2"
                  />
                  {item.title}
                </Link>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Products;
