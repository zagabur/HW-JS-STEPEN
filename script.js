

let x =+prompt ('введите число');
let y =+prompt ('введите степень')
if (!isNaN(x) && !isNaN(y)) {
    
    x=x**y; 
    document.write('Ответ = '+x);
}
else {
    x='not a number';
    alert(x);
} 