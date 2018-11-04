# Angular Contentful Page Tree

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.  

It provides a way to handle page tree structures with Contentful and Angular.  

## Why this

Some time ago I wanted to create a website based on Angular and Contentful. There are many possible ways to create a solid site structure (e.g. hard-coded Routing) with its content (e.g. hard-coded Entry IDs from Contentful). So I asked myself, if this is the way I want to handle website content typically? Nope... not really. So there it is.

## Requirements

- Angular (v7)
- Contentful Account (_doesn't matter if free or paid_)
- Contentful CLI

## Prerequisites

If you want to get a first impression of the functionality, you need to import the default Content Models of mine. Those are needed to create the actual website and minor pages. Contentfuls [Content Models Documentation](https://www.contentful.com/developers/docs/concepts/data-model/) provide more information about the concept.

### Create & configure Contentful account  

You have to [create a Contentful account](https://www.contentful.com/sign-up/) to use this app

### Create a space  

_tbd_

### Create a managment token

Copy and rename the file `./prerequisites/contentful/config.example.json` to `./prerequisites/contentful/config.json`.

To create a Management Token for the previous created space, you have to navigate to `Settings > API keys > Content management tokens > Personal Access Tokens`  

Create a new token with pressing on the `Generate personal token` button.  
  
Copy & paste the created management token into the `config.json` file and replace the value of the key `managementToken`.

```json
{
  "spaceId": "space id",
  "managementToken": "space management token"
}
```

### Importing Content Models

    yarn run cf-space-import \
      --content-model-only \
      --config ./prerequisites/contentful/config.json \
      --content-file ./prerequisites/contentful/entities.json

### Create your custom Page Tree

_tbd_

## Development server

Run `ng serve` or `yarn run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Exporting Your Contentful Config

If you have extended your the Content Models in your own way and want to provide it with your fork for others, you can run the following command:

    yarn run cf-space-export \
      --skip-content --skip-roles --skip-webhooks \
      --config ./prerequisites/contentful/config.json \
      --export-dir ./prerequisites/contentful/ \
      --content-file entities.json

Remove the `--skip-content` parameter if you want to provide your content anyway.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
