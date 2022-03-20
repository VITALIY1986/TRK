import Layout from "../src/components/Layout";
import ProductHome from "../src/components/ProductHomePage";
import Post from "../src/components/Post";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import ParentProductBlock from "../src/components/products/PerentProducts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Accordion from "../src/components/Accordion";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
import { ApolloProvider } from "@apollo/client";
import Login from "../src/components/login";
import SignUp from '../src/components/signup/SignUp'
import { useState } from 'react';
import { useAuth } from '../src/components/login-function/hooks';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Home (props) {

	const { isLoggedIn } = useAuth();

	
	
	const { products,  heroCarousel, posts, postsCategory,featuredproducts} = props || {};

	
	

	return (

			<Layout>
	
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				
	
				
			
			<div className="px-4">
			
				
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Новини</span></h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{ posts.map( (post,index) => <Post key={ post.id } index={index} post={ post } /> )}
					</div>
				</div>
				{/*Proddut*/ }
			
				</div>
			</Layout>
		
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
		questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			postsCategory: data?.category ? data.category : [],
			posts: data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};

