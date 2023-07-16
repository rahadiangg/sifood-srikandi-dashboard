import getData from "@/service/fetchData";


async function generateStar(star: number) {

  const starFilled = Math.trunc(star)
  const starBlank = 5 - starFilled

  let lStarFilled = [];
  for (let i = 0; i < starFilled; i++) {
    lStarFilled.push(<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>);
  }

  let lStarBlank = [];
  for (let i = 0; i < starBlank; i++) {
    lStarBlank.push(<svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>);
  }


  return (
    <div className="flex items-center">
      {lStarFilled}
      {lStarBlank}
    </div>
  )
}

export default async function Review() {
  let reviews = null
  const reviewUri = process.env.REVIEW_URI ? process.env.REVIEW_URI : "please-define-review-uri"

  try {
    reviews = await getData(reviewUri);
  } catch (error: any) {
    return (
      <>
        <p><strong>Sorry,</strong>Gak bisa dapetin data. Ada error:</p>
        <p className="text-red-700">{error.message}</p>
      </>
    )
  }

  const isStar = reviews.data.some((s: any) => s.hasOwnProperty("star"))


  const listreviews = reviews.data.map((p: any, i: number) => {
    return (
      <tr className="border-b dark:border-neutral-500" key={p.id}>
        <td className="whitespace-nowrap  px-6 py-4 font-medium">{i}</td>
        <td className="whitespace-nowrap  px-6 py-4">{p.customer_name}</td>
        <td className="whitespace-nowrap  px-6 py-4">{p.review}</td>
        {p.star ? (

          <td className="whitespace-nowrap  px-6 py-4">{generateStar(p.star)}</td>
        ) : ""
        }
      </tr>
    )
  })

  return (

    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <p>Source from review version <strong>{reviews.version}</strong></p>
            <br />
            <table className="min-w-full text-center text-sm font-light">
              <thead
                className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">#</th>
                  <th scope="col" className=" px-6 py-4">Customer Name</th>
                  <th scope="col" className=" px-6 py-4">Review</th>
                  {isStar ? (
                    <th scope="col" className=" px-6 py-4">Star</th>
                  ) : ""
                  }
                </tr>
              </thead>
              <tbody>
                {listreviews}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}
