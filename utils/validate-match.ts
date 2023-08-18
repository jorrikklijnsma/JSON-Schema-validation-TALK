import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';

const ajv = new Ajv();

// Load the main schema
const schemaPath = path.join(__dirname, '..', 'Fiona', 'is-match.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

// Load the referenced schema
const singleDateReferencePath = path.join(__dirname, '..', 'Fiona', 'single-date.json');
const singleDateReference = JSON.parse(fs.readFileSync(singleDateReferencePath, 'utf-8'));

// Load the referenced schema
const relationshipReferencePath = path.join(__dirname, '..', 'Fiona', 'keep-it-going.json');
const relationshipReference = JSON.parse(fs.readFileSync(relationshipReferencePath, 'utf-8'));

// Add the referenced schema to Ajv with an ID
ajv.addSchema(singleDateReference, 'single-date.json');
ajv.addSchema(relationshipReference, 'keep-it-going.json');

// Now, when you compile the main schema, Ajv will understand where to find the referenced schema
const validate = ajv.compile(schema);

// Check for the custom flag
const isNoMatchFlag = process.argv.includes('--is-no-match');
const dataFileName = isNoMatchFlag ? 'life-no-match.json' : 'life.json';

// Load the data to be validated
const dataPath = path.join(__dirname, '..', 'Benny', dataFileName);
const dataToValidate = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const validateMatch = () => {
  // Validate the data against the schema
  console.log('Is Benny a match so far?', validate(dataToValidate));

  if (validate.errors) {
    console.log('Validation errors:', validate.errors);
  }
};

export default validateMatch();
