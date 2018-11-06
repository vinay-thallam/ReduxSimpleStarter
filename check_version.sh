#!/bin/sh
version=`grep "version" package.json | cut -d ':' -f 2 | cut -d '"' -f 2`
if test $version == "1.0.0"
	then
	echo "initial version"
fi