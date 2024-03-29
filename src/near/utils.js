import getConfig from './config';
import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';

const nearConfig = getConfig(process.env.NODE_ENV || 'development');

export async function initContract() {
  const near = await connect(
    Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig)
  );

  window.walletConnection = new WalletConnection(near);
  window.accountId = window.walletConnection.getAccountId();

  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    viewMethods: ['getAllQuizzes', 'getQuizById', 'getScore', 'getQuizQuestions'],
    changeMethods: ['createQuiz'],
  });
}

export const logout = () => {
  window.walletConnection.signOut();

  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
};

export const login = async () => {
  window.walletConnection.requestSignIn(nearConfig.contractName);
};
