const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  // Copy static assets over to _site directory.
  eleventyConfig.addPassthroughCopy("css");

  // add Syntax highlighting plugin
	eleventyConfig.addPlugin(syntaxHighlight);

  // add shortcut codeblock
  eleventyConfig.addPairedShortcode("codeblock", function(code, lang, title = "") {
    // generate code highlight
    const highlightedCode = syntaxHighlight.pairedShortcode(code, lang);

    // return code with header and copy button
    return `<div class="code-block-wrapper">
      <div class="code-header">
        <div class="code-title">${title}</div>
        <div>
          <span class="copy-text">Copied!</span>
          <button class="copy-btn" onclick="copyCode(this)">
            <i class="fa-solid fa-copy"></i> <!-- Font Awesome copy icon -->
          </button>
        </div>
      </div>
        ${highlightedCode}
    </div>`
    });

    // Return configuration object.
    return {};
};