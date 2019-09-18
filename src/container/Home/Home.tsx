import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import qs from 'qs';

import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid/Grid';

import useStyles from 'container/Home/useStyles';
import Footer from 'container/Footer/Footer';
import Navigation from 'container/Navigation/Navigation';
import ListItem from 'components/ui/ListItem/ListItem';
import { useSetQueryString } from 'hooks/qs-hook';

interface State {
  items: Record<string, string | number | boolean>[];
  loading: boolean;
  search: string;
}

/**
 * Home container component.
 * Fetches some sample items and renders a list
 * with the fetched items.
 *
 * @returns Home view with navigation bar
 */
const Home: FC<{}> = () => {
  // CSS classes created by material ui
  const classes = useStyles();
  // State for fetched items
  const [items, setItems] = useState<State['items']>([]);
  // State for the filtered items
  const [filteredItems, setFilteredItems] = useState<State['items']>([]);
  // Loading state
  const [loading, setLoading] = useState<State['loading']>(false);
  // setQueryString hook
  const setQueryString = useSetQueryString();
  // Variable that holds the timout state
  let timer: number | undefined = undefined;
  // Get inital search value from query string if any value is given
  const { search } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  // Fetch the items on mount
  useEffect(() => {
    fetchItems();
  }, []);

  /**
   * Simple helper function that triggers a fetch and
   * sets the loading and response to the state.
   */
  const fetchItems = () => {
    setLoading(true);
    // -- TODO --
    // Replace this part with an api call to your api
    fetch(`${process.env.REACT_APP_BASE_API_URL}/posts`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setItems(json);
        setLoading(false);
      });
  };

  /**
   * The handleChange function triggers a search after a timeout of 500ms.
   * If any items matching the search term, they got set to the
   * component state.
   *
   * @param {ChangeEvent} event - ChangeEvent<HTMLInputElement>
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    window.clearTimeout(timer);
    const searchTerm = event.currentTarget.value;
    // -- TODO --
    // Replace this part with an api call or a better client
    // side search. This is just a basic example that shows how you
    // could search for a specific item.
    if (searchTerm.length > 0) {
      timer = window.setTimeout(() => {
        setQueryString({ search: searchTerm });
        const matchedItems = items.filter(item =>
          item.title ? item.title.toString().includes(searchTerm) : false
        );
        setFilteredItems(matchedItems);
      }, 500);
    } else {
      fetchItems();
      setFilteredItems([]);
      setQueryString({ search: null });
    }
  };

  // Evaluate which items should be shown
  const renderItems = filteredItems.length > 0 ? filteredItems : items;

  return (
    <>
      <Navigation />
      <Grid container className={classes.contentContainer}>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          className={classes.searchContainer}
        >
          <Grid item>
            <i className={`fas fa-search ${classes.icon}`} />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Search"
              onChange={handleChange}
              defaultValue={search}
            />
          </Grid>
        </Grid>

        {!loading &&
          renderItems.map((item, i) => (
            <Grid
              item
              xs={12}
              className={classes.itemGrid}
              key={
                item.id &&
                (typeof item.id === 'number' || typeof item.id === 'string')
                  ? item.id
                  : i
              }
            >
              <ListItem item={item} />
            </Grid>
          ))}
        {loading && (
          <Grid container className={classes.loadingContainer}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
