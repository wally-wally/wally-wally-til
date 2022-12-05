(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{468:function(t,a,s){"use strict";s.r(a);var r=s(56),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_03-18-중개자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-18-중개자"}},[t._v("#")]),t._v(" 03-18. 중개자")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" ✋ Intro")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/wally-wally/TIL/tree/master/14_refactoring/03-17_%EB%A9%94%EC%8B%9C%EC%A7%80_%EC%B2%B4%EC%9D%B8",target:"_blank",rel:"noopener noreferrer"}},[t._v("메시지 체인"),s("OutboundLink")],1),t._v(" 리팩토링 기법과 반대로 중개자 역할하는 것들을 제거하는 리팩토링 기법을 소개한다.")])]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_1-중개자-제거하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-중개자-제거하기"}},[t._v("#")]),t._v(" (1) 중개자 제거하기")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("지난번 위임 숨기기 기법을 통해서 클라이언트가 위임 객체의 또 다른 기능을 사용하고 싶을 때마다 그 앞단의 클래스에 위임 메서드를 추가해야 한다.")]),t._v(" "),s("ul",[s("li",[t._v("이렇게 기능을 추가하다 보면 단순히 전달만 하는 위임 메서드들이 너무 많아지게 되어 해당 클래스는 본래의 기능보다 그저 중개자 역할로 변질되어 버릴 수 있다.")]),t._v(" "),s("li",[t._v("차라리 클라이언트가 위임 객체를 직접 호출하는 게 나을 수 있다.")])])]),t._v(" "),s("li",[s("p",[t._v("이러한 내용은 "),s("a",{attrs:{href:"https://tecoble.techcourse.co.kr/post/2020-06-02-law-of-demeter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("디미터의 법칙"),s("OutboundLink")],1),t._v("과도 연관이 깊다. ("),s("a",{attrs:{href:"https://mangkyu.tistory.com/147",target:"_blank",rel:"noopener noreferrer"}},[t._v("추가 참고 자료"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("ul",[s("li",[t._v("내부 정보를 가능한 한 숨기고 밀접한 모듈과만 상호작용하여 결합도를 낮추는 원칙으로, 자칫하면 이 과정에서 위임 혹은 wrapper 메서드가 너무 늘어나는 등의 부작용이 있을 수 있으니 상황에 맞게 응용하는 게 좋다.")])])]),t._v(" "),s("li",[s("p",[t._v("즉, "),s("b",[t._v("위임 숨기기")]),t._v(" 기법과 "),s("b",[t._v("중개자 제거하기")]),t._v(" 기법을 통해 "),s("u",[t._v("적절하게"),t._v(" 숨기고 캡슐화하면 될 것 같다.")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// before")]),t._v("\n\nmanager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aPerson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("manager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after")]),t._v("\n\nmanager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aPerson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);