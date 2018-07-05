/*Javascript*/

/* Operators */

//Assingment(할당)
//
var fn = function(){};
var arr = [];
var obj = {};
var num = 333;

//Compound()
//+= //더해서 할당
///= //나눠서 할당


//
!0 // true
!!0 // false
!!'hello' // false

&& //거짓값을 돌려준다
3 && 4 //4 둘 다 참이므로 마지 값이 돌려 나온다.
0 && 3 //false 값을 돌려나온다.

0 || 3 //둘중에 하나만 만족하면 되므로 3이 나온다.


var a = 3 || 0 && 7; && // and가 먼저 읽힘 그 다음 or가 읽힘 그러므로 3


var b = 'h' || 123 || 234 && true

'' //빈 문자열은 false

var a = [1,2,3]
var b;
var c = b || a; // a


/*
Types(유형)
1. string : 'fst','',""
2. number : 3, 100.1 Infinity
3. boolean : true, false
4. null : null
5. underfined : undefined
6. object : {}, [], funciton(){}

NaN : 숫자가 아니다.

배열판별
Array.isArray([1,2,3])
*/


//함수 : input 
function a(){
	console.log(1)
}

var a = function(){};
//


var b = new Function('console.log(3)')


//return문은 개행을 할 수 없다. 함수 안에서만 사용.


















