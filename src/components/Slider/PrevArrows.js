import React from 'react';

function PrevArrows(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, zIndex: '100', left: 0 }} onClick={onClick} />;
}

export default PrevArrows;
