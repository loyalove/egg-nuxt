'use strict';
const {Nuxt, Builder} = require('nuxt');
const NUXT = Symbol('Application#nuxt');
const NUXTBUILDER = Symbol('Application#nuxtBuilder');
const {loadNuxtConfig} = require('../../lib/utils');

module.exports = {
  get nuxt() {
    if (!this[NUXT]) {
      this[NUXT] = new Nuxt(loadNuxtConfig(this.config))
    }
    return this[NUXT];
  },
  get nuxtBuilder() {
    if (!this[NUXTBUILDER]) {
      this[NUXTBUILDER] = new Builder(this.nuxt);
    }
    return this[NUXTBUILDER];
  }
};