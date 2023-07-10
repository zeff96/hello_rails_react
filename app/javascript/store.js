import { combineReducers, configureStore  } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  greeting: greetingReducer
})

export function setupStore(preloadedState){
  return configureStore({
    reducer : rootReducer,
    preloadedState
  })
}