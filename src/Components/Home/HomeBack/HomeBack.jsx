import techJs from '../../../Images/tech/js.png'
import techNode from '../../../Images/tech/node.png'
import techReact from '../../../Images/tech/react.png'
import techPostgres from '../../../Images/tech/postgres.png'

const HomeBack = () => {
    return (
        <div className={'bg-my-background'}>
            <h1>Yerson Rico, desarrollador web</h1>
            <ul>
                <li>
                    <img src={techJs} alt='techJs' />
                </li>
                <li>
                    <img src={techNode} alt='techNode' />
                </li>
                <li>
                    <img src={techReact} alt='techReact' />
                </li>
                <li>
                    <img src={techPostgres} alt='techPostgres' />
                </li>
            </ul>
        </div>
    );
}

export default HomeBack;