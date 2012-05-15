# dsc: Javascript syntax highlighter
# author: isagalaev
# url: http://softwaremaniacs.org/wiki/doku.php/highlight.js:highlight.js
# src: https://github.com/isagalaev/highlight.js
# bug: https://github.com/isagalaev/highlight.js/issues

[core]
js <= github://isagalaev/highlight.js/src/highlight.js

[lang]
js <= github://isagalaev/highlight.js/src/languages/$lang.js

[style]
css <= github://isagalaev/highlight.js/src/styles/$style.css
