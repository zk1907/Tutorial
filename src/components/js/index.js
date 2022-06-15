(() => {
    function sayHi(str) {
        return sayHi + 'Tom';
    }
    let text = '周凯';
})();
//ts文件中如果是纯js代码则是可以直接引用，如果ts里面有ts语法，就需要把阿ts文件编译成js文件
