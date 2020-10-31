const btn = document.getElementById('bgBtn');
const code = document.getElementById('code');

btn.addEventListener('click',()=>{
    document.body.style.background = '#' + colourPicker();

    console.log('#'+ colourPicker());
    
   
});

function colourPicker(){
   let randomClr = Math.floor(Math.random()*16777215).toString(16);
   
   return randomClr;

}
