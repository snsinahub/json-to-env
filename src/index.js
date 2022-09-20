const _ = require('lodash')
const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const os = require('os');
const filePath = process.env[`GITHUB_ENV`]

function add_env_variable(name, val) {
    fs.appendFileSync(filePath, `${name}=${val}${os.EOL}`, {
        encoding: 'utf8'
    })
}

async function run() {
    const jsonPath = core.getInput('json_path')
    
    add_env_variable(FULL_NAME, 'JOHN DOE')
    add_env_variable(STATE, 'Virginia')
    add_env_variable(CITY, 'Arlington')
    // fs.appendFileSync(filePath, `FULL_NAME=JOHN DOE${os.EOL}`, {
    //     encoding: 'utf8'
    // })

    core.setOutput("envs", 'snsinas')

}

run();