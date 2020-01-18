# Contributing to MusicBrainz Server

Thank you for considering contributing to MusicBrainz Server.

Get started with https://musicbrainz.org/doc/Development first,
then continue reading the additional guidelines below.

## Submitting changes

### Commit message

Please follow the generally accepted [seven rules of a great Git
commit message](https://chris.beams.io/posts/git-commit/#seven-rules):

1. Separate subject from body with a blank line
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Use the imperative mood in the subject line
1. Wrap the body at 72 characters
1. Use the body to explain _what_ and _why_ vs. _how_

Additionally, start the subject line with a ticket reference if applicable.

### Pull request

#### Ticket

If your change is large or relevant to users, it should have a ticket, see
[tickets](https://tickets.metabrainz.org/issues/?jql=project%20%3D%20MBS),
create one if necessary.  It will be used to follow the progress of
the change and to generate the release notes that are made available
to users on the blog.

Untracked changes are typos, comments, coding style changes, automated
dependency updates, unnoticeable refactoring, and so on.

#### Title

Describe your change with a short imperative title (like this)

If your change relates to a ticket (see [above](#ticket)), please make sure you
prefix your pull request title with `MBS-XXX: ` in order for our
ticket tracker to link your pull request to that ticket, e.g.

> MBS-XXX: Title

If your change completely resolves a ticket, please
prefix the title with either `Fix ` for a bugfix or `Implement ` for a ticket of
some other type in order for our ticket tracker to transition that ticket, e.g.

> Fix MBS-XXX: Title

> Implement MBS-XXX: Title

To sum up, title should follow of one of the these forms:

* Change small unnoticeable bits
* MBS-XXX: Change things relevant to users
* Fix MBS-XXX: Completely resolve a reported bug
* Implement MBS-XXX: Completely resolve a ticket of some other type
