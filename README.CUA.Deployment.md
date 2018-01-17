# Deployment for the JSBin website

## To Deploy MySql Database

1. Create a MySql database named jsbin
2. Run the full-db-v3.mysql sql script from the /build directory

## To Deploy Website

1. Get the node_modules from the jsbin-node_modules repository and extract to a node_modules directory off the project root
2. Make a copy of the config.default.json and name it config.node.json
3. Change any setting such as "host": "localhost:3000" to "host": "myUrl:80"
4. In the root directory run 'grunt build'
5. In the root directory run 'grunt run'