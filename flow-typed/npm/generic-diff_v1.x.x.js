/*
 * @flow strict
 * Copyright (C) 2022 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

declare module 'generic-diff' {
  declare type GenericEditDiff<+T> = {
    +added: boolean,
    +items: $ReadOnlyArray<T>,
    +removed: boolean,
  };

  declare function diff<T>(
      a: $ReadOnlyArray<T>,
      b: $ReadOnlyArray<T>,
      eql?: ((T, T) => boolean)
  ): Array<GenericEditDiff<T>>;

  declare module.exports: typeof diff;
}
