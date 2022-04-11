import React from "react";
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	
	const { text, blockColor } = attributes;

	return (
		<section { ...useBlockProps.save() } style={{ backgroundColor: blockColor }}>

			 <RichText.Content className="" tagName="p" value={ text } />

		 </section>
	 );
 }
 