"use strict"

const findCacheDir = require("find-cache-dir")
const packageName = require("pname")

module.exports = findCacheDir({ name: packageName, create: true })
