/**
 * Copyright 2019 SME Virtual Network Contributors. All Rights Reserved.
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 *
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * This file was copied originally from the Microsoft Edge Status project:
 *
 * https://github.com/MicrosoftEdge/Status
 *
 * This file has been modified by the SME Virtual Network Contributors to test
 * the open source project schema and list for SME Virtual Network projects.
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
