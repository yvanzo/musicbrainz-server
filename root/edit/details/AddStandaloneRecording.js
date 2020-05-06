/*
 * @flow
 * Copyright (C) 2020 Anirudh Jain
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import EntityLink from '../../static/scripts/common/components/EntityLink';
import ExpandedArtistCredit from
  '../../static/scripts/common/components/ExpandedArtistCredit';
import formatTrackLength from
  '../../static/scripts/common/utility/formatTrackLength';
import yesNo from '../../static/scripts/common/utility/yesNo';

type AddStandaloneRecordingProps = {
  +display_data: {
    +artist_credit: ArtistCreditT,
    +comment: string | null,
    +length: number | null,
    +name: string,
    +recording: RecordingT,
    +video: boolean,
  },
};

const AddStandaloneRecording = (
  {edit}: {+edit: AddStandaloneRecordingProps},
): React.MixedElement => {
  const display = edit.display_data;
  return (
    <>
      <table className="details">
        <tbody>
          <tr>
            <th>{addColonText(l('Recording'))}</th>
            <td><EntityLink allowNew entity={display.recording} /></td>
          </tr>
        </tbody>
      </table>
      <table className="details add-standalone-recording">
        <tbody>
          <tr>
            <th>{addColonText(l('Name'))}</th>
            <td>
              <EntityLink
                allowNew
                content={display.name}
                entity={display.recording}
                showDisambiguation={false}
              />
            </td>
          </tr>
          <tr>
            <th>{addColonText(l('Artist'))}</th>
            <td>
              <ExpandedArtistCredit artistCredit={display.artist_credit} />
            </td>
          </tr>
          {display.comment ? (
            <tr>
              <th>{addColonText(l('Disambiguation'))}</th>
              <td>{display.comment}</td>
            </tr>
          ) : null}
          {display.length ? (
            <tr>
              <th>{addColonText(l('Length'))}</th>
              <td>{formatTrackLength(display.length)}</td>
            </tr>
          ) : null}
          <tr>
            <th>{addColonText(l('Video'))}</th>
            <td>{yesNo(display.video)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AddStandaloneRecording;
