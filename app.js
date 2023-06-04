clearFields()  
let add_bugget=[]
let sum=0;
function adding_bugget() {
    let amount_bugget = +document.getElementById('search').value;
    add_bugget.push(amount_bugget);
    sum=0;
    for (var i = 0; i < add_bugget.length; i++) {
        if (typeof add_bugget[i] === 'number') {
          sum += add_bugget[i];
        }
      }
      let money_davail=document.getElementById('money_davail');
      money_davail.innerHTML=sum; 
      clearFields()  
}

document.getElementById('search_button').addEventListener('click', function() {
adding_bugget()});

function Transaction(description, amount, date, select) {
    this.description = description;
    this.amount = amount;
    this.date = date;
    this.select = select;
  }
  var transactions = [];
  
  function addTransaction() {
    var description = document.getElementById('description').value;
    var amount = document.getElementById('amount').value;
    var date = document.getElementById('date').value;
    var select = document.getElementById('dropdownMenu').value;

    if(description ==='' || amount ===''){
      alert("please fill amount and description field")

    }

    else{


      if(amount>sum || sum===0){
        alert("insert short amount")
        clearFields()  
    }

    else{
    var transaction = new Transaction(description, amount, date, select);

    let totalAmount = 0;
    let spent=0;
    function calculateTotalAmount() {
    
  
      for (var i = 0; i < transactions.length; i++) {
          totalAmount += Number(transactions[i].amount) ;
        }
      spent=sum-totalAmount;  
      document.getElementById('money_dspent').textContent = spent;
      }
  
    transactions.push(transaction);
  
    
    displayTransactions();
    calculateTotalAmount()
    }

    }


    
  
   
  }

  

function deleteTransaction(index) {
    transactions.splice(index, 1);
    displayTransactions();
  }
  
  
function displayTransactions() {
    var transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = ''; 

    for (var i = 0; i < transactions.length; i++) {
      var transaction = transactions[i];
  
     
      var listItem = document.createElement('li');
  
      
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = (function(index) {
        return function() {
          deleteTransaction(index);
        };
      })(i);


      let word_select;

     if(transaction.select==="option1"){

        word_select="Utility"

     }
     else if(transaction.select==="option2"){

        word_select="Resturant & cafe"

     }
     else if(transaction.select==="option3"){

        word_select="clothes & shopping"

     }

     else{
        word_select="no category selected"
     }
  
  
    var descriptionSpan = document.createElement('span');
    descriptionSpan.className = 'highlight';
    descriptionSpan.textContent = transaction.description;

    var amountSpan = document.createElement('span');
    amountSpan.className = 'highlight';
    amountSpan.textContent = transaction.amount;

    var dateSpan = document.createElement('span');
    dateSpan.className = 'highlight';
    dateSpan.textContent = transaction.date;

    var selectSpan = document.createElement('span');
    selectSpan.className = 'highlight';
    selectSpan.textContent = word_select;

    listItem.appendChild(document.createTextNode('Description: '));
    listItem.appendChild(descriptionSpan);
    listItem.appendChild(document.createTextNode(', Amount: '));
    listItem.appendChild(amountSpan);
    listItem.appendChild(document.createTextNode(', Date: '));
    listItem.appendChild(dateSpan);
    listItem.appendChild(document.createTextNode(', Select: '));
    listItem.appendChild(selectSpan);
    listItem.appendChild(document.createTextNode(' '));
    listItem.appendChild(deleteButton);

    
    transactionList.appendChild(listItem);
    listItem.appendChild(deleteButton);
    clearFields()  
      
    }
  }



function clearFields() {
    var fields = document.querySelectorAll('input, select');
  
    for (var i = 0; i < fields.length; i++) {
      fields[i].value = '';
    }
  }
  