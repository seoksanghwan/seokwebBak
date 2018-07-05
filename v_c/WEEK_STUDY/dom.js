var age = 1; 

function logAge(){
	console.log(age);
}

logAge();

age++;

logAge();

age = 100;

logAge();

//나의 코드 해석
//age라는 변수가 함수 logAge 담아져서 할당한다 그래서 첫 번째 logAge는 처음 변수값에 들어간
//Number값인 1이뜬다 여기서 age++; 로인해 age = age + 1 로 증가가 되기때문에
//두번째 logAge라는 값에는 Number값인 숫자 2가 된다
//여기서 변수 age에다가 다시 Number값이 숫자 100을 넣기때문에 마지막 logAge는 Number100이난온다

/* 4기 회원님의 해석
먼저 age라는 변수가 선언이 되면서 동시 1이 할당된다
그리고 로그에이지라는 함수가 선언만 된다.
그 밑에 로그에이지를 부르는 함수를 호출하고
여기서 위에 선언했던 console.log(age)내용이 호출된다.
바로 밑에 로그에이지는 1이 호출된다.
그다음 age를 증가하는 호출이되서 age가 2가 되고
그밑에 로그에이지 console.log(2)가 호출이 된다.
age를 다시 100으로 재할당해줘서 마지막 로그에이지
콘솔로그는 100이 할당이 된다
*/


/*
code라는 것은 사람과 컴퓨터과 소통하기 위해 사용한다.
읽고 해독하고 관리하는 것은 사람!!(나, 상사, 동료, 인수자)
code를 작성할때는 가독성을 중요시하며 작성하자
1. 가독성(코드를 썻을 때 책일 읽듯이 읽혀야한다)
2. indenting
ex)
function loaAge () {
	console.log(age);
}
3. 변수나 함수이름은 확실하게!! 길더라도 끝까지 작성!!!이유는 몇개월 있다 봐도 알 수 있게!!
ex) var seokSangHwanAge = value;
4. Boolean(true/false) 값이 들어가는 이름을 특별하게!! var shouldEnable = true;
5. 코드를 해서 작동이되면 넘어가는 것이 아니라 왜 이게 실행됬는지 확실히 알아보지
*/

//function.js

//scope(범위)
var a = 3;
 
function foo(){
	// Can we access 'a'?
	console.log(a);//a 는 함수 바깥에 있는 a 를 함수 안에서 a를 읽어온다
}

foo();


function getOne(){
	var one = 1;
	return one;
}

// Can we access 'one'
//console.log(one);//안 불러짐 찾지를 못함 이유는 함수안에있는 변수라서 못불름
console.log(getOne());//함수는 불러짐
//경계는 함수가 만들어지냐 안만들어지나로 결정한다

function outer(){
	var a = 1;

	function inner () {
		var b = 2;

		console.log(a+b);
	}
	console.log(a);
	//console.log(b);//안 불러짐 찾지를 못함 이유는 함수안에있는 변수라서 못불름

	inner();
}

outer();

/*Arrays*/

var arr = [];
var arr = new Array();
var arr = new Array(10);//10개의 빈요소가 만들어짐;

console.log(arr);
console.log(typeof arr) //object;


//변수의 요소를 불러 올때
var arr = [1,2,3 ]
console.log(arr[0]);//[]로 위치 값을 찾을 수 있다
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);


arr.push(10)//배열 요소들의 뒤에 추가 됨 [1,2,3,10]


arr.pop(10)//배열의 요소 맨뒤값을 뺀다


arr.unshift(4) // 배열의 요소 맨앞에 4를 추가한다


arr.shift() // 배열의 요소들의 맨앞에 요소를 뺀다.


var arr = [1,2,3]
arr[3] = 4 //위치를 정해서 재할당해서도 추가 할 수 있다.
console.log(arr)//[1,2,3,4]

var arr = [1,2,3]
arr[0] = 100;
console.log(arr);// index 0 번째 값이 바뀐다 [100,1,2];


var arr = [];
arr[99] = 100;
console.log(arr); // index 99 번째 값이 추가돈다;[..............100];

//object

