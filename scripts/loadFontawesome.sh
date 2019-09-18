#!/bin/sh
# Simple shell script that tries to copy the fontawesome-free 
# assets to the public directory of the project. 

PWD=$(pwd)
FA_CSS="${PWD}/node_modules/@fortawesome/fontawesome-free/css"
FA_FONTS="${PWD}/node_modules/@fortawesome/fontawesome-free/webfonts" 
PUBLIC="${PWD}/public/assets/webfonts"

if [ -d "${FA_CSS}" ] && [ -d "$FA_FONTS" ] && [ -d "$PUBLIC" ]; then 
  cp "${FA_CSS}/all.min.css" $PUBLIC
  cp -R "${FA_FONTS}/." $PUBLIC
  mv "${PUBLIC}/all.min.css" "${PUBLIC}/fa.min.css"
  printf "\nSucessfully copied fontawesome css and fonts to public\n" 
  exit 0
fi

printf "\nWorking directory is wrong or node modules are not installed!\n\n"
printf "Be sure to be in the project root and check if the project depedencies are installed.\n\n"
exit 1