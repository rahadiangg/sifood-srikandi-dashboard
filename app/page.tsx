import getData from "@/service/fetchData";

export default async function Product() {
  let products = null
  const productUri = process.env.PRODUCT_URI ? process.env.PRODUCT_URI : "please-define-product-uri"

  try {
    products = await getData(productUri);
  } catch (error: any) {
    return (
      <>
        <p><strong>Sorry,</strong>Gak bisa dapetin data. Ada error:</p>
        <p className="text-red-700">{error.message}</p>
      </>
    )
  }
  
  const listProducts = products.data.map((p: any, i: number) => {
    return (
      <tr className="border-b dark:border-neutral-500" key={p.id}>
        <td className="whitespace-nowrap  px-6 py-4 font-medium">{i}</td>
        <td className="whitespace-nowrap  px-6 py-4">{p.name}</td>
        <td className="whitespace-nowrap  px-6 py-4">{p.price}</td>
      </tr>
    )
  })

  return (
    
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <p>Source from product version <strong>{products.version}</strong></p>
            <br />
            <table className="min-w-full text-center text-sm font-light">
              <thead
                className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">#</th>
                  <th scope="col" className=" px-6 py-4">Name</th>
                  <th scope="col" className=" px-6 py-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {listProducts}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
