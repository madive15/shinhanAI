# shinhanAI

React

프로젝트 관련 setting

-   Vanilla JS vs React
-   typescript
-   eslint
-   next ???
-   mui
-   scss, css
-   style componenet
-   터미널 설정
-   compiled 관련
-   git 설정
-   코딩 guide
-   data context
-   nvm 모듈
-   폴더구조
-   css loader 관련
-   etc (Tailwind)
-   vsc 기본 설정
-   .env
-   mobile media query
-   UDL 접근성

<pre>
<code>
Game Service Potal

1. Directory
GSPOTAL
    |-- public 
        |-- index.html
    |-- src
        |-- common
            |-- define.js
            |-- AuthNetwork.service.js
            |-- AxiosModule.js
        |-- components
            |-- businessModel
                |-- loginModel.js
            |-- connectApi
                |-- loginApiData.js
            |-- layout
            |-- material
        |-- hooks
            |-- useDispatchContainer.js
            |-- useInput.js
        |-- lang
            |-- i18n.js
            |-- translation.en.json
            |-- translation.ko.json
        |-- pages
            |-- login
                |-- login.jsx
                |-- login.scss
            |-- main
                |-- main.jsx
                |-- main.scss
            |-- sign
                |-- signUp.jsx
                |-- sign.scss
        |-- store
            |-- lib
                |-- reducerUtils.js
            |-- middleware
                |-- middleware.js
            |-- modules
                |-- index.js
                |-- login.js
                |-- mode.js
            |-- index.js                        
        |-- style
            |-- _base.scss
            |-- _reset.scss
            |-- style.scss
        |-- utils
            |-- index.js
            |-- security.js
        |-- app.jsx
        |-- index.jsx    
    .eslintrc
    .prettierrc
    jsconfig.json
    package-lock.json
    package.json
    README.md
    webpack.config.js

2. Directory Guide
    2.1 public 기본 폴더
        - index.html : 가상 DOM이 들어가는 html

    2.2 src 개발 소스

    2.3 .eslintrc 
        - ESLint 설정 파일

    2.4 .prettierrc
        - Prettier 설정 파일
    
    2.5 jsconfig.json
        - 파일 절대 경로 설정

    2.6 package-lock.json
        - 생성된 node_modules 폴더의 정보

    2.7 package.json
        - 사용하는 node_modules 정보
        - 기본적인 프로젝트에 대한 명세        

    2.8 README.md
        - 프로젝트 파일에 대한 정보
        
    2.9 webpack.config.js
        - webpack 설정 파일

3. Development System Process    
    
    사용 개발 언어 (package.json 참고)
    React 
    Redux
    React-Redux
        - reducer
        - middleware        


    ex:) login page    

        view 기준으로 설명    
        최종파일 : pages/login/login.jsx
        관련 style : pages/login/login.scss
        로드 순서 : index -> App 
                                -> 로그인 -> main    
                                -> 비 로그인 -> login                             
        System 기준으로 설명
        로드 순서 :  index -> App -> login -> dispatch -> mddieware -> @components/businessModel/loginModel -> @store/modules/login -> login.jsx : 결과 
        
            순서별 설명                                    
            index 
                - react-redux Provider 셋팅                
                    -- Provider 에 store 입구 생성 및 설정
                - Browser Router 설정
                - app jsx 불러오기 
            -> App 
                - 기본 React 셋팅
                - 공통 dispatch 용 useDispatchContainer 셋팅
                - 필요한 page import 로 loadable 방법으로 구성 
                    -- loadable 관련 참고 (https://github.com/gregberge/loadable-components)
                -  app component 에 
                    -- useDispatch() 최초 선언 시 useDispatchContainer 실행 
                        --- useDispatchContainer 
                            ---- useDispatchContainer component 에 
                                ----- useDispatch , useSelector 셋팅
                                ----- 사용 할 login reducer import (@store/modules/파일)
                                    ------ @store/modules/login
                                        ------- reducer ducks 패턴 사용
                                        ------- 액션 타입, 액션 함수, 리듀서로 구성 됨
                                ----- 사용 할 login 관련 액션 함수 dispatch 셋팅
                    -- localStorage 에 저장된 로그인 값에 따라 Route page 구성
                        --- 비 로그인 시 
                            ---- 첫 url root  "/" 는  /login 으로 셋팅 
                            ---- login component (login.jsx) 불러 옴                                
                        --- 로그인 시
                            ---- 첫 url root  "/" 는  /main 으로 셋팅 
                            ---- main component  (main.jsx) 불러 옴
            -> login
                - login button click 시 login dispatch 실행
                    -- useDispatchContainer 셋팅한 login dispatch 실행
                    -- dispatch 실행 하면 공통 mddieware 실행
                    -- mddieware (business 로직 통로)
                        --- 사용 할 businessModel import (@components/businessModel/파일)
                        --- import 한 model mddieware 에 지정 
                        --- 지정된 model 에 필요한 값 전달  예:) LoginModel 지정 참고
            -> @components/businessModel/loginModel                
                - 사용 할 login reducer import (@store/modules/파일)
                - 사용 할 api 연결 파일 import (@components/connectApi/파일) 
                - mddieware 에서 가져 온 변수 값으로 business 로직 개발
            -> @store/modules/login
                - login reducer 실행
            -> login.jsx
                - useDispatchContainer 로 선언 한 변수에 결과 도출
                - useDispatchContainer 가져 온 login 관련 변수 : loading, result, error, login 로 view 개발 

</code>
</pre>
