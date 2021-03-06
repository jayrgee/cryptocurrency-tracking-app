import ActionTypes from '../constants/ActionTypes';
import { changeCurrentPortfolio } from './appActions';

/**
 * Changes the selected portfolio
 * @arg {string] name - The name of the portfolio
 */
export function selectPortfolio(name) {
  return {
    type: ActionTypes.SELECT_PORTFOLIO,
    payload: name,
  };
}

/**
 * Get list of portfolios
 */
export function getPortfoliosList() {
  return {
    type: ActionTypes.GET_PORTFOLIOS,
  };
}

/**
 * Add a portfolio
 * @arg {string] name - The name of the portfolio
 */
export function addPortfolio(name) {
  return {
    type: ActionTypes.ADD_PORTFOLIO,
    payload: name,
  };
}

/**
 * Edit portfolio
 * @arg {Object] portfolio
 * @arg {string] portfolio.name - The name of the portfolio
 * @arg {Object] portfolio.data
 * @arg {string] portfolio.data.name - The new name of the portfolio
 * @arg {Array] portfolio.data.name - The new symbols
 */
export function editPortfolio(portfolio) {
  return {
    type: ActionTypes.EDIT_PORTFOLIO,
    payload: portfolio,
  };
}

/**
 * Delete portfolio and update trading data
 * @arg {string] name - The name of the portfolio
 */
export function deletePortfolio(name) {
  return (dispatch, getStore) => {
    dispatch({
      type: ActionTypes.DELETE_PORTFOLIO,
      payload: name,
    });
    const { selected } = getStore().portfolios;
    dispatch(changeCurrentPortfolio(selected));
  };
}
