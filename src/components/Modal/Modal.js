import { Modal } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchActionChangeModal } from '../../redux/actions/sync/actions';
import { isOpenModalSelector, modalInfoSelector } from '../../redux/selectors/selectors';

const ModalTrailer = () => {
	const isOpen = useSelector(isOpenModalSelector);
	const modalInfo = useSelector(modalInfoSelector);

	const dispatch = useDispatch();

	return ReactDOM.createPortal(
		<div>
			<Modal
				title={modalInfo.tenPhim}
				width={800}
				visible={isOpen}
				onCancel={() => {
					dispatch(dispatchActionChangeModal(false));
				}}
				footer={null}>
				<div className="w-full">
					<ReactPlayer width={750} playing={true} height={500} url={modalInfo.trailer} />
				</div>
			</Modal>
		</div>,
		document.getElementById('modal-root')
	);
};

export default ModalTrailer;
