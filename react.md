reactc

前言
    react简介和vue对比
    react定义
    react特点
    安装脚手架   create-react-app     webpack去搭建
    探索组件
    什么是jsx语法
    状态
    设置状态
    jsx运算
    事件（原生js里面的事件，只不过）



前言：
    掌握的技术点：
        JavaScript
        npm
            nvm（node版本的工具）
            nrm（镜像源管理工具）
                cnpm   淘宝（缺点：会造成丢包）


react简介和vue对比
react =》 Facebook
定义：   view
构建用户界面的JavaScript库
对比：
    什么项目该用react？     大型项目首推react
    特点：
        生态强大
        上手简单
        社区强大

vue
特点：
    组件化
    mvvm
    双向数据绑定   v-model
    生态旺盛
    简单易上手


技术发展趋势
    1. reactjs   构建用户界面
    2. reactNative   app开发
    3. reactVR   虚拟现实


安装脚手架   create-react-app
命令   npm install create-react-app -g
创建项目
    create-react-app 项目名称
    有报错：
        JSON   extend   near  =》  npm cache clean -f   清理缓存
        proxy  代理  =》  npm config set proxy null

目录结构：
    node_modules   项目依赖
        public   公共文件，里面放置的是一些公共的css和js
            favicon.ico   网站图标
            index.html   项目主要入口文件
            manifet.json
        src   主要的代码编写文件
            App.js   组件模块
            index.css   项目主入口的css
            index.js   项目主入口
        .gitignore   gti选择性上传配置文件   node_modules
        package.json   项目依赖包
        readme.md   项目说明


探索组件：

什么是jsx语法？
    jsx就是JavaScript和xml的结合体，react发明这种语法，便于react使用虚拟dom，当遇到 < 就会把jsx当做是html去解析，{ 则当做是js执行

    <div>
        <ul className="list">
            <li>react</li>
            <li>vue</li>
        </ul>
    </div>

    react.CreateElement("li",null,"react")
    react.CreateElement("li",null,"vue")
    react.CreateElement("ul".{"className":"list"},child1,child2)
    react.createElemt("div",root)

    jsx和组件的区别
        组件的首字母大写，jsx首字母必须为小写


状态   state
    在构造函数里面设置
    this.state={
        变量：值
    }
设置状态
    this.setstate({
        变量：新值
    })
jsx运算：
    三目运算
事件:
    onClick   onMouseover

注意：
    1.







深究组件：
    绑定类名： className
    注释： {/* */}
    通信：
        父子   props
        子父   callback  自定义事件
        兄弟   eventbus     包  events   npm install events --save
            跨级   context  全局上下文
                包  npm install prop-types --save
                prop-types  属性验证     字符串  数字  对象
                            严格校验数据类型，从而使项目开发更为方便
                校验类型的分类？
                    PropsTypes
                vue provide inject
            订阅  dispatch    发布  subsribe     基本不用
            redux  状态管理


            属性验证
                func  函数    string  字符串    number  数字    boolean  布尔




        作用：可以减少组件的不必要渲染    优化性能上可以选择


    生命周期     ==》什么是生命周期？
                    生命周期就是在一定阶段内容组件自动调用的执行函数
        初始化  init
                constructor  初始化
            作用: 初始化state和props
        挂载  mount
            componentWillMount   全局只会执行一次
            定义： 组件将要挂载
            render  渲染
            作用： 只要state和props发生改变时就会执行
            componentDidMount   挂载完毕  全局只会执行一次
        更新  update
            shouldComponentUpdate  在组件更新之前被调用
            参数：
                nextprops  更新后的属性     nextstate  更新后的状态
                作用： 减少组件之间不必要的渲染
                面试题：
                    如何减少组件之间不必要的渲染
                componentWillUpdate  将要更新
                componentWillReceiveProps  只能接收到props的值或者props的值发生改变的时候被调用

        卸载   un
        componentWillUnmount  组件卸载时被调用




路由 ==》 组件之间跳转
    react
    react-router   最原始的路由跳转方式的包   项目中基本不用
                    npm install react-router --save
    react-router-dom    轻  性能优化方面会好很多
                        npm install react-router-dom --save
    创建项目
        create-react-app 项目名称

    BrowerRouter  路由跳转的模式
    Route  加载组件
    path   component  exact
    NavLink  导航
    路由拼写错误应该如何跳转
    Switch
    保证对路由组件的切换

    路由重定向   Redirect
    路由传参
        静态传参  to="/two/2323"
        动态      to={`/two/${this.state.id}`}
        获取  this.props.match.params.定义的字段
        路由的属性和模式
            basename  定义原始的根路径
            forceRefresh   true  false
            设置项目
                当第一次从服务端渲染路由时整体进行渲染，请求回来时利用本地缓存，后续无需再向服务器端请求，从而节约性能
            模式
                HashRouter   利用#进行跳转
                BrowerRouter  浏览器端的跳转模式
                memoryRouter  不存储history，存在内存中，没有前进和后退，地址栏不会发生变化
                staticRouter  静态路由
                nativeRouter  在做app端使用，一般配合的是ReactNative

        prompt
            message  弹出的信息
                    when   true  false     默认值为true
                        true  让prompt生效
                        false  让prompt失效


        redux  状态管理仓库  管理数据和UI视图

            npm install redux --save
            store  仓库
            reducer  数据应用
            action  分发状态
            dispatch
            substribe  监听应用数据的改变
            getState()
            辅助函数

            步骤：
                1.下载redux
                    npm install redux --save
                    中间件   redux-saga   redux-thunk
                    升华版   npm install react-redux --save
                2.创建store文件 =》 index.js
                    import {createStore} from "redux"
                    创建   var store=createStore()
                    暴露   



        router 告诉组件应该以何种方式进行跳转
        route 配置路径和跳转的组件
        



    脚手架     搭建react脚手架

        webpack  模块打包（构建）工具   loader
        打包工具分类：
            grunt
            gulp
            fis
            webpack
            parcle

        安装：
            npm install webpack webpack-cli -g
        项目：
            初始化：
                npm init  =  npm init -y
            项目中安装：
                npm install webpack webpack-cli --save-dev
            
            webdemo （文件夹）
                src 文件夹
                    index.html
                    main.js
                webpack.config.js   webpack的配置文件
                    入口  entery
                    出口  output
                    模块  module
                        style-loader   css-loader   less-loader   sass-loader   postcss
                        npm install style-loader css-loader --save-dev
                            react   react-dom
                        babel   javascript编译器
                            babel-loader   babel-core   babel-preset-env
                            babel-preset-stage-3   babel-polyfill   babel-preset-react
                            babel-preset-es2015
                            npm install …… --save-dev
                            新建一个.babelrc文件，和src同级   babel的配置文件
                    插件  plugin
                    打包html
                        html-webpack-plugin
                    服务器  devServer
                        npm install 

            打包命令：webpack

            babel  编译器

