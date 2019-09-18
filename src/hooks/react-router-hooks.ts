/**
 * All hooks are related to issue 6430 of the react router repository:
 * https://github.com/ReactTraining/react-router/issues/6430
 */
import { useContext } from 'react';
import { __RouterContext as RouterContext } from 'react-router';

/**
 * Custom hook that returns the react router object.
 * Uses the react context hook with the react router
 * context as an argument.
 *
 * @return {Object} router - router object
 */
export const useRouter = () => {
  return useContext(RouterContext);
};

/**
 * Custom hook that just returns the
 * react router params.
 *
 * @return {Object} params - param object
 */
export const useParams = () => {
  const { match } = useRouter();
  return match.params;
};

/**
 * Custom hook that returns the router location object
 * and a custom function that uses push or replace
 * to change the route.
 *
 * @return an object containing location and navigate.
 */
export const useLocation = () => {
  const { location, history } = useRouter();

  /**
   * Custom function that uses the react router history to
   * either push the new route on the history stack
   * or replace the current route.
   *
   * @param {string} to - the new location
   * @param {boolean} [replace] - should replace be used
   *
   */
  const navigate = (to: string, replace = false) => {
    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  };

  return {
    location,
    navigate,
  };
};
