import quizimg from '../assets/quiz-logo.png'
export default function Header() {
    return <header className='text-center '>
        <img src={quizimg} alt="quiz logo" />
        <h1 className='text-2xl'>React Quiz</h1>
    </header>
}