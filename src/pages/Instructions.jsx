import Nav from "../components/Nav";
import { A } from '@solidjs/router';
import "../instructions.css";


function Quiz() {
return (
<nav class="bg-[#D6EADF]">
<div class="flex flex-row  my-auto items-center justify-center mb-3 py-6 ">
        <img  class="logo" src="SmallLogo.png" alt=""  />
      <h1 class="text-[#5F7BB1] headingFont">Instructions </h1>
    </div>
    <nav class="flex flex-col my-auto items-center space-around">
    <div class="py-6 border-b border-black  ">
    <iframe class="rounded-2xl"width="350" height="188" src="https://www.youtube.com/embed/62D_qlms-mI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3 class="text-[#1256D9] text-xl">Learn how to wash your <br></br>hands properly</h3>
    </div>
    <div class="py-6 border-b border-black">
    <iframe class="rounded-2xl" width="350" height="188" src="https://www.youtube.com/embed/iqEWFmLuLTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3 class="text-[#1256D9] text-xl">Learn how to wash your <br></br>hair properly</h3>
    </div>
    <div class="py-6 border-b border-black">
    <iframe  class="rounded-2xl" width="350" height="188" src="https://www.youtube.com/embed/rh80Lff9P4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3 class="text-[#1256D9] text-xl" >Learn how to wash your <br></br>feet properly</h3>
    </div>
    <div class="py-6 border-b border-black">
    <iframe class="rounded-2xl" width="350" height="188" src="https://www.youtube.com/embed/Ge9WGTp5y3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3 class="text-[#1256D9] text-xl">Learn proper oral Hygiene</h3>
    </div>
    </nav>
    <br />
    <A href='/quiz' >
    <p class="flex flex-row  my-auto items-center justify-center underline text-xl">Take a quiz</p>
    </A>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Nav></Nav>
    </nav>
);s
}

export default Quiz;

