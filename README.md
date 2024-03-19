https://www.figma.com/file/fSVST3gDhFKgqlAVLvC5tD/diviving-website?type=design&node-id=24%3A3&mode=design&t=4BokVClyGnq9Auik-1


# Interactive survey tool API

This is the back end API for KITMs new survey creation and management tool.

# Features
- Give "Hello world" as response

# Installation and running

### Installing
1. **Clone repository:** `git clone https://github.com/Interactive-survey-tool/api-service`
2. **Navigate into cloned repository:** `cd api-service`
3. **Install dependencies:** `npm install`

### Running
**Start API from its directory:** `npm start`

# Authorization

#### Authentification
Here will be described how to get an authenitfication token and an example of how to make a requests using an authenitfication token (WHEN IMPLEMENTED)
#### Roles
Here will be described what user types are there and how they are different from each other (WHEN IMPLEMENTED)

# OTHER ROUTES (example)

### GET: serverAddress:port/api/helloWorld
**Description:** basic GET request that returns:
```json
{
    "status": "success",
    "results": 1,
    "data": {
        "message": "Hello World!"
    }
}
```

**Authorization required?** None