const btn=document.querySelector('.nav i');
const navBar=document.querySelector('nav');
const btnclose=document.querySelector('nav span');
const container=document.querySelector('.container')
btn.addEventListener('click',(e)=>
{
    navBar.classList.toggle('active');
    btn.classList.add('btnHide');
    container.classList.add('btnHide');
})
btnclose.addEventListener('click',(e)=>
{
    navBar.classList.remove('active');
    btn.classList.remove('btnHide');
    container.classList.remove('btnHide');
})