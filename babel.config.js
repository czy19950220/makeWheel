module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@vue/app',
    {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }
  ],

  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true
      }
    ]
  ]
}
