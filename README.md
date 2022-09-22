# json-to-env

## Introduction
This action reads environment variables from a JSON file and add them as GitHub Actions environment variables.

### Supported runners
- Linux
- Windows
- MacOS

## Inputs
```YAML
  - uses: snsinahub/json-to-env@v1.0.0
    with: 
      # path to json file 
      # default: ''
      # required: true
      json_path: ''    

```

## Examples


### Use default values

```YAML
- name: checkout
  uses: actions/checkout@v3
- name: add env variables
    uses: snsinahub/json-to-env@main
    with:
        json_path: "./environments/vars.json"
- name: print env variables
    run: |          
        echo "${{ env.name }}"        
```

## Environment file sample
- [env.json](./env.json)

