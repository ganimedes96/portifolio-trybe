

const lightMode =  document.getElementById('toggle').addEventListener
    ('click',()=>{
        document.getElementsByTagName('body' )[0].classList.toggle('light-mode');
        document.getElementsByTagName('button')[0].classList.toggle('btn')
        document.getElementsByTagName('a')[0].classList.toggle('connect')
    })

console.log(lightMode)