## 🗺️ ReactiveMaps Starter App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Step-by-step guide available at [ReactiveMaps Quickstart Doc](https://opensource.appbase.io/reactive-manual/getting-started/reactivemaps.html).

### Develop

```
yarn && yarn start
```

should open something like this

![](https://i.imgur.com/LR4qyZU.png)


### Configure

The ReactiveMaps and ReactiveSearch components code resides in `src/App.js` file. For building this app, we use:

1. [appbase.io](https://appbase.io) for the backend, any Elasticsearch cluster/index should work.  
2. A simple flex based layout system, you can use Materialize's or Bootstrap's grid, or roll your own layout - the ReactiveSearch components are layout agnostic.  
3. The following components:
 - **ReactiveBase** - Provider component that connects the UI with the backend app.
 - **SingleList** - Creates a single selection based list UI component that is connected to a database field.
 - **SelectedFilters** - Creates a selectable filter UI view displaying the current selected values from other components.
 - **ReactiveMap** - Creates a data-driven map UI component. It is the key component for build map based experiences.
