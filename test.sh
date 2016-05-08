#!/usr/bin/env bash
set -o errexit
set -o nounset

expected=1
npm start | grep $expected &> /dev/null
if [ $? == 0 ]; then
   echo "OK"
fi