const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com']
  },
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  },
  app: {
    home: {
      "1": {
        component: "TripleImageBanner",
        children: {
          "1": {
            name: "CollectionStripeBannerOne",
            collection: "Be Whole"
          },
          "2": {
            name: "CollectionStripeBannerOne",
            collection: "Keep Energy"
          },
          "3": {
            name: "CollectionStripeBannerOne",
            collection: "Time"
          }
        }
      },
      "2": {
        component: "HalfScreenAdBanners",
        children: {
          "1": {
            name: "HalfScreenAdCard",
            collection: "Mens"
          },
          "2": {
            name: "HalfScreenAdCard",
            collection: "Womens"
          }
        }
      },
      "3": {
        component: "MiniCatalog",
        childrenMapped: true,
        collections: {
          "1": "Featured",
          "2": "New-Arrivals",
          "3": "Best-Sellers"
        },
        child: "ItemCardOne"
      },
      "4": {
        component: "ParallaxStatement"
      },
      "5": {
        component: "HalfScreenAdBanners",
        children: {
          "1": {
            name: "HalfScreenAdCard",
            collection: "Jackets"
          },
          "2": {
            name: "HalfScreenAdCard",
            collection: "Pants"
          }
        }
      },
      "6": {
        component: "ParallaxSale"
      },
      "7": {
        component: "MiniCatalogTwo",
        childrenMapped: true,
        collection: "New Trends",
        child: "ItemCardTwo"
      },
      "8": {
        component: "NewsletterBanner",
        backgroundImage: ""
      }
    }
  }
}
