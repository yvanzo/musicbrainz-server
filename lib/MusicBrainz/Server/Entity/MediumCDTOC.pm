package MusicBrainz::Server::Entity::MediumCDTOC;

use Moose;
use MusicBrainz::Server::Entity::Types;

extends 'MusicBrainz::Server::Entity';
with 'MusicBrainz::Server::Entity::Role::Editable';

has 'cdtoc_id' => (
    is => 'rw',
    isa => 'Int'
);

has 'cdtoc' => (
    is => 'rw',
    isa => 'CDTOC'
);

has 'medium_id' => (
    is => 'rw',
    isa => 'Int'
);

has 'medium' => (
    is => 'rw',
    isa => 'Medium'
);

sub is_perfect_match
{
    my ($self) = @_;

    my @info = @{ $self->cdtoc->track_details };
    my @medium_tracks = @{ $self->medium->cdtoc_tracks };

    return 0 unless $#info == $#medium_tracks;

    for my $i (0..$#info) {
        return 0 unless defined $medium_tracks[$i] && $medium_tracks[$i]->length == $info[$i]->{length_time};
        $i++;
    }

    return 1;
}

__PACKAGE__->meta->make_immutable;
no Moose;
1;

=head1 COPYRIGHT

Copyright (C) 2009 Lukas Lalinsky

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.

=cut
