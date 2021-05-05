#!/usr/bin/env bash
set -e
npm install
npm run build
mkdir about
mv out/* about
mv about out
ls out/about
npm run node-riffraff-artifact
