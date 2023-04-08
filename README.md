# fe-jhw-react-boilerplate

> 리액트 개발에 필요한 Webpack, Babel, Jest, Lint, Prettier, 환경변수, MSW, TypeScript 설정이 되어있는 boilerplate 입니다.

## 특징

- zero-install: 클론 후 패키지 설치 없이 바로 사용할 수 있습니다.
- mocking: `MSW`가 포함되어 api들을 mocking해 사용할 수 있습니다.
- behavior-driven-test: `react-testing-library`를 활용한 유저 행동 기반 UI 테스팅 환경이 구성되어 있습니다.
- bundle-analyze: `webpack-bundle-analyzer`를 활용해 빌드시 번들 분석 정보를 확인할 수 있습니다.
- lint-automation: 깃 훅을 사용하여 커밋 이전 자동으로 lint를 실행해 코드 품질을 향상시킵니다.

## 시작하기

`npx fe-jhw-create-react-app [project name]`

## 사용가능 스크립트

### `yarn dev`

개발자모드로 앱을 실행합니다.

### `yarn build`

`dist`폴더에 앱을 빌드합니다.

### `yarn lint-staged`

`staged` 상태인 파일들에 린트를 실행합니다.

### `yarn test`

`ts,tsx,js,jsx`파일들에 테스트를 실행합니다.

## 앞으로 추가될 것들

- TDD 관련 설정
- 빌드시 최적화
- 초기 `git init`후 `pre-commit`훅 실행시키기
- 각 디렉토리 tests 폴더와 샘플 테스트 코드 넣어 놓기
- 파일 캐시 추가하기

## 버그

- 라이브러리 추가 or 새 파일 추가시 에디터 작업중 해당 파일 or 라이브러리 import시 자동완성이 안되는 경우가 종종 있음
- `yarn dev`로 dev서버 켤 때 CRA에 비해 너무 오래 걸림 
