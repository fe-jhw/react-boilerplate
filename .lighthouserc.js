module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      // startServerCommand: "yarn dev", // 서버를 키는 명령어를 통해서도 실행 가능
      url: ["http://localhost:30009"],
      numberOfRuns: 5,
    },
    upload: {
      target: "temporary-public-storage",
    },
    "assert": {
      "assertions": {
        // performance 카테고리 점수가 70점 미만이면 warning
        "categories:performance": ["warn", { "minScore": 0.7 }],
        // accessibility 가 100점 미만이면 error
        "categories:accessibility": ["error", { "minScore": 1 }]
      }
    }
  },
};