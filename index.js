module.exports = function hyphens({
  addUtilities,
  config,
  e
}) {
  const values = config('theme.hyphens', {
    'none': 'none',
    'manual': 'manual',
    'auto': 'auto',
  });

  const variants = config('variants.hyphens', []);
  const utilities = {};

  for (const key in values) {
    utilities[`.hyphens-${e(key)}`] = {
      'hyphens': values[key],
    };
  };

  addUtilities(utilities, {
    variants,
  });
};
