/**
 * Internal dependencies
 */
 import { useQuery, gql, ApolloError } from "@apollo/client";
 import {useState} from  'react'
 import { useAuth } from '../login-function/hooks';
 
 import Product from "../../components/ProductHomePage";
 
 export const Profile = ({ children }) => {
	
	 const { viewer, loadingViewer, logout } = useAuth();


	

	
	 return (
		 <div className="profile">
			 <hgroup>
				 <h2>Account</h2>
				 <div>
			
					 <p>
						 Edit your account details below, or{ ' ' }
						 <button onClick={ logout } className="link-button">
							 sign out here
						 </button>
					
					 </p>
				
				 </div>
				
			 </hgroup>
			
		 </div>
	 );
 };
 
 export default Profile;
