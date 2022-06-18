import { orderApi } from "@/services/redux/apis/order";
import storeModel from "./store";
import _get from "lodash/get";
const Index = () => {
  const [checkout, { isLoading: isLoadingMakePayment }] =
    orderApi.useCheckoutMutation();
  const { country } = storeModel();

  const makePayment = async (amount: string) => {
    checkout({ store_id: country.storeId, amount })
      .unwrap()
      .then((res) => {
        if (_get(res, "success", false)) {
          const checkoutUrl = _get(res, "data.checkout_url");
          if (checkoutUrl) {
            document.location.href = checkoutUrl;
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
