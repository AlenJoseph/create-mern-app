module.exports = `// -----------------------------------------------------------------------------
// This file contains all application-wide Sass functions.
// -----------------------------------------------------------------------------
/// CDN URL where all assets are served from
/// @type String
$base-url: "./assets/";

/// Native \`url(..)\` function wrapper
/// @param {String} $base - base URL for the asset
/// @param {String} $type - asset type folder (e.g. \`fonts/\`)
/// @param {String} $path - asset path
/// @return {Url}
@function asset($base, $type, $path) {
  @return url($base + $type + $path);
}

/// Returns URL to an image based on its path
/// @param {String} $path - image path
/// @param {String} $base [$base-url] - base URL
/// @return {Url}
@function image($path, $base: $base-url) {
  @return asset($base, "images/", $path);
}

/// Returns URL to a font based on its path
/// @param {String} $path - font path
/// @param {String} $base [$base-url] - base URL
/// @return {Url}
@function font($path, $base: $base-url) {
  @return asset($base, "fonts/", $path);
}

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}

// Returns proper color from color map
@function color-list($key: "primary") {
  @return map-get($color-list, $key);
}`