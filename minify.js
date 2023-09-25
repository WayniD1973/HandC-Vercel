const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const CleanCSS = require("clean-css");

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
};

const files = getAllFiles("/home/runner/HandC/build/public", []);

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  if (file.endsWith(".html")) {
    // Execute html-minifier command
    exec(
      `html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true "${file}"`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error minifying file ${file}: ${error}`);
          return;
        }
        // Write minified version to file
        const content = stdout.toString();
        fs.writeFile(file, content, (err) => {
          if (err) {
            console.error(`Error writing file ${file}: ${err}`);
            return;
          }
          console.log(`File ${file} minified successfully.`);
        });
      }
    );
  } else if (file.endsWith(".css")) {
    new CleanCSS({
      compatibility: {
        colors: {
          hexAlpha: false, // controls 4- and 8-character hex color support
          opacity: true, // controls `rgba()` / `hsla()` color support
        },
        properties: {
          backgroundClipMerging: true, // controls background-clip merging into shorthand
          backgroundOriginMerging: true, // controls background-origin merging into shorthand
          backgroundSizeMerging: true, // controls background-size merging into shorthand
          colors: true, // controls color optimizations
          ieBangHack: false, // controls keeping IE bang hack
          ieFilters: false, // controls keeping IE `filter` / `-ms-filter`
          iePrefixHack: false, // controls keeping IE prefix hack
          ieSuffixHack: false, // controls keeping IE suffix hack
          merging: true, // controls property merging based on understandability
          shorterLengthUnits: false, // controls shortening pixel units into `pc`, `pt`, or `in` units
          spaceAfterClosingBrace: true, // controls keeping space after closing brace - `url() no-repeat` into `url()no-repeat`
          urlQuotes: false, // controls keeping quoting inside `url()`
          zeroUnits: true, // controls removal of units `0` value
        },
        selectors: {
          adjacentSpace: false, // controls extra space before `nav` element
          ie7Hack: true, // controls removal of IE7 selector hacks, e.g. `*+html...`
          // mergeablePseudoClasses: [':active', ...], // controls a whitelist of mergeable pseudo classes
          // mergeablePseudoElements: ['::after', ...], // controls a whitelist of mergeable pseudo elements
          mergeLimit: 8191, // controls maximum number of selectors in a single rule (since 4.1.0)
          multiplePseudoMerging: true, // controls merging of rules with multiple pseudo classes / elements (since 4.1.0)
        },
        units: {
          ch: true, // controls treating `ch` as a supported unit
          in: true, // controls treating `in` as a supported unit
          pc: true, // controls treating `pc` as a supported unit
          pt: true, // controls treating `pt` as a supported unit
          rem: true, // controls treating `rem` as a supported unit
          vh: true, // controls treating `vh` as a supported unit
          vm: true, // controls treating `vm` as a supported unit
          vmax: true, // controls treating `vmax` as a supported unit
          vmin: true, // controls treating `vmin` as a supported unit
        },
      },
    }).minify("@import url(" + file + ")");
  }
}
