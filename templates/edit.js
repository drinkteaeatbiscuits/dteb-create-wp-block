import React from "react";
import { InspectorControls, useBlockProps, RichText, useSetting } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, PanelRow } from "@wordpress/components";

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { text, blockColor } = attributes;

	return (
		<section { ...useBlockProps() } style={{ backgroundColor: blockColor }}>
			<InspectorControls key="setting">

				<PanelBody title="Block Colors" initialOpen={true}>
					<PanelRow>
						<fieldset>
							<legend className="blocks-base-control__label">
								Color
							</legend>
							<ColorPalette
							value={blockColor}
							onChange={(hexColor) => { setAttributes({ blockColor: hexColor }); } } colors={[...useSetting( 'color.palette' )]} />
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<RichText className="" tagName="p" value={ text } placeholder={'Block text...'} onChange={(value) => setAttributes({text: value})}/>

		</section>
	);
}
