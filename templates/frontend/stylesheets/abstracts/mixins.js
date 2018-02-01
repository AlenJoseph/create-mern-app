module.exports = `//---------------------------------------
//				  Mixins
//---------------------------------------

/// Apply hover and focus at once

@mixin hocus {
  &:hover,
  &:focus {
    @content;
  }
}

/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}`