const moreBtn = document.querySelector('.videoInfo .metadata .title .moreBtn');
const title =document.querySelector('.videoInfo .metadata .title span');

moreBtn.addEventListener('click',() =>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});
