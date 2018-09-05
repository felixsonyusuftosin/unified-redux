# Unified Redux (React) - Beta

### Description

Reduce the verbosity in React redux. An implementation that allows the of use just one functional implementation of action, action creators, and reducers and takes out the complexity introduced by having to manage these disparate  files.

### Documentation (Typescript) 

- Use the Module in a React component, 
   -
   Import the library on the react component as below, 
   
   ```
   import UnifiedStore from 'unfied-store'
   ```
   then initialize a store library. this is an object of your store elements, for those  stores related to each other you can update the values as an array of string. Find an example below, 
   
   ```
   const someStores: IsomeStores = { 
   		someStoreItem: 'someStoreItem',
        someRelatedStoreItem: ['thisStoreItem', 'thatStoreItem']   
   }
   ```
   
  initialize the store and pass in the store item (someStores) to the constructor
  ```
  const unifiedStoreObject = new UnifiedStore(someStores)
  // Get access to the actionCreator, and the redux store object  
  const {dispatchActions, store} = unifiedStoreObject;
  ```
  Implement match state to props as,
  ```
  const matchStateToProps = (state) => ({
     ... list the storeItem and how they are represented     
  });
  ```
   Implement match dispatch to props as,
  ```
  const matchDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
    	dispatchActions 
    }
  ), dispatch};
  ```
  Each item of the store have three states 
  
  - __pending(bool)__: for pending state when data is being fetched, it is true is data is currently being fetched 
  - __payload(any)__: it is null if pending is true , or error is true , it should contain the data of the store item
  - __error(string)__: if the operation encounters an error, the string is presented here.

Using the actioncreator
-

To call the actionCreator without param you can call 
```
const actions = actionWithoutParam
dispatchActions(dictKey, actions)
```
To call an action with param 

```
const actions = () => actionWithParam(param)
dispatchActions(dictKey, actions)
```

- you can pass in functions, promises, or  objects as parameter to to the dispatch actions 
- The mnodule assumes you are using Fetch, or axious asynchronous web request 
 
 
 
   
