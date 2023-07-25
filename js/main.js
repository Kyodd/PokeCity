function hidebtn() {
    document.getElementById('bulbi').style.display = 'none'
    document.getElementById('salameche').style.display = 'none'
    document.getElementById('carapuce').style.display = 'none'
}

window.addEventListener('load', (e) => {
    hidebtn()
    const imgList = document.querySelectorAll('.pkb_size');
    imgList.forEach((img) => {
        img.addEventListener('click', (e) => {
            for (let i = 0; i < imgList.length; i++) {
                imgList[i].classList.remove('pkb_anim')
                
            }
            hidebtn()
            if (e.target.id.slice(3,4) == 0) {
                document.getElementById('bulbi').style.display = 'block'
            } else{
                if (e.target.id.slice(3,4) == 1) {
                    document.getElementById('salameche').style.display = 'block'
                } else{
                    document.getElementById('carapuce').style.display = 'block'
                }
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
            hidebtn()
            if (e.target.id == 0) {
                document.getElementById('bulbi').style.display = 'block'
            } else{
                if (e.target.id == 1) {
                    document.getElementById('salameche').style.display = 'block'
                } else{
                    document.getElementById('carapuce').style.display = 'block'
                }
            }
            imgList[e.target.id].classList.toggle('pkb_anim')
        })
    })
});