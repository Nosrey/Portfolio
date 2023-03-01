import profilePic from '../../../Images/profilePic.jpeg'
import mailImg from '../../../Images/mailImg.png'
import linkedinImg from '../../../Images/linkedinImg.png'
import githubImg from '../../../Images/githubImg.png'

const HomeHeader = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div id='homeHeaderInfo'>
                <div id='homeMySelf'>
                    <img className="rounded-full w-96 h-96 object-cover border-5 border-white shadow-md" src={profilePic} alt='profile' />
                    <h2>Yerson Rico</h2>
                    <h1>Desarrollador Web</h1>
                </div>
                <div id='homeMyInfo'>
                    <p><strong>email:</strong> nosrey135@gmail.com</p>
                    <img src={mailImg} alt='email icon' />
                </div>
            </div>
            <div id='homeFooterInfo'>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Continuar
                    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div id='homeMySocial'>
                    <button onClick={
                        () => {
                            window.open('https://www.linkedin.com/in/yerson-rico-7b1b1b1b9/')
                        }
                    }>
                        <img src={linkedinImg} alt='linkedin icon' className='h-auto w-96' />
                    </button>
                    <button>
                        <img src={githubImg} alt='github icon' className='h-auto w-96' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;