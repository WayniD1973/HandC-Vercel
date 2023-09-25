# date +"%H:%M:%S"
# cd /home/runner/HandC
# rm -r ./build
# sleep 1
# mkdir build
# sleep 1
# cp -r public build
# sleep 1
# cp index.js build
# sleep 1
# cp -r errors build
# date +"%H:%M:%S"
# echo "Successfully built"
# killall node
# kill 1

# # Minify the HTML files
# # for file in $(find -name *.css .) ; do
# #   html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true build/public/index.html build/public index.html
# # done
# # Do CSS Minification
# # Do JS Minification