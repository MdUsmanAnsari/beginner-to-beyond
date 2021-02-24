
/*
  @author Md.Usman Ansari
  Twitter : https://twitter.com/MdUsmanAnsari_
*/

const imgContainer =  document.querySelector('.card__img'),
        heading = document.querySelector('.heading'),
        para = document.querySelector('.para');


setTimeout(() => {
        const img = document.createElement('img');
        img.setAttribute('src','./pic.jpg')
        imgContainer.appendChild(img)

        heading.textContent ='Aaliyah';
        para.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque unde porro commodi. Velit, quos voluptate. Molestiae';

        imgContainer.classList.remove('loading');
        heading.classList.remove('loading');
        para.classList.remove('loading');
        
}, 3000);

