import { combineReducers } from 'redux'

import home from '../containers/Home/reducers/HomeReducer'

const rootReducer = combineReducers({
  home
})

export default rootReducer