module.exports = {
  preset: [
    ["@babel/preset-env",{
        targets: "> 0.25%, not dead",
        useBuiltIns: "entry",
        corejs: 3
      }],
    ["@babel/preset-react"]
  ]
}