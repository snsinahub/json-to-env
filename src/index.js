const _ = require('lodash')
const github = require('@actions/github');
const core = require('@actions/core');
const add_env = require('./libs/add_env_variables.js')
const json_utils = require('./libs/json_utils.js')

const filePath = process.env[`GITHUB_ENV`]

async function run() {
    const jsonPath = core.getInput('json_path')
    const envObj = new add_env.addToEnv(filePath)
    const jsonUtils = new json_utils.json_utils()

    let jsonObj = jsonUtils.read_json_file(jsonPath)

    console.log(jsonObj)

    _.forEach(jsonObj, function( key, value) {
        console.log(key)
        console.log(value)
        console.log(typeof key, typeof value)
        if (typeof key == 'object') {
            _.forEach(key, function( sub_key, sub_value) {
                console.log(sub_key)
                console.log(sub_value)
                console.log(typeof sub_key, typeof sub_value)
                envObj.add_env_variable(sub_key, sub_value)
            })
        } else {
            envObj.add_env_variable(key, value)
        }
    })
    
    envObj.add_env_variable('FULL_NAME', 'JOHN DOE')
    envObj.add_env_variable('STATE', 'Virginia')
    envObj.add_env_variable('CITY', 'Washington')    

    core.setOutput("envs", 'snsinas')

}

run();