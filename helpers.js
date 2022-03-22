import chalk from 'chalk';

// Emit a message confirming the creation of the component
const colors = {
	red: [216, 16, 16],
	green: [142, 215, 0],
	blue: [0, 186, 255],
	gold: [255, 204, 0],
	mediumGray: [128, 128, 128],
	darkGray: [90, 90, 90],
  };
  
  export const logIntro = ({ name, dir }) => {
	console.info('\n');
	console.info(
	  `✨  Creating the ${chalk.bold.rgb(...colors.gold)(name)} component ✨`
	);
	console.info('\n');
  
	const pathString = chalk.bold.rgb(...colors.blue)(dir);
	
	console.info(`Directory:  ${pathString}`);
	console.info(
	  chalk.rgb(...colors.darkGray)('=========================================')
	);
  
	console.info('\n');
  };
  
  export const logItemCompletion = (successText) => {
	const checkmark = chalk.rgb(...colors.green)('✓');
	console.info(`${checkmark} ${successText}`);
  };
  
  export const logConclusion = () => {
	console.info('\n');
	console.info(chalk.bold.rgb(...colors.green)('Block created! 🚀 '));
	console.info('\n');
  };
  
   export const logError = (error) => {
	console.info('\n');
	console.info(chalk.bold.rgb(...colors.red)('Error creating block.'));
	console.info(chalk.rgb(...colors.red)(error));
	console.info('\n');
  };