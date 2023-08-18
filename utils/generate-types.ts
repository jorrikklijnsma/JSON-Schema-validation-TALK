import { compile } from 'json-schema-to-typescript';
import type { JSONSchema4 } from 'json-schema';
import $RefParser from 'json-schema-ref-parser';
import fs from 'fs';
import path from 'path';

// The directory where the resulting is-a-match.d.ts file will be saved
const outputDirectory = path.join(
  __dirname,
  '..', // utils
  'types/is-a-match.d.ts'
);

const schemaPath = path.join(__dirname, '..', 'Fiona/is-match.json');

const generateTypes = async () => {
  try {
    const schema = await $RefParser.default.dereference(schemaPath);

    const ts = await compile(schema as JSONSchema4, 'is_match');
    fs.writeFileSync(outputDirectory, ts);
    console.log('TypeScript definitions generated successfully.');
  } catch (error) {
    console.error('Error generating TypeScript definitions:', error);
  }
};

export default generateTypes();
