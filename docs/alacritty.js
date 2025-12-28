// PlemolJP/Kitty palette -> Blink theme
t.prefs_.set('color-palette-overrides', [
  "#181818", // 0  black
  "#ac4242", // 1  red
  "#90a959", // 2  green
  "#f4bf75", // 3  yellow
  "#6a9fb5", // 4  blue
  "#aa759f", // 5  magenta
  "#75b5aa", // 6  cyan
  "#d8d8d8", // 7  white

  "#6b6b6b", // 8  bright black
  "#c55555", // 9  bright red
  "#aac474", // 10 bright green
  "#feca88", // 11 bright yellow
  "#82b8c8", // 12 bright blue
  "#c28cb8", // 13 bright magenta
  "#93d3c3", // 14 bright cyan
  "#f8f8f8"  // 15 bright white
]);

t.prefs_.set('foreground-color', "#d8d8d8");
t.prefs_.set('background-color', "#181818");

// Kitty cursor is "#d8d8d8". Blink wants rgba for alpha; this is opaque.
t.prefs_.set('cursor-color', "rgba(216,216,216,0.6)");

// Optional: match kitty cursor text color (Blink has this pref on some builds; safe to omit if it errors)
// t.prefs_.set('cursor-text-color', "#181818");

