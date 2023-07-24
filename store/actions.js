export const SET_ANSWER = 'SET_ANSWER';
export const ADD_ANSWER = 'ADD_ANSWER';
export const SET_STATESECTION = 'SET_STATESECTION';
export const SET_SURVEY = 'SET_SURVEY';
export const SET_SECTION = 'SET_SECTION';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_TEMPORAL_SECTION = 'SET_TEMPORAL_SECTION';
export const SET_TEMPORAL_QUESTIONS = 'SET_TEMPORAL_QUESTIONS';
export const SET_STATESECTION2 = 'SET_STATESECTION2';

export const setAnswer = (data) => ({
  type: SET_ANSWER,
  payload: data,
})

export const setStatesection = (data) => ({
  type: SET_STATESECTION,
  payload: data,
})

export const setStatesection2 = (data) => ({
  type: SET_STATESECTION2,
  payload: data,
})

export const addAnswer = (data) => ({
  type: ADD_ANSWER,
  payload: data,
})

export const setSurvey = (data) => ({
  type: SET_SURVEY,
  payload: data,
});

export const setSection = (data) => ({
  type: SET_SECTION,
  payload: data,
});

export const setQuestions = (data) => ({
  type: SET_QUESTIONS,
  payload: data,
});

export const setTemporalSection = (data) => ({
  type: SET_TEMPORAL_SECTION,
  payload: data,
});

export const setTemporalQuestions = (data) => ({
  type: SET_TEMPORAL_QUESTIONS,
  payload: data,
});