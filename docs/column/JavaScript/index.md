# 浅析 forEach 与 for 循环的区别

>

#### 1、性能区别：for > forEach ？

1、`for`语法糖循环最简单，它没有任何额外的函数调用和上下文；
2、`forEach`[函数签名](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)更为复杂`array.forEach(function(currentValue, index, arr), thisValue)`，有诸多参数和上下文在执行时需考虑，性能可能减弱，不过实际性能情况应结合数据量与浏览器引擎版本等因素来考量。

#### 2、循环设置与跳出区别

1、for 循环可以使用`continue`跳出当次循环，使用`break`跳出整个循环，forEach 不行；
2、for 循环可控制循环起点`i`,forEach 只能默认从`0`开始；
3、for 循环可在循环中修改`i`,forEach 不行（底层隐式控制 index 自增，无法操作）

#### 3、对全局变量的影响区别

forEach()传入的是一个回调函数，因而形成一个作用域，其内部所定义的变量不会像 for 循环一样污染全局变量

#### 4、循环跳出方式

`for` : continue、break

```javascript
let arr = [1, 2, 3, 4, 5];
let target = 3;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) continue; // 跳出单次循环
  console.log(arr[i]);
  if (arr[i] === target) {
    break; // 跳出循环
  }
}
```

`forEach`：forEach 需结合`try catch`操作，通过`return`跳出当次循环，通过抛出异常`throw Error()`的方式跳出整个循环

```javascript
let arr = [1, 2, 3, 4, 5];
let target = 3;
try {
  arr.forEach((e) => {
    if (e === 1) return; // 跳出单次循环
    console.log(e);
    if (e === target) {
      throw Error(); // 跳出循环
    }
  });
} catch (e) {}
```
