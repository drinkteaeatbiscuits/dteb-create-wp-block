import { registerBlockType } from '@wordpress/blocks';
import './COMPONENT_NAME.scss';

import Edit from './COMPONENT_NAME-edit';
import save from './COMPONENT_NAME-save';

registerBlockType( 'drinkteaeatbiscuits/COMPONENT_NAME', {
	edit: Edit,
	save,
});