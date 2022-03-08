<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motivation</title>
    <style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900');


*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
#main{
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: url("/images/Inspirational.jpg");
    text-align: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
h1{
    color: #fff;
    font-size: 50px;
    padding: 20px;
    letter-spacing: 5px;
    text-shadow: 1px 1px 2px black;
  
}
p{
    padding: 30px;
    color:#fff;
    text-shadow: 1px 1px 2px grey, 0 0 1em rgb(29, 29, 31), 0 0 0.2em rgb(42, 42, 44);
    
    
    
}

#click-me {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
  }
  .front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    background: hsl(345deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  #click-me:hover {
    filter: brightness(110%);
  }
  #click-me:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  #click-me:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  #click-me:hover .shadow {
    transform: translateY(4px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  #click-me:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  #click-me:focus:not(:focus-visible) {
    outline: none;
  }
  #message{
    color: #fff;
    padding: 50px;
    margin: 20px;
    background-color:rgba(255, 255, 255, 0.521);
    height: 10px;
    border-radius: 15px;
    line-height: 20px;
    
   
    
}
    </style>
</head>
<body>
    <div id="main">
        <h1>Stay Motivate</h1>
        <p class="question">Do you feel unmotivated?</p>
        <button id="click-me">
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">Click Here</span>
        </button>
        
             <p id="message"></p>
        
        
        
    </div>
    





    <script>
    
    $("#click-me").click(function () {
    let message = Math.floor(Math.random()* 7) 
   

    switch(message){
    case 1: 
    console.log( "“Just one small positive thought in the morning can change your whole day.” — Dalai Lama")
    $("#message").html( "“Just one small positive thought in the morning can change your whole day.” — Dalai Lama")
   break
    case 2: 
    console.log("“Opportunities don't happen, you create them.” — Chris Grosser")
    $("#message").html("“Opportunities don't happen, you create them.” — Chris Grosser")
    break
    case 3: 
    console.log("“Love your family, work super hard, live your passion.” — Gary Vaynerchuk")
    $("#message").html("“Love your family, work super hard, live your passion.” — Gary Vaynerchuk")
    break
    case 4: 
    console.log("“It is never too late to be what you might have been.” — George Eliot")
    $("#message").html("“It is never too late to be what you might have been.” — George Eliot")
    break
    case 5: 
    console.log("“Don't let someone else's opinion of you become your reality” — Les Brown")
    $("#message").html("“Don't let someone else's opinion of you become your reality” — Les Brown")
    break
    case 6: 
    console.log("“If you’re not positive energy, you’re negative energy.” Mark Cuban")
    $("#message").html("“If you’re not positive energy, you’re negative energy.” Mark Cuban")
    break
    case 0: 
    console.log("“I am not a product of my circumstances. I am a product of my decisions.” — Stephen R. Covey")
    $("#message").html("“I am not a product of my circumstances. I am a product of my decisions.” — Stephen R. Covey")
    break
    
   
    }
   
})


function changeBg(){
    const images = [
       "url('/images/motivation.jpg')",
       "url('/images/20499549.jpg')",
       "url('/images/Inspirational.jpg')",
       "url('/images/cro-motivation.jpg')",
       "url('/images/wallpaper.jpg')"


    ]
    const main = document.querySelector('#main')
    const bg = images[Math.floor(Math.random()* images.length)];

    main.style.backgroundImage = bg;

}

setInterval(changeBg, 8000)


    
    
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" 
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" 
    crossorigin="anonymous"></script>
    
</body>
</html>
