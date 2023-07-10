import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import greetingReducer from 'greetingSlice'

const rootReducer = combineReducers({
  greeting: greetingReducer
})

export function setupStore(preloadedState){
  return configureStore({
    reducer : rootReducer,
    preloadedState
  })
}