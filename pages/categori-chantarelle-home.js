import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import GET_ALL_CATEGORI_QUERY from "../src/queries/get-all-categori";
import HeroCarousel from "../src/components/home/hero-carousel";

export default function Categories ( props ) {

	const {productChantarelleHome,  heroCarousel } = props;
	

	return (
		<Layout>
            	<HeroCarousel heroCarousel={heroCarousel}/>
			{/*Categories*/}
			<div className="categories product-categories-container container mx-auto my-32  xl:px-0">
				<h2 className="text-2xl mb-5 uppercase">СHANTARELLE HOME</h2>
				<ParentCategoriesBlock productChantarelleHome={ productChantarelleHome }/>
		
			</div>
		</Layout>
	)
};

export async function getStaticProps() {

	const {data} = await client.query({
		query: GET_ALL_CATEGORI_QUERY,
	});

	return {
		props: {
			productChantarelleHome: data?.productChantarelleHome?.children?.nodes || [],
            heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
           
		},
		revalidate: 1
	}

};