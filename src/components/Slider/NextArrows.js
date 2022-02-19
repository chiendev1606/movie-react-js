import React from 'react';
import { RightOutlined } from '@ant-design/icons';

function NextArrows(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, zIndex: '300', right: '20px', color: 'white' }}
			onClick={onClick}>
			<RightOutlined />
		</div>
	);
}

export default NextArrows;
