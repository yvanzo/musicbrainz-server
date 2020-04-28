#!/usr/bin/env bash

set -e -u

SCRIPT_NAME=$(basename "$0")

REMOTE='origin'

HELP=$(cat <<EOH
Usage: $SCRIPT_NAME [<options>]

Options:
  -r, --remote REMOTE   Push tag to this remote instead of '$REMOTE'

  -h, --help            Print this help message

Create and push a Git tag on 'production' branch.
EOH
)

if [[ $# -eq 1 && $1 =~ ^-*h(elp)?$ ]]
then
  echo "$HELP"
  exit
elif [[ $# -eq 2 && $1 =~ ^-r|--remote$ ]]
then
  REMOTE="$2"
elif [[ $# -gt 0 ]]
then
  echo >&2 "$SCRIPT_NAME: too many arguments"
  echo >&2 "$HELP"
  exit 64
fi

if ! (git diff --quiet && git diff --cached --quiet)
then
  echo >&2 "$SCRIPT_NAME: Git working tree has local changes"
  echo >&2
  echo >&2 "Your local changes might be missing from 'production' branch."
  echo >&2 "Please clean your Git working tree before tagging 'production'."
  exit 70
fi

year=$(date +%Y)
month=$(date +%m)
day=$(date +%d)

tag="v-$year-$month-$day"
read -e -i "$tag" -p 'Tag? ' -r tag

blog_url="https://blog.metabrainz.org/$year/$month/$day/"
blog_url+="musicbrainz-server-update-$year-$month-$day/"
read -e -i "$blog_url" -p 'Blog post URL? ' -r blog_url

set -x
git tag -u CE33CF04 "$tag" -m "See $blog_url for details" production
git push "$REMOTE" "$tag"

# vi: set et sts=2 sw=2 ts=2 :
