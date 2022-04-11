#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { program } from 'commander';


import {
	logIntro,
	logItemCompletion,
	logConclusion,
	logError,
  } from './helpers.js';

  import {
	requireOptional,
	mkDirPromise,
	readFilePromiseRelative,
	writeFilePromise,
  } from './utils.js';

program
  .arguments('<componentName>')
  .parse(process.argv);

const [componentName] = program.args;

// Find the path to the selected template file.
const indexTemplatePath = `./templates/index.js`;
const editTemplatePath = `./templates/edit.js`;
const saveTemplatePath = `./templates/save.js`;
const blockTemplatePath = `./templates/block.json`;

// Get all of our file paths worked out, for the user's project.
const componentDir = `src/${componentName}`;

const indexPath = `${componentDir}/index.js`;
const editPath = `${componentDir}/${componentName}-edit.tsx`;
const savePath = `${componentDir}/${componentName}-save.tsx`;
const blockPath = `${componentDir}/block.json`;


logIntro({ name: componentName, dir: componentDir });

// Check if componentName is provided
if (!componentName) {
	logError(
	  `Sorry, you need to specify a name for your component like this: new-component <name>`
	);
	process.exit(0);
  }

// Check to see if a directory at the given path exists
const fullPathToParentDir = path.resolve('src');
if (!fs.existsSync(fullPathToParentDir)) {
  logError(
    `Sorry, you need to create a parent "components" directory.\n(new-component is looking for a directory at ${program.dir}).`
  );
  process.exit(0);
}

// Check to see if this component has already been created
const fullPathToComponentDir = path.resolve(componentDir);
if (fs.existsSync(fullPathToComponentDir)) {
  logError(
    `Looks like this component already exists! There's already a component at ${componentDir}.\nPlease delete this directory and try again.`
  );
  process.exit(0);
}


// Start by creating the directory that our component lives in.
mkDirPromise(componentDir)
  .then(() => readFilePromiseRelative(indexTemplatePath))
  .then((template) => {
    logItemCompletion('Directory created.');
    return template;
  })
  .then((template) =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then((template) =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(indexPath, prettier.format(template, {parser: 'babel'}))
  )
  .then((template) => {
    logItemCompletion('index.js file built and saved.');
    return template;
  })
  .then(() => readFilePromiseRelative(editTemplatePath))
  .then((template) =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then((template) =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(editPath, prettier.format(template, {parser: 'babel'}))
  )
  .then((template) => {
    logItemCompletion('edit.js built and saved to disk.');
    return template;
  })
  .then(() => readFilePromiseRelative(saveTemplatePath))
  .then((template) =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then((template) =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(savePath, prettier.format(template, {parser: 'babel'}))
  )
  .then((template) => {
    logItemCompletion('save.js built and saved to disk.');
    return template;
  })
  .then(() => readFilePromiseRelative(blockTemplatePath))
  .then((template) =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then((template) =>
    writeFilePromise(blockPath, template)
  )
  .then((template) => {
    logItemCompletion('block.json built and saved to disk.');
    return template;
  })


  .then(() =>
    writeFilePromise(`${componentDir}/style.scss`, `@import '${componentName}.scss';` )
  )
  .then((template) => {
    logItemCompletion('style.scss built and saved to disk.');
    return template;
  })

  .then(() =>
    writeFilePromise(`${componentDir}/editor.scss`, `@import '${componentName}-editor.scss';` )
  )
  .then((template) => {
    logItemCompletion('editor.scss built and saved to disk.');
    return template;
  })

  .then(() =>
    writeFilePromise(`${componentDir}/${componentName}.scss`, `.wp-block-drinkteaeatbiscuits-${componentName} {
		position: relative;
	}` )
  )
  .then((template) => {
    logItemCompletion(`${componentName}.scss built and saved to disk.`);
    return template;
  })

  .then(() =>
    writeFilePromise(`${componentDir}/${componentName}-editor.scss`, `.wp-block-drinkteaeatbiscuits-${componentName} {
      position: relative;
	}` )
  )
  .then((template) => {
    logItemCompletion(`${componentName}-editor.scss built and saved to disk.`);
    return template;
  })


//   .then((template) =>
//     // We also need the `index.js` file, which allows easy importing.
//     writeFilePromise(indexPath, prettier.format(indexTemplate))
//   )
//   .then((template) => {
//     logItemCompletion('Index file built and saved to disk.');
//     return template;
//   })
  .then((template) => {
    logConclusion();
  })
  .catch((err) => {
    console.error(err);
  });