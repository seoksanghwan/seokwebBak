//arguments.js 매게변수, 인자, 함수내부에서 아무때나 쓸 수 있음, 인자정보르 담고 있는 객체
function log (a,b,c,d,e,f){
	console.log(arguments);
	function bar () {
		console.log(arguments);
	};
}

log(1,2,3);

//Array.isArray(arguments) 배열인지 아닌지 여부 확인

//arguments.length : arguments.length() 괄호안에 값이 들어가면 무조건 갯수로 들어간다.

//arguments.length (null) : 갯수 1

//arguments.length (undefined) : r1

//scope.js

var a = 1;

function foo () {
	var b = 2;

	console.log(a);
	console.log(b);
}


foo();
//console.log(b); 'b' not defined

/*
 변수 a선언 하고 foo라는 함수를 만들고 foo함수 실행
*/
var a = 1;

function foo(){
	a = 2;// 변수 a를 새로 갱신
	console.log(a);//2
}

foo();
console.log(a);//2


function foo () {
	var a = 3;
	for (var i = 0; i < a; i++){
		console.log(i);
	}
	console.log(i);
}

foo();

// 즉시실행함수 IFIE
(function () {
	var a = 1;

	function foo (){
		var b = 2;

		console.log(a);
		console.log(b);
	}

	foo();
})();

var a = 1;

function foo () {
	console.log(a); // undefined

	var a = 2;

	console.log(a); // 2
}

foo();

//hoisting : 끌어올림(함수선언식으로할때는 위로 끌어올려짐)

var a = 1;

foo();


//함수 선언식
function foo () {
	console.log(a);
}


console.log(a);//undefined 가 뜸 에러가 아닌 이유는 변수 선언을 하게되면 선언문 위로 끌어 올려짐 주석으로 설명 해놓고 영상 한번 보기

var a = 1;// 변수의 실젝 구동 (이런식으로)


/*
var a;

a = 1;

*/


console.log(a);//1


// Hoisted within the current scope

var b = 1;
bar();
function bar () {
	// var b;
	b = 2;
	console.log(b); // 2
	var b// 실행을 하게되면 이 변수선언은 해당 스코프에호이스팅된다
};

console.log(b); // 1


function name () {} // 함수 선언식

var a = function name () {} // 함수 표현식


var a = 1;

function foo () {
	//var a;
	console.log(a);//ubdefined

	var a = 2;

	console.log(a);//2
}


foo();


(function () {
	//var a;
	foo();

	var a = 1;

	function foo () {
		//var b;
		var b = 2;

		console.log(a);
		console.log(b);
	}

	foo();xcxcvxc
})();




/// 원시값 vS 참조값
/// 배열은 참조값
/// 숫자 숫자 원시값
var arr = [];
var arr2 = [];
arr === arr2  //false


// closure.js
// 가두다
// 어떤 함수가 자기 자신이 속한  실행 된 다음에 그 내부정보를 다른 함수들이 기억 할 수 있는것 
// 환경적인 특징.

//Example
function say () {
	var a = 2;
	function log () {
		console.log(a);
	}
	return log;
}


function makeAdder (x) {
	return function me (y){
		return x + y;
	};
};

var add5 = makeAdder(5); // 5
var add10 = makeAdder(10); // 10

add5(1); //6


//curry


// this.js

/*
	자바스크릡트에서 this란 위의 문장들에서 나타난
	'나'라는 단어와 비슷합니다. 어떤 문맥이냐에 따라서 그 의미

*/

var name ='ken';

function log(){
	console.log(this.name): // 'this' is always an object.	
};

log();


var obj = {
	name : 'ken',
	log : function (){
		console.log(this.name); // WTF
	}
}


/*this this를 사용하는 해당 함수를 어떻게 실해하느냐에 따라 바뀝니다. 그리고 함수를 싱해난 방법엔 크게 4가지가있습니다.

	1. Regular function call - 일반함수 실행방법
	2.
	3.
	4.
*/





// 1-1. in non=strict mode
function foo(){
	console.log(this) // 'this' === globla objec(브라우저상에선 window객체)
}

foo();


// 1-2. in strict mode
'use strict'; // strict mode 엄격한모드

var name = 'ken';

function foo(){
	console.log(this.name); // 'this' === undefined
};

foo();//



// 2. dot-notaion

var age = 100;

function foo () {
	console.log(this.age);//ken.age 랑 똑같다
}

var ken = {
	age :35,
	log : foo
};

var name = 'log';

ken.log();
foo();


function foo () {
	console.log(this.age);
}

var age = 100;

var ken = {
	age : 35;
	foo : foo
};

var wan = {
	age : 31;
	foo : foo
};


ken.foo();
wan.foo();


var ken = {
	age : 35
	for : function bar () {
		console.log(this.age);
	};
};

var wna = {
	age : 31,
	foo : ken.foo
};


var foo = ken.foo;
ken.foo();//35
wan.foo()://31
foo();// 100 일반 함수 실행이라 이전거는 상관없다.

/*
	3. Function.prototype.call. Fcuntion.prototype.bind, Function,prototype,apply

*/

