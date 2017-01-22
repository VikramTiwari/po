Deploy:

```
gcloud alpha functions deploy echo --stage-bucket ivikramtiwari-fn --trigger-http
```

Usage:

```
curl -X GET "https://us-central1-ivikramtiwari.cloudfunctions.net/echo"
```

Sample Response:

```
{  
   "baseUrl":"",
   "body":{  

   },
   "fresh":false,
   "hostname":"us-central1-ivikramtiwari.cloudfunctions.net",
   "ip":"24.87.8.117",
   "ips":[  
      "24.87.8.117"
   ],
   "method":"GET",
   "originalUrl":"",
   "params":{  
      "0":""
   },
   "path":null,
   "protocol":"http",
   "query":{  

   },
   "route":{  
      "path":"/*",
      "stack":[  
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"acl"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"bind"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"checkout"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"connect"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"copy"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"delete"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"get"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"head"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"link"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"lock"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"m-search"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"merge"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"mkactivity"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"mkcalendar"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"mkcol"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"move"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"notify"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"options"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"patch"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"post"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"propfind"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"proppatch"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"purge"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"put"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"rebind"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"report"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"search"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"subscribe"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"trace"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"unbind"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"unlink"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"unlock"
         },
         {  
            "name":"<anonymous>",
            "keys":[  

            ],
            "regexp":{  

            },
            "method":"unsubscribe"
         }
      ],
      "methods":{  
         "acl":true,
         "bind":true,
         "checkout":true,
         "connect":true,
         "copy":true,
         "delete":true,
         "get":true,
         "head":true,
         "link":true,
         "lock":true,
         "m-search":true,
         "merge":true,
         "mkactivity":true,
         "mkcalendar":true,
         "mkcol":true,
         "move":true,
         "notify":true,
         "options":true,
         "patch":true,
         "post":true,
         "propfind":true,
         "proppatch":true,
         "purge":true,
         "put":true,
         "rebind":true,
         "report":true,
         "search":true,
         "subscribe":true,
         "trace":true,
         "unbind":true,
         "unlink":true,
         "unlock":true,
         "unsubscribe":true
      }
   },
   "secure":false,
   "stale":true,
   "subdomains":[  
      "us-central1-ivikramtiwari"
   ],
   "xhr":false
}
```
