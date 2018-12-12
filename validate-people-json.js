/**
 * Copyright 2018 SME Virtual Network Contributors. All Rights Reserved.
 * See LICENSE in the repository root for license information.
 *
 * Forked from the Microsoft Edge Status project (https://github.com/MicrosoftEdge/Status)
 * Microsoft Edge Status is available under the Apache License, Version 2.0
 * See https://github.com/MicrosoftEdge/Status/blob/production/LICENSE.md
 * =============================================================================
 */

const ajv = require("ajv");
const validator = new ajv({
  $data: true,
  allErrors: true,
  logger: false,
  schemaId: "id",
  useDefaults: true,
  verbose: true
});

const schema = require("./brief-people.schema.json");
const peopleData = require("./people.json");
const validate = validator.compile(schema);

if (!validate(peopleData)) {
  console.error(validate.errors);
  process.exit(1);
} else {
  process.exit(0);
}
