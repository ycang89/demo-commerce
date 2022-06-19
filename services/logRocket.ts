import * as LR from 'logrocket';

const LogRocket = () => {
  let instance: any = null;
  function initialize() {
    return LR.init('ig2w8f/demo-ecommerce'); // can move to .env.local
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = initialize();
      }
      return instance;
    },
  };
};

export default LogRocket();
