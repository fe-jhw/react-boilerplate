module.exports = {
  presets: [
    ["@babel/preset-env",{
        targets: "> 0.25%, not dead",
        useBuiltIns: "entry",
        corejs: 3
      }],
    ["@babel/preset-react", {
      runtime: "automatic"
    }]
  ],
  plugins: [
    require.resolve('react-refresh/babel')
  ]
}