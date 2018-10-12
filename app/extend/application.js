'use strict';
const {
  Nuxt,
  Builder
} = require('nuxt');
const NUXT = Symbol('Application#nuxt');
const {
  loadNuxtConfig
} = require('../../lib/utils');
module.exports = {
  get nuxt() {
    if (!this[NUXT]) {
      this[NUXT] = new Nuxt(loadNuxtConfig(this.config));
    }
    return this[NUXT];
  },
};