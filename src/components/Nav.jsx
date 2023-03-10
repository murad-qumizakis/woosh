import { A } from '@solidjs/router';

const Nav = () => {
    return (

        <div class='flex bg-[#9FC0FF] w-screen h-24 absolute bottom-0 justify-around p-2 overflow-auto' style="position: fixed">

            <A href='/home' >
                <div class='flex flex-col m-auto justify-center items-center'>
                    <div class="text-[#5383DF] text-3xl font-light bg-white h-16 w-16 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                        <img src="/home.png" class="h-10 w-10 " />
                    </div>
                    <p class='text-sm'>
                        Home
                    </p>
                </div>
            </A>

            <A href='/quizcategory' >
                <div class='flex flex-col m-auto justify-center items-center'>
                    <div class="text-[#5383DF] text-3xl font-light bg-white h-16 w-16 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                        <img src="/quiz.png" class=" h-10 w-10  " />
                    </div>
                    <p class='text-sm'>
                        Quiz
                    </p>
                </div>
            </A>

            <A href='/instructions' >
                <div class='flex flex-col m-auto justify-center items-center'>
                    <div class="text-[#5383DF] text-3xl font-light bg-white h-16 w-16 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                        <img src="/instruction.png" class=" h-10 w-10 " />
                    </div>
                    <p class='text-sm'>
                        Instruction
                    </p>
                </div>
            </A>
            <A href='/resource' >
                <div class='flex flex-col m-auto justify-center items-center'>
                    <div class="text-[#5383DF] text-3xl font-light bg-white h-16 w-16 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                        <img src="/resource.png" class=" h-10 w-10 " />
                    </div>
                    <p class='text-sm'>
                        Resource
                    </p>
                </div>
            </A>
        </div >
    )
}

export default Nav;