// https://stackoverflow.com/questions/66665969/expo-app-environments-for-dev-uat-and-production
import Constants from 'expo-constants';

const ENV = {
  dev: {
    FirebaseConfig: {
      apiKey: "AIzaSyBS-fsmmAQYQ4DahRevdcrrk_s3DLZ6BnU",
      authDomain: "appelizabethteixeira-dev.firebaseapp.com",
      projectId: "appelizabethteixeira-dev",
      storageBucket: "appelizabethteixeira-dev.appspot.com",
      messagingSenderId: "593790690937",
      appId: "1:593790690937:web:c35e130470d04d2e6a96a8"
    },
  },
  prod: {
    FirebaseConfig: {
      apiKey: "AIzaSyBM9ccyBi5vmyxTc0YLfwuBYJ8X5zEIC24",
      authDomain: "appelizabethteixeira-prod.firebaseapp.com",
      projectId: "appelizabethteixeira-prod",
      storageBucket: "appelizabethteixeira-prod.appspot.com",
      messagingSenderId: "962830975893",
      appId: "1:962830975893:web:be3027fdb79d3c2e202c9c"
    },
  },
};

// const getEnvVars = (env = Constants.manifest.releaseChannel) => {
const getEnvVars = (env = Constants.expoConfig.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__ || env === 'dev') {
    console.log('Dev environment');
    return ENV.dev;
  }
  console.log('Prod environment');
  return ENV.prod;
};

export default getEnvVars;
