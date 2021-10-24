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

export async function getCollectionImages([]) {
  return new Promise(async(resolve, reject) => {
    let query = `{
      collections(first: 3, query:"title:'Energy' OR title:'Time' OR title:'Be Whole'") {
          edges {
              cursor
              node {
                  id
                  handle
                  image {
                    originalSrc
                  }
              }
          }
      }
  }`
    const response = await ShopifyData(query)
    const slugs = response.data.collections.edges ? response.data.collections.edges : []
    resolve(slugs)
  })
  
}

export async function getFeaturedCollection(collection) {
  return new Promise(async (resolve, reject) => {
    let query = `
    {
      collectionByHandle(handle: "${collection}") {
          id
          title
          handle
          image {
            originalSrc
          }
          products(first: 8, sortKey: BEST_SELLING) {
            edges {
                node {
                    id
                    title
                    vendor
                    availableForSale
                    handle
                    variants(first: 25) {
                      edges {
                        node {
                          selectedOptions {
                            name
                            value
                          }
                          image {
                            originalSrc
                            altText
                          }
                          title
                          id
                          priceV2 {
                            amount
                          }
                        }
                      }
                    }
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
    const data = response.data.collectionByHandle ? response.data.collectionByHandle : {}
    resolve(data);
  })
 
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

export async function createCheckout(id, quantity) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`

  const response = await ShopifyData(query)

  const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : []

  return checkout
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map(item => {
    return `{
      variantId: "${item.id}",
      quantity:  ${item.variantQuantity}
    }`
  })

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
      checkout {
        id
        webUrl
        lineItems(first: 25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const checkout = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : []

  return checkout
}


export async function recursiveCatalog(cursor = '', initialRequest = true) {
  let data;

  if (cursor !== '') {
    const query = `{
      products(after: "${cursor}", first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log('Cursor: ', cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
      products(first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    `;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}