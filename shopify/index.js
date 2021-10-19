// import fetch from 'node-fetch';
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
    products(first: 50) {
      edges {
        node {
          id
          title
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)
  const slugs = response.data.products.edges ? response.data.products.edges : []
  return slugs
}

export async function getCollection(collection) {
  let query = `
  {
    collectionByHandle(handle: ${collection}) {
        id
        title
        handle
        products(first: 50, sortKey: BEST_SELLING) {
          edges {
              node {
                  id
                  title
                  vendor
                  availableForSale
                  images(first: 1) {
                      edges {
                          node {
                              id
                              transformedSrc
                              width
                              height
                              altText
                          }
                      }
                  }
                  priceRange {
                      minVariantPrice {
                          amount
                          currencyCode
                      }
                      maxVariantPrice {
                          amount
                          currencyCode
                      }
                  }
              }
          }
      }
    }
}
`
  const response = await ShopifyData(query);
  return response;
}
export async function getProduct(handle) {
  let query = `
  {
    productByHandle(handle: ${handle}) {
        id
        title
        description
        variants(first: 5) {
            edges {
                cursor
                node {
                    id
                    title
                    quantityAvailable
                    priceV2 {
                        amount
                        currencyCode
                    }
                }
            }
        }
    }
}
`
const response = await ShopifyData(query);
return response;
}
getCollection()
