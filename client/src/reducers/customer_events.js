import {
  READ_CUSTOMER_EVENTS,
  CLEAR_CUSTOMER_EVENTS,
} from "../types/customer_events";

const initialState = {
  customer_events: [],
  error: {},
  loading: false,
  readable: false,
};

export default function customerEvents(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case READ_CUSTOMER_EVENTS:
      return {
        ...state,
        customer_events: [...payload.customer_events],
        readable: true,
      };

    case CLEAR_CUSTOMER_EVENTS:
      return {
        ...state,
        customer_events: [],
        error: {},
        loading: false,
        readable: false,
      };

    default:
      return state;
  }
}
