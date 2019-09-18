import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// -- TODO --
// To make the ListItem component more generic it is possible
// to specify explicitly some default properties.
interface Props {
  item: Record<string, string | number | boolean>;
}

/**
 * A simple ui component which renders the content
 * of a given item. Uses material ui card components as
 * wrapper for the styling.
 *
 * @param {Object} item - an item object with userId, title and body
 * @returns a simple list item using material ui card components
 */
const ListItem: FC<Props> = ({ item }) => {
  // i18n translations
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {t('client:listItem.user')}{' '}
          {item.userId ? item.userId : t('client:listItem.anonymous')}
        </Typography>
        <Typography variant="h5" component="h3">
          {item.title ? item.title : ''}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.body ? item.body : ''}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListItem;
