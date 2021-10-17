import fetch from 'node-fetch';
async function ShopifyData(query) {
  const URL = `https://bewhole.myshopify.com/api/2021-10/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": "6c215cd727f66117e8fa8d8c7df5e3cf",
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error("Products not fetched")
  }
}
export async function getAllProducts() {
  const query = 
  `{
    products(first: 250) {
      edges {
        node {
          title
          handle
          id
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const slugs = response.data.products.edges ? response.data.products.edges : []
  console.log(slugs[0].node.priceRange)
  return slugs
}

getAllProducts()
