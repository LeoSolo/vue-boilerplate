'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const gitInfo = require('child_process').execSync('git describe --tag --always').toString().trim()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GIT_INFO: `"${gitInfo}"`,
})
