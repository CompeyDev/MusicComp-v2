#!/bin/bash

      CURL_STATUS=$(dpkg-query -W -f='${Status}' curl | awk '{print $3}'|tr -d '-')


if [ "$CURL_STATUS" = "notinstalled" ]; then

       echo "Insatlling CURL"
echo
echo
         apt install curl
fi


if [ ! -x /usr/bin/nodejs ]; then
echo
echo
        echo "INSTALLING nodejs & npm"
echo
echo
        curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
	sudo apt-get install -y nodejs
	mkdir "${HOME}/.npm-packages"
	npm config set prefix "${HOME}/.npm-packages"
	echo 'NPM_PACKAGES="${HOME}/.npm-packages"' >> /etc/bash.bashrc
	echo 'export PATH="$NPM_PACKAGES/bin:$PATH"' >> /etc/bash.bashrc
	echo '# Unset manpath so we can inherit from /etc/manpath via the `manpath` command unset MANPATH # delete if you already modified MANPATH elsewhere in your config export MANPATH="$NPM_PACKAGES/share/man:$(manpath)"' >> /etc/bash.bashrc
echo
echo
	echo "SUCESSFULLY INSTALLED nodejs & npm";


else
echo
echo
        echo "ALREADY INSTALLED nodejs & npm"
fi

echo
echo
        echo "INSTALLING DEPENDENCIES"
echo
echo

        npm install musiccomp-discord-bot
	
echo
echo
        echo "STARTING BOT"
echo
echo

        node index.js
