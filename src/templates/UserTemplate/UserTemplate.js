import React from 'react';
import { Route } from 'react-router';

const UserTemplate = ({ Component, title, ...restProps }) => {
	return (
		<Route
			{...restProps}
			render={propsRoute => {
				//props.location,props.history,props.match

				return (
					<div className="flex items-center justify-center h-screen w-full bg-gray-100">
						<div className="px-8 py-6 -mt-20 text-left bg-white shadow-lg">
							<h3 className="text-2xl font-bold text-center">{title}</h3>
							<Component {...propsRoute} />
						</div>
					</div>
				);
			}}
		/>
	);
};

export default UserTemplate;
