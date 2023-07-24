import { combineReducers } from 'redux';

import { 
  SET_SURVEY,   
  SET_SECTION, 
  SET_QUESTIONS, 
  SET_TEMPORAL_SECTION, 
  SET_TEMPORAL_QUESTIONS,
  SET_ANSWER,
  ADD_ANSWER,
  SET_STATESECTION,
  SET_STATESECTION2,
} from './actions';

const answerReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return action.payload;
    case ADD_ANSWER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

const statesectionReducer = (
  state = { 
    "section_2": false, 
    "section_3": false, 
    "section_4": false 
  }, action) => {
    switch (action.type) {
      case SET_STATESECTION:
        return action.payload;
      default:
        return state;
    }
}

const statesection2Reducer = (
  state = { 
    "question_1": false, 
    "question_2": false, 
    "question_3": false, 
    "question_4": false,
    "question_5": false,
    "question_6": false,
    "question_7": false,
    "question_8": false,
    "question_9": false,
    "question_10": false,
    "question_11": false,
  }, action) => {
    switch (action.type) {
      case SET_STATESECTION2:
        return action.payload;
      default:
        return state;
    }
}

const surveyReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SURVEY:
      return action.payload;
    default:
      return state;
  }
};

const sectionReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SECTION:
      return action.payload;
    default:
      return state;
  }
};

const questionsReducer = (state = null, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
};

const temporal_sectionReducer = (state=[] , action) => {
  switch (action.type) {
    case SET_TEMPORAL_SECTION:
      return action.payload;
    default:
      return state;
  }
}

const tempotal_questionsReducer = (state=[] , action) => {
  switch (action.type) {
    case SET_TEMPORAL_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  answer: answerReducer,
  statesection: statesectionReducer,
  statesection2: statesection2Reducer,
  survey: surveyReducer,
  section: sectionReducer,
  questions: questionsReducer,
  temporal_section: temporal_sectionReducer,
  temporal_questions: tempotal_questionsReducer,
});
