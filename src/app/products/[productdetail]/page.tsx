export default async function ProductDetil({
  params,
}: {
  params: { productdetail: string };
}) {
  const fetchdetail = await fetch(
    `https://fakestoreapi.com/products/${params.productdetail}`,
    { cache: "no-store" }
  );
  let response = await fetchdetail.json();

  return (
    <div className="bg-purple-500 p-5 flex justify-center">
      <div className="bg-purple-400 w-5/6 sm:2/4 rounded-lg p-5 flex flex-col items-center">
        <h1 className="py-4 font-bold">Product Details</h1>
        <div>
          <img
            src={response.image}
            alt="image"
            className="w-3/4 sm:w-2/12 rounded-xl"
          />
          <div className="py-5 space-y-2">
            <h1>
              <span className="font-bold">Title: </span>
              {response.title}
            </h1>
            <h1>
              {" "}
              <span className="font-bold">Id:</span> {response.id}
            </h1>
            <h1>
              <span className="font-bold">Category: </span> {response.category}
            </h1>
            <h1>
              <span className="font-bold">Rating: </span> {response.rating.rate}
              ,<span className="font-bold">Count:</span> {response.rating.count}
            </h1>
            <p>
              <span className="font-bold">Description: </span>{" "}
              {response.description}
            </p>
            <p>
              <span className="font-bold">Price: </span> ${response.price}
            </p>
          </div>
        </div>
        <div>
          <button className="bg-purple-700 rounded-lg p-3 font-bold hover:bg-purple-500 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
