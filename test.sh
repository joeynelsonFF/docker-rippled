#!/bin/sh

# run this once you have your node running in docker (./go/up)

####################################################################
###																 ###
### rippled api documentation: https://xrpl.org/rippled-api.html ###
###																 ###
####################################################################
###																 ###
### the following api calls use rippled's JSON-RPC endpoints 	 ###
###																 ###
####################################################################

# admin call
curl --data '{
    "method": "wallet_propose",
    "params": [
        {
            "passphrase": "snoPBrXtMeMyMHUVTgbuqAfg1SUTb"
        }
    ]
}' \
-H "Content-Type: application/json" -X POST http://localhost:5005

# public method call
curl --data '{
    "method": "server_info",
    "params": [
        {}
    ]
}' \
-H "Content-Type: application/json" -X POST http://localhost:5005