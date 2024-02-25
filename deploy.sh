#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:matinsoleymni/Nick-App-Vue3.git main:gh-pages

cd -