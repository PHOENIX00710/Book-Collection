const list=document.querySelector('ul');
//const list=document.getElementsByTagName('ul')[0];
// Delete button
const term='btn';
list.addEventListener('click',function(e){
    let classes=e.target.className;
    if(classes.toLowerCase().indexOf(term) != -1){
        let li=e.target.parentElement;
        list.removeChild(li);
    }
});

const add=document.querySelector('#add-btn');
const bookName=document.querySelector('#add-book');
var name="";
// Procuring book name
bookName.addEventListener('keyup',function(e){
    name=e.target.value;
})
// Adding the book
add.addEventListener('click',function(e){
    e.preventDefault();
    bookName.value="";
    let book=document.createElement('li');
    let title=document.createElement('div');
    let delBtn=document.createElement('button');

    title.textContent=name;
    delBtn.textContent="delete";

    title.classList.add('mx-2','p-1','display-6','fw-200');
    book.classList.add('d-flex','justify-content-between','my-4');
    delBtn.classList.add('btn','btn-secondary');

    book.append(title);
    book.append(delBtn);

    list.append(book);
})
// Searching Custom Filter

