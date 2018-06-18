package MusicBrainz::Server::Report::RecordingsWithManyISRCs;
use Moose;

with 'MusicBrainz::Server::Report::RecordingReport',
     'MusicBrainz::Server::Report::FilterForEditor::RecordingID';

sub table { 'recordings_with_many_isrcs' }

sub query {
    "
        SELECT r.id AS recording_id, r.name, isrccount, i.isrc,
          row_number() OVER (ORDER BY r.id)
        FROM recording r
          JOIN isrc i ON (r.id = i.recording)
          JOIN (
           SELECT recording, count(*) AS isrccount
            FROM isrc
            GROUP BY recording HAVING count(*) > 1
          ) t ON t.recording = r.id
    ";
}

__PACKAGE__->meta->make_immutable;
no Moose;
1;

=head1 COPYRIGHT AND LICENSE

Copyright (C) 2018 MetaBrainz Foundation

This file is part of MusicBrainz, the open internet music database,
and is licensed under the GPL version 2, or (at your option) any
later version: http://www.gnu.org/licenses/gpl-2.0.txt

=cut
