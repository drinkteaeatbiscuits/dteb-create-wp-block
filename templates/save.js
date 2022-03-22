import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<section { ...useBlockProps.save() }>
			 <p>This is a block - COMPONENT_NAME</p>
		 </section>
	 );
 }
 