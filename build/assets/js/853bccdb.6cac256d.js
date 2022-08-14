"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8292],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,u=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c="\u5feb\u901f\u5f00\u59cb",l={unversionedId:"\u4ecb\u7ecd/02quickstart",id:"version-5.0/\u4ecb\u7ecd/02quickstart",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355 Master RocketMQ \u96c6\u7fa4\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002",source:"@site/versioned_docs/version-5.0/01-\u4ecb\u7ecd/02quickstart.md",sourceDirName:"01-\u4ecb\u7ecd",slug:"/\u4ecb\u7ecd/02quickstart",permalink:"/docs/5.0/\u4ecb\u7ecd/02quickstart",editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/01-\u4ecb\u7ecd/02quickstart.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",permalink:"/docs/5.0/"},next:{title:"\u521d\u8bc6RocketMQ",permalink:"/docs/5.0/\u4ecb\u7ecd/03whatis"}},m=[{value:"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ",id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq",children:[]},{value:"2. \u542f\u52a8NameServer",id:"2-\u542f\u52a8nameserver",children:[]},{value:"3. \u542f\u52a8Broker",id:"3-\u542f\u52a8broker",children:[]},{value:"4. \u6d88\u606f\u6536\u53d1",id:"4-\u6d88\u606f\u6536\u53d1",children:[]},{value:"5. \u5173\u95ed\u670d\u52a1\u5668",id:"5-\u5173\u95ed\u670d\u52a1\u5668",children:[]}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355 Master RocketMQ \u96c6\u7fa4\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7cfb\u7edf\u8981\u6c42")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u63a8\u8350 Linux/Unix/macOS"),(0,o.kt)("li",{parentName:"ol"},"64\u4f4d JDK 1.8+")))),(0,o.kt)("h2",{id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq"},"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"RocketMQ\u4e0b\u8f7d")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"RocketMQ \u7684\u5b89\u88c5\u5305\u5206\u4e3a\u4e24\u79cd\uff0c\u4e8c\u8fdb\u5236\u5305\u548c\u6e90\u7801\u5305\u3002\u70b9\u51fb",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/4.9.4/rocketmq-all-4.9.4-source-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d Apache RocketMQ 4.9.4\u7684\u6e90\u7801\u5305\u3002\u4f60\u4e5f\u53ef\u4ee5\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/4.9.4/rocketmq-all-4.9.4-bin-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d\u5230\u4e8c\u8fdb\u5236\u5305\u3002\u4e8c\u8fdb\u5236\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u6210\u540e\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u7684\uff0c\u6e90\u7801\u5305\u662f\u9700\u8981\u7f16\u8bd1\u540e\u8fd0\u884c\u7684\uff0c"))),(0,o.kt)("p",null,"\u8fd9\u91cc\u4ee5\u5728Linux\u73af\u5883\u4e0b\u5229\u7528\u793e\u533a4.9.4\u7684\u6e90\u7801\u5305\u4e3a\u4f8b\uff0c\u4ecb\u7ecdRocketMQ\u5b89\u88c5\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u89e3\u538b4.9.4\u7684\u6e90\u7801\u5305\u5e76\u7f16\u8bd1\u6784\u5efa\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  > unzip rocketmq-all-4.9.4-source-release.zip\n  > cd rocketmq-all-4.9.4-source-release/\n  > mvn -Prelease-all -DskipTests clean install -U\n  > cd distribution/target/rocketmq-4.9.4/rocketmq-4.9.4\n")),(0,o.kt)("h2",{id:"2-\u542f\u52a8nameserver"},"2. \u542f\u52a8NameServer"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8cRocketMQ\u5305\u540e\uff0c\u6211\u4eec\u542f\u52a8NameServer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### \u542f\u52a8namesrv\n$ nohup sh bin/mqnamesrv &\n \n### \u9a8c\u8bc1namesrv\u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u53ef\u4ee5\u5728namesrv.log \u4e2d\u770b\u5230 ",(0,o.kt)("strong",{parentName:"p"},"'The Name Server boot success..'\uff0c")," \u8868\u793aNameServer \u5df2\u6210\u529f\u542f\u52a8\u3002"))),(0,o.kt)("h2",{id:"3-\u542f\u52a8broker"},"3. \u542f\u52a8Broker"),(0,o.kt)("p",null,"NameServer\u6210\u529f\u542f\u52a8\u540e\uff0c\u6211\u4eec\u542f\u52a8Broker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### \u5148\u542f\u52a8broker\n$ nohup sh bin/mqbroker -n localhost:9876 &\n\n### \u9a8c\u8bc1broker\u662f\u5426\u542f\u52a8\u6210\u529f, \u6bd4\u5982, broker\u7684ip\u662f192.168.1.2 \u7136\u540e\u540d\u5b57\u662fbroker-a\n$ tail -f ~/logs/rocketmqlogs/Broker.log \nThe broker[broker-a,192.169.1.2:10911] boot success...\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u53ef\u4ee5\u5728 Broker.log \u4e2d\u770b\u5230\u201cThe broker","[brokerName,ip:port]"," boot success..\u201d\uff0c\u8fd9\u8868\u660e broker \u5df2\u6210\u529f\u542f\u52a8\u3002"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u81f3\u6b64\uff0c\u4e00\u4e2a\u5355Master\u7684RocketMQ\u96c6\u7fa4\u5df2\u7ecf\u90e8\u7f72\u8d77\u6765\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u811a\u672c\u8fdb\u884c\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002"))),(0,o.kt)("h2",{id:"4-\u6d88\u606f\u6536\u53d1"},"4. \u6d88\u606f\u6536\u53d1"),(0,o.kt)("p",null,"\u5728\u8fdb\u884c\u6d88\u606f\u6536\u53d1\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9\u5ba2\u6237\u7aefNameServer\u7684\u5730\u5740\uff0cRocketMQ\u6709\u591a\u79cd\u65b9\u5f0f\u5728\u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6eNameServer\u5730\u5740\uff0c\u8fd9\u91cc\u6211\u4eec\u5229\u7528\u73af\u5883\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"NAMESRV_ADDR")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," > export NAMESRV_ADDR=localhost:9876\n > sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n > sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,o.kt)("h2",{id:"5-\u5173\u95ed\u670d\u52a1\u5668"},"5. \u5173\u95ed\u670d\u52a1\u5668"),(0,o.kt)("p",null,"\u5b8c\u6210\u5b9e\u9a8c\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5173\u95ed\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> sh bin/mqshutdown broker\nThe mqbroker(36695) is running...\nSend shutdown request to mqbroker(36695) OK\n\n> sh bin/mqshutdown namesrv\nThe mqnamesrv(36664) is running...\nSend shutdown request to mqnamesrv(36664) OK\n")))}d.isMDXComponent=!0}}]);