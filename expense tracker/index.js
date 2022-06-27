console.log("hello");


class datas
{
    constructor(amount,category)
    {
        this.amount=amount;
        this.category=category;
    }
}

let data=document.getElementById('formbox');

data.addEventListener('submit',xyz);
function xyz(e)
{
    e.preventDefault();
    
        let expense= new datas(document.getElementById('amount').value ,document.getElementById('categorys').value);
        localStorage.setItem(document.getElementById('description').value,JSON.stringify(expense));
        location.reload();
        // console.log(expense);
        // let category=document.getElementById('categorys').value;
        // let spend=document.getElementById('amount').value;

        // let x=document.createElement('li');
        // x.id="newdata";
        // console.log(x);
        // let button=document.createElement('button');
        // button.className="btn btn-danger btn-sm float-right delete";
        // button.innerHTML='delete';
        // x.innerHTML=category+" "+spend;
        // x.appendChild(button);
        
        // document .getElementById('showdata').appendChild(x);
}


const keys=Object.keys(localStorage);
let datalength=keys.length;

while(datalength--)
{
let obj= JSON.parse(localStorage.getItem(keys[datalength]));
let data=document.createElement('li');
let button=document.createElement('button');
button.className="delete";

data.innerHTML=`<li> ${keys[datalength]}-${obj.category}-${obj.amount} <button class ="delete" onclick=deletes('${keys[datalength]}')>Delete</button> -<button class ="edit" onclick=edit('${keys[datalength]}')>Edit</button></li>`
document.getElementById('showdata').appendChild(data);
}

function deletes(data)
{
    console.log(localStorage.getItem(data));
    localStorage.removeItem(data);
    location.reload();
}
function edit(data)
{
    let obj=JSON.parse(localStorage.getItem(data));
    document.getElementById('amount').value=obj.amount;
    document.getElementById('description').value=data;
    document.getElementById('categorys').value=obj.category;
    localStorage.removeItem(data);
    let x=document.getElementById('showdata');
    x.addEventListener("onclick",xyz);


    
}





