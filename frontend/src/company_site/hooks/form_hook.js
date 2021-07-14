import {useReducer, useCallback} from 'react';

const INPUT_ACTION = 'INPUT';
const FOCUS_ACTION = 'FOCUS';

// Returns new state based on action
const formReducer = (state, action) => {
  switch (action.type) {
    case `${INPUT_ACTION}`: {
      const newState = {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
          },
        },
      };
      // console.dir(newState);
      return newState;
    }
    case `${FOCUS_ACTION}`: {
      const newState = {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            ...[action.inputId],
            isFocused: action.isFocused,
          },
        },
      };
      // console.dir(newState);
      return newState;
    }
    default: {
      console.log('I should not appear');
    }
  }
};

const useForm = (initialInputs) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
  });

  const inputHandler = useCallback((id, value) => {
    dispatch({
      type: `${INPUT_ACTION}`,
      inputId: id,
      value: value,
    });
  }, []);

  // focus value is true or false
  const focusHandler = useCallback((id, value) => {
    console.log('FOCUS EVENT');
    dispatch({
      type: `${FOCUS_ACTION}`,
      inputId: id,
      value: value,
    });
  }, []);

  return [formState, inputHandler, focusHandler];
};

export default useForm;
