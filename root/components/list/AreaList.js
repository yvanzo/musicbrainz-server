/*
 * @flow
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import Table from '../Table';
import {withCatalystContext} from '../../context';
import {
  defineCheckboxColumn,
  defineNameColumn,
  defineTypeColumn,
} from '../../utility/tableColumns';

type Props = {
  +$c: CatalystContextT,
  +checkboxes?: string,
  +getArea?: (R) => AreaT,
  +order?: string,
  +rows: $ReadOnlyArray<R>,
  +sortable?: boolean,
};

const AreaList = ({
  $c,
  checkboxes,
  getArea = (row => row),
  order,
  rows,
  sortable,
}: Props) => {
  const columns = React.useMemo(
    () => {
      const checkboxColumn = $c.user_exists && checkboxes
        ? defineCheckboxColumn(checkboxes)
        : null;
      const nameColumn =
        defineNameColumn<AreaT>(l('Area'), order, sortable);
      const typeColumn = defineTypeColumn<R>(
        row => getArea(row),
        'area_type',
        order,
        sortable,
      );

      return [
        ...(checkboxColumn ? [checkboxColumn] : []),
        nameColumn,
        typeColumn,
      ];
    },
    [$c.user_exists, checkboxes, order, sortable],
  );

  return <Table columns={columns} data={rows} />;
};

export default withCatalystContext(AreaList);
