1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .concat and object.assign() are 3 used

the last one is what is used to create new objects.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are passed in as  new argument through the reducer. reducers never update object directly rather they always will return a new object. store holds the state of the app similar to a DOM.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is about the staet of the tree within the store but the component state is when you are rendering or changing the state.

4.  What is middleware?

Middleware is used for talking to the API, routing, logging info and much more


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A thunk returns another function that uses getState and dispatch.


6.  Which `react-redux` method links up our `components` with our `redux store`?

Links components to the redux store.