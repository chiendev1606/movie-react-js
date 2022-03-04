import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Header from './Layout/Header/Header';

const HomeTemplate = ({ Component, ...restProps }) => {
	return (
		<Route
			{...restProps}
			render={propsRoute => {
				//props.location,props.history,props.match

				return (
					<div className="w-full h-screen">
						<Header {...propsRoute} />

						<Component {...propsRoute} />

						{/* <Footer /> */}
					</div>
				);
			}}
		/>
	);
};

export default HomeTemplate;
