/*
 * Copyright (c) 2019 Founda - All Rights Reserved.
 *
 * Unauthorized copying of this file via any medium IS STRICTLY PROHIBITED.
 * Proprietary and confidential.
 *
 * The above copyright notice shall be included in all copies or
 * substantial portions of the Software.
 */

/*
 * Module dependencies
 */

const path = require('path');

/*
 * Module
 */

const configuration = {
  root: true,
  extends: [require.resolve('./eslint.js')]
};

/*
 * Module exports
 */

module.exports = configuration;
