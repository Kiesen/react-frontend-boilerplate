import qs from 'qs';

import { useRouter } from 'hooks/react-router-hooks';

interface Props {
  [key: string]: string | null;
}
type SetQueryString = () => (props: Props) => void;

/**
 * Custom hook that returns a callback.
 * The callback function takes a one dimensional object as an argument,
 * creates a new query string and pushes the query string to the
 * history stack.
 *
 * Important note: If you want to remove any keys from the query string
 * just provide the key with a null value e.g. { x: null }
 *
 * @return callback with following signature (queryObject) => void
 */
export const useSetQueryString: SetQueryString = () => {
  const { location, history } = useRouter();

  return (props: Props) => {
    const queryString = qs.stringify(
      {
        ...qs.parse(location.search.slice(1)),
        ...qs.parse(qs.stringify(props, { strictNullHandling: true }), {
          strictNullHandling: true,
        }),
      },
      { addQueryPrefix: true, skipNulls: true }
    );
    history.push(`${location.pathname}${queryString}${location.hash}`);
  };
};
