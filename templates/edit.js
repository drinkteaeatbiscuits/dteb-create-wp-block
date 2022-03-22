import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	return (
		<section { ...useBlockProps() }>
			<p>This is a block - COMPONENT_NAME</p>
		</section>
	);
}
