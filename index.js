"use strict"

const path = require("path")
const tempDir = require("temp-dir")
const packageName = require("pname")
const fs = require("fs-extra")

const p = path.join(tempDir, packageName)
fs.ensureDirSync(p)

module.exports = p
