#!/bin/bash
cd `dirname $0`
jekyll serve -w -t --safe -D --config _config.yaml
