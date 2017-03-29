# React and Redux BookList app 📚

## Redux

* Is in charge of managing the entire state
* State is a single JS object
* React component state has no relation with application state

## Reducers

* Application state is formed by reducers
* Reducers all get combined in a combineReducers method inside index.js in reducers folder
* To each key in the state, in combineReducers, we assign one reducer
* Reducers are in charge of changing the application state and they do this using actions
* whenever an action is dispatched, it flows through all of the reducers
* Each reducer has an option of returning a different piece of state than usual based on the action received (Through the switch case part)

## Action Creators
* are simple functions that return an action

Actions
* An action is a plain JS object
* action must always define a type
* they can optionally have additional properties, conventionally called payload
_______________________

## Book List App Cycle

* We tied an action creator to the book buttons
* The action event calls action creator which dispatches an action
* Reducers all check the action out
* some reducers return a piece of state in response which all gets combined in global application state
* The global application state gets injected inside all of our containers
* The containers get re-rendered and cause the view to update


