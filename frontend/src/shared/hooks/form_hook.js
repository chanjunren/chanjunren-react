import { useReducer, useCallback } from 'react';
import { validate } from '../../util/form_validators';

const INPUT_ACTION = 'INPUT';
const FOCUS_ACTION = 'FOCUS';

// Returns new state based on action
const formReducer = (state, action) => {
  switch (action.type) {
    case `${INPUT_ACTION}`: {
      const isInputValid = validate(action.value, action.validators);

      const newState = {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            ...state.inputs[action.inputId],
            value: action.value,
            isValid: isInputValid,
          },
        },
      };
      let isFormValid = true;
      for (let input in state.inputs) {
        isFormValid = isFormValid && newState.inputs[input].isValid;
      }
      newState.isFormValid = isFormValid;
      return newState;
    }
    case `${FOCUS_ACTION}`: {
      const newState = {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            ...state.inputs[action.inputId],
            isFocused: action.isFocused,
          },
        },
      };

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
    isFormValid: false,
  });

  const formInputHandler = useCallback((id, value, validators) => {
    dispatch({
      type: `${INPUT_ACTION}`,
      inputId: id,
      value: value,
      validators: validators,
    });
  }, []);

  // focus value is true or false
  const formFocusHandler = useCallback((id, isFocused) => {
    dispatch({
      type: `${FOCUS_ACTION}`,
      inputId: id,
      isFocused: isFocused,
    });
  }, []);

  return [formState, formInputHandler, formFocusHandler];
};

export default useForm;
