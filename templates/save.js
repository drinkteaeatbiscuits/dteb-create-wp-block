import React from "react";
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	
	const {  } = attributes;

	return (
		<section { ...useBlockProps.save() } >


		 </section>
	 );
 }
 