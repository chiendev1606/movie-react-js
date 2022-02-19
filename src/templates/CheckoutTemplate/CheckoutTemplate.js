import React from 'react';
import { Route } from 'react-router';

const CheckoutTemplate = ({ Component, ...restProps }) => {
	return (
		<Route
			{...restProps}
			render={propsRoute => {
				//props.location,props.history,props.match

				return (
					<>
						<Component {...propsRoute} />
						{/* <Footer /> */}
					</>
				);
			}}
		/>
	);
};

export default CheckoutTemplate;
