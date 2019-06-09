'use strict'

function callApi(url)
{
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            for (const entry of json.hits) {

                console.log(`title : ${entry.title}  , url : ${entry.url}`);
                createTable(entry.title,entry.url);
            }
        })
        .catch(error => {
           console.error(error)
        })
}

function addCell(tr, val) {

    var td = document.createElement('td');
    td.innerHTML = val;
    tr.appendChild(td)
}

function addRow(tbl, val_1, val_2) {

    var tr = document.createElement('tr');
    addCell(tr, val_1);
    addCell(tr, val_2);
    tbl.appendChild(tr)
}

function createTable(title,url){

   var table = document.getElementById('tb');
   addRow(table,title,url);

}

callApi('https://hn.algolia.com/api/v1/search?query=react');
