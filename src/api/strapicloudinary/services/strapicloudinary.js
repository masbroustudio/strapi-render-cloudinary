'use strict';

/**
 * strapicloudinary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapicloudinary.strapicloudinary');
