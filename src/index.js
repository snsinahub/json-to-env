const _ = require('lodash')
const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const os = require('os');



async function run() {
    const jsonPath = core.getInput('json_path')
    const filePath = process.env[`GITHUB_ENV`]

    fs.appendFileSync(filePath, `FULL_NAME=JOHN DOE${os.EOL}`, {
        encoding: 'utf8'
    })

    core.setOutput("envs", 'snsinas')

}

run();