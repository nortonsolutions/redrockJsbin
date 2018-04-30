# Deployment for the JSBin website

## To Deploy MySql Database

1. Create a MySql database named jsbin
2. Run the full-db-v3.mysql sql script from the /build directory

## To Deploy Website

1. Get the node_modules from the jsbin-node_modules repository and extract to a node_modules directory off the project root
2. Make a copy of the config.default.json and name it config.node.json
3. Change any setting such as "host": "localhost:3000" to "host": "myUrl:80" (to have a port that is not part of the host name add a port: option under the url: options)
4. In the root directory run 'grunt build'
5. In the root directory run 'grunt run'

## Running behind an IIS proxy server

1. The /bin directory is a secure reserved directory for IIS, this security must be changed on the proxy site under the hiddenSegments section by removing the segment="bin":

    `<configuration>
        <system.webServer>
            <security>
                <requestFiltering>
                    <hiddenSegments>				
                        <clear />
                        <add segment="web.config" />
                        <add segment="App_code" />
                        <add segment="App_GlobalResources" />
                        <add segment="App_LocalResources" />
                        <add segment="App_WebReferences" />
                        <add segment="App_Data" />
                        <add segment="App_Browsers" />
                    </hiddenSegments>
                </requestFiltering>
            </security>
        </system.webServer>
    </configuration>`