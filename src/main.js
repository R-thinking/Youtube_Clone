'use strict';

const moreBtn = document.querySelector('.videoInfo .metadata .title .moreBtn');
const title = document.querySelector('.videoInfo .metadata .title span');
const subscribe = document.querySelector('.channel .subscribe');
const actionBtn = document.querySelectorAll('.videoInfo .actionBtns .toggle');

moreBtn.addEventListener('click',() =>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});


subscribe.addEventListener('click',() =>{
    let result = subscribe.classList.toggle('subscribed');
    if(result) {
        subscribe.textContent = "subscribed";
    }
    else {
        subscribe.textContent = "subscribe";
    }
});

    actionBtn
    .forEach((Btn) =>{
        Btn.addEventListener('click',() =>{
            Btn.classList.toggle('active');
        });
    });