var obj = {};
var obj = new Object();
var obj = new Object({});


var obj = {};

//property == key == 속성 똑같은 말
// 'name' is a key, 'ken' is a value
obj.name = 'ken'
/*여기서 property는 name이다 object ojb에 
name이라는 속성이 생기고 문자열 'ken'이 해당 속성이 값이 된다*/

// 'age' is a key, '35' is a value
obj.age = 35; 

console.log(obj);//{name : 'ken', age : 35};
console.log(obj.name);//'ken' 
console.log(obj.age);// 35

function foo(){
	console.log(3);
}

var ken = {
	name : 'ken',
	age : 35,
	sayHello :  function foo(){
		console.log('hello');
	},
	number : foo(),//라턴값이 없으므로 undefined;
	childeren : [1,2,3],
	family : {
		mother : 'kwon',
		father : 'huh'
	}
};

ken.sayHello(); // 저장된 값인 함수 foo를 불러오고 안에 있는 콘솔을 내보낸다.
console.log(ken.number);//선언된 함수 foo에는 return 값이 없으므로 undefiend가 나온다.
//console.log(ken.number[0]);//undefiend에 배열을 속성을 말이안됨 error뜸
console.log(ken.family.mother);
/*객체의 객체 속성 값을 가져옴 켄 이라는 
객체의 family라는 속성이 값인 객체를 가지고 오고
그 객체의 가리린 속성의moather 의 값인 'kwon'이라는 문자열을 가져온다 */

var obj = {
	name : 'ken',
	age : 35
};

console.log(obj.name)// 객체의 속성을 접근 할 때는 o.name 처럼 점을 찍어서 접근 할 수 있음
console.log(obj['name'])// 또 대괄호를 열어서 따옴표로 속성명을 적고 가져온다
obj.age++
// 이것은 가능하다 이유는 ojb라는 객체의 age속성의 값은 Number형이기때문에 증가가 가능하ㄷ

//객체로 할 수 있는 것

var bb = {
	name : 'ken',
	age : 35
}

var age = 'name';
var name = 'age';


console.log(bb[age]);
// ken 이뉴는 age라는 변수의 'name'이라는 string 값을 선언했고
// 객체에 속성 값을 불러오는 방법에는 객체명 대괄호 문자열로 쓴 속성값 방밥있기 때문에 
// bb[age] == bb['name']이랑 같은 뜻이 되는거다 밑에 콘솔도 같은 이유
console.log(bb[name]);// 35

// 객체 속성 지우는 법
var del = {
	Name : 'ken'
};


console.log(del['name']);

delete del.Name;// ket,속성, 값이 

console.log(del);// 빈 객체


var c = {
	a : 'ken',
	b : 35
};

//객체,배열 쓰는 forIn 문
for(var k in c){  // 객체 key(속성, property)값이 선언한 변수한테 문자열로 들어간다
	console.log(k);//'a', 'b';
	console.log(c[k]);// loop을 돌면서 속성에대한 값을 접근하고싶을때 ken, 35
	console.log(typeof k);// 속성의 타입 'string';
	console.log(typeof c[k]);// 속성에 값의 타입;
	//불러오는 순서는 임의의 순서로 돈다. 
	//
}


// What is DOM API

/*
	3. What is DOM?
	- Document Object Model
	DOM이 뭘까요
	DOM이라는것은 우리가 html문서를 접근 할 수 있도로 제공되는 API라한다.
	DOM은 자바스크립트가 아니다.	


	4. Node bs Element
	- Node : 화명 구성 하는 하나하나의 녀석 구성요소들
	- Element : 

*/

//ex


//DOM을 조작하는 속성들

document.getElementById('id');//아이디 값을 가져오는것

document.getElemetsByClassName('class');//클래스명을 가져오는것

document.getElementsByName()//name 값을 가져온다 <div name="">이떼

document.getElementsByTagName('div')//tag를 가져온다''



/*
var a = document.getElementsByClassName('vc_general')
undefined
변수 a에는 클래스명 값인 vc_general값이 객체로 가지고 있다 

a[0].attributes // index 0번째인값의 속성
NamedNodeMap {0: class, 1: href, 2: title, class: class, href: href, title: title, length: 3}
*/



