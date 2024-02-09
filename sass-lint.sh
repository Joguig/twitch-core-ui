#!/bin/sh
ABORTED="

 #####  ####### #     # #     # ### #######       #    ######  ####### ######  ####### ####### ######
#     # #     # ##   ## ##   ##  #     #         # #   #     # #     # #     #    #    #       #     #
#       #     # # # # # # # # #  #     #        #   #  #     # #     # #     #    #    #       #     #
#       #     # #  #  # #  #  #  #     #       #     # ######  #     # ######     #    #####   #     #
#       #     # #     # #     #  #     #       ####### #     # #     # #   #      #    #       #     #
#     # #     # #     # #     #  #     #       #     # #     # #     # #    #     #    #       #     #
 #####  ####### #     # #     # ###    #       #     # ######  ####### #     #    #    ####### ######"
OUTPUT="$(./node_modules/.bin/sass-lint -v -q -c .sass-lint.yml)"
STATUS=$?
echo "$OUTPUT"
if [ $STATUS -gt 0 ]; then
  echo "$ABORTED"
  echo "\nCommit aborted due to sass-lint error(s). Fix linting errors and re-commit. See README for more information. Sass-lint rules are documented at https://github.com/sasstools/sass-lint/tree/master/docs/rules."
fi
exit $STATUS
