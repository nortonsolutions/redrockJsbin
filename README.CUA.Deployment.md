To deploy:

1. Get the node_modules from the jsbin-node_modules repository and extract to a node_modules directory off the project root
2. Make a copy of the config.default.json and name it config.node.json
3. Change any setting such as "host": "localhost:3000" to "host": "myUrl:80"
4. In the root directory run 'grunt build'
5. In the root directory run 'grunt run'