//ex

//<div id="hello"></div>
var element = document.getElementById('hello');//변수의 'hello'라는 아이디 값을 저장한다.
var b = element.getElementsByTagName('div');// element라는 변수의 저장된 'hello'라는 아이디값의 div라는 태그를 가져온다



//class
var classele = document.getElemetsByClassName('class')//
classele.length;
classele[0];
classele[1];
classele[2];
classele[3];
classele[4];




var query = document.querySelectorAll('div > ul > li:nth-child(1)')// 셀렉터를 가지고 올 수 있다. 클래스. 아이디, 태그 맘대로 가져올 수 있다. 해당되는것을 모두 가져온다


var query = document.querySelector()//셀렉테 기반으로 하나를 가져온다. 만약에 클래스명도 넣으면 문서상으오 위에서 부터 읽었을 때 맨위에걸 하나만 가져온다.문


var query = document.querySelector('ul li');


//querySeletor한것에 한번 더 quertSeletor를 사용하면 자식요소에서 찾아온다






//parentElement
element.parentElement()// 자기의 부몬 element를 가져온다

//element에 쓸 수 있다.

// firstChild
// lastChild
// nextSilgin
// previousSilgin




//children

var element = document.querySeletor('ul');

element.children.lenght;
element.children[0];
element.children[1];
element.children[2];



element.setAttribute('hi','ha');//<ul hi='ha'></ul> 속성 설정
element.getAttribute('hi')//ha // 속성에 해당하는 값을 가져온다


//ClassList 클래스명을 다룸
element.classList()
element.classList.contains(); //클래스명을 포함하고 있는지 true/false값으로 나온다
element.classList.add(); // 해당 클래스명 추가 // jquery에 addClass랑 비슷
element.classList.remove(); // 해당 클래스명 제거 jquery에 removeClass랑 비슷
element.classList.toggle();//클래스명이 없으면 넣어주고 있으면 뺴준다




//dataset data- 시작하는 속성들의 대한 정보가 담겨 있는 객체가 	dataset이다
//<h1 data-vanilla = "hello" data-no-vanilla = "bye">h1</h1>
var headElement = document.querySelector('h1');
headElement.dataset();//
headElement.dataset.dataVanilla()
headElement.dataset.dataNoVanilla()
headElement.dataset.name = 'ken';//가져온 element에 데이터를 만들어준다.

 
//모든 element에는 style property가 있음

해당element.style// object
해당element.style.display// 'block', 'inline-block', 'none', 'inline'
해당element.style.display = 'inline';
해당element.style.backgroundColor = 'black';
// 자바스크립트 스타일 쓸 때 css요소 dash(-)가있는것은 Dash뒤 알파벳을
// 대문자로 바꿔 작성한다 예시 css : background-clolor => javascript : bacgkroundColor
// camelcase 낙타 혹처럼 볼록 볼록 소문자로 가다가 대문자로
// snakecase 




//HTML HYPER TEXT MARKUP LANGUQGE
// -innerHtml- 선택한 요소에 안쪽 html을 가져옴 var h1Element = document.querySelector('h1')
// <h1><span>hi,</span> Vanilla</h1>
h1Element.innerHTML; // '<span>hi ,</span> vanilla '
h1Element.innerHTML = 'hi, <span> vanilla</span>' //이런식으로 편집 가능




//txextcontent
//ex) <h1>vanilla</h1>
h1Element.textContent;//안에있는 텍스트를 들고옴
h1Element.textContent = 'no vanilla' //이렇게 변경 가능



//createElement 엘레먄트를 만들어 놓는다.
var element = document.createElement('img');//createElement를 사용해서 img를 만들면 src라는 것을 사용가능
element.textContent = 'asdasdasdad'
element.src = 'https://fhsufh'
//href를 사용하는 태그에도 사용가능 href는 hypetext reference

//headerElement.appendChild 선택 요소 뒤에 붙인다.

// eval is evil
// ------------

//Node.app
//
//
//
//
//



