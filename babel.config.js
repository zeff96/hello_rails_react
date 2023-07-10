module.exports = {
  present: [
    [
      '@babel/present-env',
      {
        targets: {
          node: 'current'
        },
      },
    ],
    '@babel/present-react'
  ],
};