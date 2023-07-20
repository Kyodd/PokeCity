window.addEventListener('load', (e) => {
    const imgList = document.querySelectorAll('.pkb_size');
    imgList.forEach((img) => {
        img.addEventListener('click', (e) => {
            for (let i = 0; i < imgList.length; i++) {
                imgList[i].classList.remove('pkb_anim')
                
            }
            img.classList.toggle('pkb_anim')
        });
    });

    const starterList = document.querySelectorAll('.pkm_starter');

    starterList.forEach((starter) =>{
        starter.addEventListener('click', (e) =>{
            for (let i = 0; i < imgList.length; i++) {
                imgList[i].classList.remove('pkb_anim')
                
            }
            imgList[e.target.id].classList.toggle('pkb_anim')
        })
    })
});

