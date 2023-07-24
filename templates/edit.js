import React from "react";
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {} from "@wordpress/components";

import './COMPONENT_NAME-editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { } = attributes;

	return (
		<section { ...useBlockProps() }>
			<InspectorControls key="setting">
  
  			</InspectorControls>
			
		</section>
	);
}
