import { combineReducers } from 'redux'

import home from '../reducers/HomeReducer'
import newPost from '../reducers/NewPostReducer'
import detailsPost from '../reducers/DetailsPostReducer'

const rootReducer = combineReducers({
  home,
  newPost,
  detailsPost
})

export default rootReducer