import { combineReducers } from 'redux'

import home from '../reducers/HomeReducer'
import newPost from '../reducers/NewPostReducer'

const rootReducer = combineReducers({
  home,
  newPost
})

export default rootReducer