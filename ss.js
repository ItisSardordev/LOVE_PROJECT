const div = document.querySelector('.sd'),
btn = document.querySelector('button');
function counter(){
    let count = 0;
    time = setInterval(() => {
        if(count > 100){
              div.innerHTML = `<p  style='  font-family: "Roboto";
        font-weight: 600;
      font-size: 45px;'>MY LOVE TO YOU <span style='color:red;'>❤</span>: </p><h1 class = 'ff' style='  font-family: "Roboto";
        font-weight: 600;
      font-size: 45px;
      color: #810000; margin-left: 30px;'>ERROR CAN'T BE COUNTED!!!</h1>
      <h2 style='  font-family: "Roboto";
        font-weight: 600;
      font-size: 75px;
      color: #810000;'>SEE 👀 I LOVE YOU SO MUCH 😊</h2>`;
        }else{
              div.innerHTML = `<p style='  font-family: "Roboto";
        font-weight: 600;
      font-size: 45px;'>MY LOVE TO YOU <span style='color:red;'>❤</span>: </p> <h1 class = 'fg' style='  font-family: "Roboto";
        font-weight: 600;
      font-size: 45px; margin-left: 30px;'> ${count}%</h1>`;
              count++;
        }
    },100);
}

btn.addEventListener('click', () => {
counter();
})