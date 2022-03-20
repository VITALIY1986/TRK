import { gql } from "@apollo/client";

export const PRODUCT_BY_SLUG_QUERY = gql` query Product($slug: ID!) {
	product(id: $slug, idType: SLUG) {
	  id
	  productId: databaseId
	  averageRating
	  slug
	  description
	  sku
	  galleryImages {
          nodes {
            id
            title
            altText
            mediaItemUrl
          }
      }
	  image {
		id
		uri
		title
		srcSet
		sourceUrl
	  }
	  name
	  ... on SimpleProduct {
		price(format: RAW)
		id
		regularPrice(format: RAW)
		salePrice(format: RAW)
		featured 
	  }
	  ... on VariableProduct {
		price(format: RAW)
		id
		regularPrice(format: RAW)
		salePrice(format: RAW)
		featured 
	  }
	  ... on ExternalProduct {
		price(format: RAW)
		id
		regularPrice(format: RAW)
		salePrice(format: RAW)
		externalUrl
		featured 
	  }
	  ... on GroupProduct {
		products {
		  nodes {
			... on SimpleProduct {
			  id
			  price(format: RAW)
			  regularPrice(format: RAW)
			  salePrice(format: RAW)
			  featured 
			}
		  }
		}
		id
	  }
	}
  }
`;

export const PRODUCT_SLUGS = gql` query Products {
  products(first: 5000) {
    nodes {
      id
      slug
    }
  }
}
`;
export const POST_BY_SLUG_QUERY = gql` query Post($slug: ID!) {
	post(id: $slug) {
        id
        title
        slug 
		content
		featuredImage {
			node {
			  sourceUrl
			}
		  }
  }
  
}
`;

export const POSTS_SLUGS = gql` query Posts {
	posts(first: 10) {
		nodes {
		  id
		  slug
		  
		}
	  }
}
`;  
