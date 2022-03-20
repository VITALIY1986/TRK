import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORI_QUERY = gql`query {
	productCategoryArkanaHome:  productCategory(id: "dGVybToyOTY2") {
    children(first: 27)  {
      nodes {
        id
        name
        slug
        children(first: 27) {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
  productChantarelleHome:    productCategory(id: "dGVybTozMTUy") {
    children(first: 20)  {
      nodes {
        id
        name
        slug
        children(first: 20) {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
  productNorelHome:  productCategory(id: "dGVybTozMDQw") {
    children(first: 35)  {
      nodes {
        id
        name
        slug
        children(first: 35) {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
  productMCCM:  productCategory(id: "dGVybTozMjE4") {
    children(first: 20)  {
      nodes {
        id
        name
        slug
        children(first: 20)  {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
  productDermaoxy:  productCategory(id: "dGVybTozMjEy") {
    children(first: 20)  {
      nodes {
        id
        name
        slug
        children(first: 20)  {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
	  heroCarousel: productCategories(where: {slug: "offers"}) {
		nodes {
		  id
		  children {
			nodes {
			  id
			  name
			  slug
			  databaseId
			  description
			  image {
				id
				sourceUrl
				srcSet
			  }
			}
		  }
		}
	  }
}`;

export default GET_CATEGORI_QUERY;
