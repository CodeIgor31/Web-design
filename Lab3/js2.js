flag=true;
var str = '';
function Tree(el,s) {
    if(el.localName==undefined) return; //Чтобы избежать вывода undefined
  str += s + el.localName.toUpperCase() + '<br>'; //Записываю в строку название элемента, s - это пробелы, чтобы отступы были
  console.log(el.localName);//Вывод в консоль(по заданию нужно)
  if (el.childNodes.length == 0)//Если потомков нет, то выход из ветки
    return;
  else{
    for (var i = 0; i<el.childNodes.length;i++){//Идем к следующему потомку
    Tree(el.childNodes[i],s+'&nbsp;&nbsp;&nbsp;&nbsp;');}//Вызываем у него эту же функцию, чтобы записать его имя в строку
}
}

function CallTree()
    {
        if(flag){
        Tree(document.body,''); //Вызываем функцию => наш str заполняется, т.к. он вне обоих функций
        var section = document.getElementById("call"); //Это для того, чтобы в правильное место выводило
        section.innerHTML = str;//иннер - для вставки текста в вэб страницу, присваиваем к нему строку.
        flag=false;
        }
    }