// Non-default variable export
export var PI = 3.14159265359;

// Non-default function export
export var double = function (n) {
  return n * 2;
}

/**
 * Any function, variable, array, object etc. can be exported as both
 * non-default and default exports. This is a default export of an object.
 */
export default {
  foo: 'bar'
}