var arr = [1, 2, 3];

// Example #1
var age = 100;
function foo () {
	console.log(this.age);
}
var ken = {
	age : 35,
	log : foo
};


var kenLog = ken.log;

kenLog();//일반함수 실행
foo.apply(ken);//this is 'ken';
//apply : 쓰게되면 함수가 실행이된다.
//call : 쓰게되면 함수가 실행이된다.


// call 이랑 apply라는 다르다

var age =100;
function foo (a,b,c,d,e){
	console.log(this.age);
	console.log(arguments);//유사배열
};


foo.call(ken, 1,2,3)// 인자 갯 수 상관없이 넣을 수 있음
foo.apply(ken, [1,2,3])//인자 갯수는 2개 첫번째는 this 두번째븐 배열 배열안에 인자들이 요소로 들어간다.



// bind

var bar = foo.bind(ken);//bind는 함수를 실행하지 않고 this값을 인자녀석으로 묶어둔다. 인자도 bind 도 가능 첫번째는 this값 두번째는 인자 매게변수로 bind 됨
bar(1,,3,3,)//일반함수로 불러온 인자에도 적을 수 있다.

// call, apply, bind = explitcit binding(명시적 본인이 정한다)

// 4. new keyword  // 새로운일이 벌어진다.

 function person () {
 	console.log(this);
 };


 new person();//빈객체가 나온다.


function foo () {
	this.age =35 ;
	consol.log(this);//밑에 리턴이있어도 this 값이 리턴이 된다;
	//사실상
	//return this 랑 같다
}


new foo();//


//A function used with 'new' keyword : constructor function (생성자 함수);
// - usually capitalized
//부르는 함수 앞에 new를 쓰게되면 생성자 함수로 사용하게 되는거다

