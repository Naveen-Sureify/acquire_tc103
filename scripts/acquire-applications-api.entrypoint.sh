#!/bin/sh

IS_LOCAL=true

if [[ "$ENVIRONMENT" != 'local' ]]; then
	BUCKET="carrier-env"
	echo "Preparing environment from s3://carrier-env/$CLIENT/$ENVIRONMENT/.env"
	eval $(aws s3 cp s3://$BUCKET/$CLIENT/$ENVIRONMENT/.env - | sed '/^#/ d' | sed '/^\s*$/d'| sed 's/^/export /')
	IS_LOCAL=false
fi

if [[ "$1" == 'run' ]]; then
	echo "Build bash command"
	/bin/sh -c bash "$@"
fi

if [[ -z "$1" ]]; then

	if $IS_LOCAL; then
    /app/node_modules/.bin/nx run-many --target=serve --projects=acquire-applications-api,xml,acquire-models
	else
		/app/node_modules/.bin/nx run acquire-applications-api:start
	fi

fi
