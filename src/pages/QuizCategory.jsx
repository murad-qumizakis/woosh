import Nav from '../components/Nav'
import { A } from '@solidjs/router'

const QuizCategory = () => {
    return (


        <div class="bg-[#D6EADF] w-screen h-screen flex m-auto items-center  flex-col -my-4">

            <img src="/wooshLogo.png" class="mt-12 mb-6 w-20 h-20" />
            <p class="text-[#5F7BB1] headingFont text-3xl font-semibold p-2">Pick a quiz!</p>
            <p class="text-[#5F7BB1] headingFont text-3xl font-semibold p-2">And Challenge yourself!</p>
            <div class='grid grid-cols-2 gap-16 mt-8'>

                <div class="text-[#5383DF] bodyFont text-3xl font-light bg-[#F1F7FF] h-36 w-36 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl hover:bg-[#5383DF] hover:text-white cursor-pointer">
                    <A href='/quiz' >
                        Hand<br /> Woosh
                    </A>
                </div>
                <div class="text-[#5383DF]  bodyFont text-3xl font-light bg-[#F1F7FF] h-36 w-36 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl hover:bg-[#5383DF] hover:text-white cursor-pointer">
                    Oral<br /> Woosh
                </div>
                <div class="text-[#5383DF] bodyFont text-3xl font-light bg-[#F1F7FF] h-36 w-36 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl hover:bg-[#5383DF] hover:text-white cursor-pointer">
                    Hair<br /> Woosh
                </div>
                <div class="text-[#5383DF] bodyFont text-3xl font-light bg-[#F1F7FF] h-36 w-36 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl hover:bg-[#5383DF] hover:text-white cursor-pointer">
                    Foot<br /> Woosh
                </div>
            </div>
            <Nav />
        </div>

    )
}

export default QuizCategory;