function Person (name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
//instances : 
var ken = new person('ken', 34, 'm')
var wan = new person('wan', 34, 'm')


console.log(ken instancesof Person);//true
console.log({} instancesof Person);//false

var obj = {};
var obj2 = new Object();

console.log(obj instancesof object);//true
console.log(obj2 instancesof object);//true



// Array consturctro function;

var a1 = [];
var a2 = new Array();

Array.isArray(a1);
Array.isArray(a2);





//this
/* Javascript Keyword: `this` */

/* 'this' keyword in javascript

1. 임정목: 나는 허리가 아프다 (나 === 임정목)
2. 김세준: 나는 머리가 아프다 (나 === 김세준)
3. 석상환: 나는 다리가 아프다 (나 === 석상환)

자바스크립트에서 this란 위의 문장들에서 나타난 '나'라는 단어와 비슷합니다. 어떤 문맥이냐에 따라서 그 의미(값)이 바뀝니다.

*/
var name = 'ken';

function log () {
  console.log(this.name); // 'this' is always an object.
}

log();






var obj = {
  name: 'ken',
  log: function () {
    console.log(this.name); // WTF?!?
  }
};

obj.log();



/*

  'this'의 값은 'this'를 사용하는 해당 함수를 "어떻게" 실행하느냐에 따라 바뀝니다.
  그리고 함수를 실행하는 방법엔 크게 4가지가 있습니다.
  (this를 이용하는)해당 함수를 이 4가지중 어떤 방식으로 실행하느냐에 따라
  this의 값은 바뀝니다.

*/



/*

  1. Regular function call - 일반 함수 실행 방식

  < strict mode 참고 문서 >
  https://docs.microsoft.com/ko-kr/scripting/javascript/advanced/strict-mode-javascript

*/

// 1-1. in non-strict mode
function foo () {
  console.log(this); // 'this' === global object (브라우저상에선 window 객체)
}

foo();










// 1-2: in strict mode
'use strict';  // strict mode
var name = 'ken';

function foo () {
  console.log(this.name); // `this` === undefined
}

foo();









// Example #1
'use strict';

var age = 100;

function foo () {
  var age = 99;
  bar();
}

function bar() {
  var age = 33;
  console.log(this.age);
}

foo();


//closure

/* Advanced Javascript */

/*

  < Closure >

  Closure is when a function can remember and access its scope even when it's invoked outside its scope.

*/

// Scope revisit
function foo () {
  var a = 2;

  function bar () {
    // We can access scope variables outside.
    console.log(a); // 2
  }

  bar();
}

foo();
console.log(a); // Error. We cannot access child scope variables.



// Example #1
function say () {
  var a = 2;
  function log () {
    console.log(a);
  }
  return log;
}

// 'log' function was just returned and assigned to variable 'a'.
var a = say();
// we are invoking 'log' function here. but it can still access the variable 'a' and log successfully.
a();



// Example #2
function doSomething () {
  var a = 1;
  function something () {
    console.log(a);
  }
  // 'something' gets passed into 'foo'
  foo(something);
}
function foo (fn) {
  // 'something' gets invoked here and logs '1'.
  fn();
}
doSomething();



// Example #3
var foo;
function doSomething () {
  var a = 1;
  var b = 2;
  function something () {
    var c = 3;
    console.log(a);
  }
  foo = something;
}
function say () {
  foo();
}
doSomething();
say();



// Example #4
var foo;
function doSomething () {
  var a = 1;
  var b = 2;
  function something () {
    a++;
    console.log(a);
  }
  foo = something;
}
function say () {
  foo();
}
doSomething();
say(); // 2
say(); // 3
say(); // 4



// Example #5
function makeAdder (x) {
  return function me (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

add10(2);
add5(1);



//2018/06/07 

/*
//prototype 

var str = '1'
var str1 = new String('1')
위 두변수는 완벽히는 아니지만 사실상 같다.

String.prototype.repeat =  function () {
   일어나는 일  
};

원래의 형태 또는 전형적인 예, 기초 또는 표준

Constructor
생성자 함수
new키워드 함께 쓰이는 함수

new Array();
new Object();
new Function();

- 생성자 함수는 자바스크립트에서 일반적으로 첫 글자를 대문자로 표기합니다.
- (거의) 모든 자바스크립트 객체는 생성자 함수를 이용해 만들어 집니다.
- 생성자 함수는 말 그대로 함수입니다. 모든 함수는  객체입니다. 고로생상자 함수 또한 객체입니다.
- 객체란
key / value 를 가질 수 있습니다. (속성 / 값)
예를 들면 Object.prototype
- 우리가 생성자 함수를 만들 수도 있습니다. 생서자 함수이냐 아니냐는 단지 쓰임새에 달린 문제입니다.

Instance// 남편과 남편의 아내의 사랑의 결실 자식 //우리 아이에겐 비밀이 한가지 있습니다.// 남편의 아내의 물건을 손을 대는 도벽이 있죠..

var obj = new Object();//obj가 자식 

Dunder Proto : __proto__ 항상 아이한테만 있는 것, 엄마를 가르치는것

__proto__ :  자식이 엄마를 가리키는것

object에 최상단에는 아무것도 없이 null이 존재한다.

Number/String 

behavior delegation : 나의 행동을 누군가한테 위임시키는거다. 

*/



// server : 제공하는 사람, 섬기는 사람, 서브하는 사람
// client : 의뢰인, 고객
// 웹이란 셰계서도 같은 개념
// 개발자에게 서버란 : 네트워크상에서 어떠한 자료 또는 서비스에 대한 접근을 관리하는 컴퓨터 (네트워크에 연결)
// 내 컴퓨터에서 HTML.CSS,JS작업를 하고, 해당 HTML파일을 브라우저에서 열었다. 멋진 UI가 작동한다.
// 
// ip주소 웹 네트워크상의 컴퓨터마다 할당되는 주소
// domain : alias 뜻 가명, 가칭, 별칭
// 개발자에게 클라이언트란 : 서버에 있는 자료를 접근 할 수 있는 프로그램
// 1 웹 브라우저(웹 사이트), 2 핸드폰 어플리케이션, 3 데스크탑 어플리케이션
// server & client
/*
   www.google.com을 방문하는 시나리오를 살펴보시죠
   참가자 목록
   1. 클라이언트 : 제가 사용하는 브라우저
   2. 서버 : 구글 홈페이지 HTML을 관리하는 네트워크상의 컴퓨터
   
   DNS Server
   Domain Name Server

   모든 웹 서버들의 주소를 우리가 외고 있을 수는 없습니다.
   불가능하다.

   그래서 DNS서버들이


*/


// HTTP HyperText Transfer Protocol
// 웹에서 주고 받는 메시지에 대한 규칙의 정의
// 웹에서 메시지 교류는 어떠한 형식으로 이류어져야 하는지. 요청과 응답은 어떤 식으로 이루어져야 하는지
// 
// 

//AJAX 
/*
  사용되는것들
  1. html
  2. dom
  3. javascript

  Request Method

  .get(정보를 달라)
  .post(정보를 만들라)
  .put(정보를 수정하라)
  .delete(정보를 지우라)

  responce code (상태코드)

  . 1xx()
  . 2xx(성공적)
  . 3xx(저쪽으로 가보세요 특정서버로 요청을 보냄 하지만 그 서버에는 없으니 다른 곳으로 가서 요청해라)
  . 4xx(클라이언트 니 잘못)
  . 5xx(서버 내 잘못)

  JSON : javascript Object Notation
  들어갈 수 있는 형식 : string , number, object, array, boolean, null
  들어갈 수 없는 형시 : undefined

  Asynchronous
  비동기

  Event Loop!
  조사해보기!!!!!
  evnet loop
  Philip Roberts : What the heck is the event loop anyway 감상 	

*/

arr.constructor.prototype = arr.__proto__; //true


ken.toString()




/*
Event loop;

single-stack
v8 engine
call stack
callback queue 
asynchronous // 비동기
web api

queue : 줄서있는

stack : 자료구조의 한 종류

call stack
현재 실행되는 프로그램들이 스택구조에 저장되는 것
.함수가 실행되면 스택에 들어갑니다.
.함수가 종료되면 스택에서 빠져나갑니다.

자바스크립튼 싱글스레드
브라우저는 멀티스레드

*/









