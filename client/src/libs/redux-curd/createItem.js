import axios from "axios";

export const createItemAsync = (data) => {
  return async (dispatch) => {
    let config = {
      headers: data.headers,
    };

    const onSuccess = (success) => {
      dispatch({ type: data.successType, payload: success.data });

      !data.noReload && dispatch(data.finishedReload());
      return success;
    };
    const onError = (error) => {
      dispatch({ type: data.errorType });
      !data.noReload && dispatch(data.finishedReload());
      return error;
    };
    try {
      !data.noReload && dispatch(data.startReload());
      const success = await axios.post(data.url, data.formData, config);
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
};
