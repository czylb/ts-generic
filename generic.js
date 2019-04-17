// auther：zlqy
// data:2019.04.15
// 认识泛型
//创建一个指定长度的数组，同时将每一项都填充一个默认值
// function createArray(length: number, value: any): Array<any> {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
//  
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
//添加了类型变量T,T帮助我们捕获用户传入的类型
var list = createArray(3, 'x'); // ['x', 'x', 'x']
for (var i = 0; i < list.length; i++) {
    alert(list[i]);
}
// let list = createArray(3, 8); 
// for(let i=0; i<list.length; i++){
// 	alert(list[i]);
// }
// 没必要使用尖括号（<>）来明确地传入类型
// 编译器会根据传入的参数自动地帮助我们确定T的类型
// 多个类型参数
// function swap<T, U>(tuple: [T, U]): [U, T] {
//     return [tuple[1], tuple[0]];
// }
//我们定义了一个 swap 函数，用来交换输入的元组。
//这里使用了不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
// let output = swap([7, 'seven']); 
// for(let i=0; i<output.length; i++){
// 	alert(output[i]);
// }
// 泛型类型
// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
// function Hello<T>(arg:T):T{   //创建一个function 指定类型为T
// 	return arg;
// }
// let myHello:<T>(arg:T) => T=Hello;  //指定一个方法，lam表达式=hello
// alert(myHello('hello one'));
// 我们还可以使用带有调用签名的对象字面量来定义泛型函数
// let myHello:{<T>(arg:T):T} = Hello;  
// alert(myHello('Hello two'));
// 接口
// interface Hello{
// 	<T>(arg:T):T;
// }
// //接口中定义一个泛型的函数，返回值类型也为T
// // 如何使用
// function myHello<T>(arg:T):T{
// 	return arg;
// }
// let MH:Hello = myHello;
// alert(MH<string>('hello interface'));
// 创建一个对象MH，调用接口Hello，再把myHello赋值给它
// 进一步，我们可以把泛型参数提前到接口名上
// interface Hello<T>{
// 	(arg:T):T;
// }
// function myHello<T>(arg:T):T{
// 	return arg;
// }
// let MH:Hello<number> = myHello;
// alert(MH(100));
// 接口已经存在了泛型，使用时应直接指定泛型
// 泛型类
// class HelloNumber<T>{
// 	ten:T;    //类型为泛型的属性
//  add:(x:T,y:T) =>T;       //参数为泛型的一个方法
// } 
// let myHelloNumber = new HelloNumber<number>(); //关键字实例化
// myHelloNumber.ten = 10;
// myHelloNumber.add = function(x,y){   //调用方法的使用，用一个function实现
// 	return x+y;
// }
// alert(myHelloNumber.ten);  
// alert(myHelloNumber.add(22,myHelloNumber.ten))
// 泛型约束
// function Hello<T>(arg:T):T{
// 	alert(arg.lenth);
// 	return arg;
// }
//泛型 T 不一定包含属性 length，所以编译的时候报错了。
//这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量
// 为此，我们定义一个接口来描述约束条件。 创建一个包含.length属性的接口，使用这个接口和extends关键字来实现约束
// interface Lengthwise {
//     length: number;
// }
// function loggingHello<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }
// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
// loggingHello(3);
// 我们需要传入符合约束类型的值，必须包含必须的属性
// loggingHello({length: 10, value: 3});
