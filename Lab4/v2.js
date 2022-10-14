var sum=0;
var sum2=0;
    function PushTab()
    {
    name = document.getElementById('name').value;
    cost = document.getElementById('cost').value;
    if(Number(cost)<=0){alert("Укажите цену")}
        else if(name==""){alert("Пустое имя товара")}
    else{
    sum+=Number(cost);
    var tbody = document.getElementById('tab').getElementsByTagName('tbody')[0];
    var row = document.createElement("tr");
    tbody.appendChild(row);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
        cell2.id="price";
        cell1.innerHTML = name;
        cell2.innerHTML = cost;
    row.onclick = function(){
            var basket_tbody = document.getElementById("tab2").getElementsByTagName('tbody')[0];
            var basket_row=document.createElement("tr");
            basket_tbody.appendChild(basket_row);
            var cell1 = basket_row.insertCell(0);
            var cell2 = basket_row.insertCell(1);
            cell1.innerHTML = row.cells[0].textContent;
            cell2.innerHTML = row.cells[1].textContent;
            sum2 += parseFloat(row.cells[1].textContent);
            SumCost2();
            alert("Был добавлен товар: " + row.cells[0].textContent);
        }
    }
    }  
    function SumCost(){
        var result = document.getElementById("Cost"); 
        result.innerHTML = "Суммарная стоимость товаров = " + String(sum);
    }
    function SumCost2(){
        var result = document.getElementById("Cost2"); 
        result.innerHTML = "Суммарная стоимость товаров = " + String(sum2);
    }