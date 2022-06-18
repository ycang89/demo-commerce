import { orderApi } from "@/services/redux/apis/order";
import storeModel from "./store";
import _get from "lodash/get";
import eventEmitter, { EVENTS } from "@/services/eventEmitter";
import _isEmpty from "lodash/isEmpty";
import { useState } from "react";
const Index = () => {
  const [checkout] = orderApi.useCheckoutMutation();
  const [isLoadingMakePayment, setIsLoadingMakePayment] =
    useState<boolean>(false);
  const { country } = storeModel();
  const emitter = eventEmitter.getInstance();

  const makePayment = async (amount: string) => {
    setIsLoadingMakePayment(true);
    checkout({ store_id: country.storeId, amount })
      .unwrap()
      .then((res) => {
        if (_get(res, "success", false)) {
          const checkoutUrl = _get(res, "data.checkout_url");
          if (checkoutUrl) {
            emitter.emit(
              EVENTS.TOAST_SUCCESS,
              "Redirecting to payment gateway in 3 seconds..."
            );
            setTimeout(() => {
              document.location.href = checkoutUrl;
              setIsLoadingMakePayment(false);
            }, 3000);
          }
        }
      })
      .catch((res) => {
        setIsLoadingMakePayment(false);
        const errors = _get(res, "data.errors", {});
        if (!_isEmpty(errors)) {
          let errorMessages = "";
          for (let key in errors) {
            errorMessages += `"${key}" - ${errors[key]}. `;
          }
          if (errorMessages) {
            emitter.emit(EVENTS.TOAST_ERROR, errorMessages);
          }
        }
      });
  };

  return {
    isLoadingMakePayment,
    makePayment,
  };
};

export default Index;
