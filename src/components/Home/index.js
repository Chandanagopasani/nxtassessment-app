import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const renderInstructions = () => (
    <div className="instructions-container">
      <h1 className="instructions-heading" data-testid="instructionsHeading">
        Instructions
      </h1>
      <ol className="instructions-list-container">
        <li className="list-instructions">
          Total Questions:
          <span className="span"> 10</span>
        </li>
        <li className="list-instructions">
          Types of Questions:
          <span className="span"> MCQS</span>
        </li>
        <li className="list-instructions">
          Duration:
          <span className="span"> 10 Mins</span>
        </li>
        <li className="list-instructions">
          Marking Scheme:
          <span className="span"> Every correct response get 1 mark</span>
        </li>
        <li className="list-instructions">
          All the progress will be lost,if you reload during the assessment
        </li>
      </ol>
      <Link to="/assessment" className="start-link">
        <button
          className="start-btn"
          type="button"
          data-testid="startAssessementButton"
        >
          Start Assessment
        </button>
      </Link>
    </div>
  )
  const renderHome = () => (
    <div className="home-container">
      <img
        src="https://res.cloudinary.com/dngzbeidb/image/upload/v1726565279/ymgzcw3f2jrxnldmgkrr.png"
        className="home-img"
        alt="assessment"
      />
      {renderInstructions()}
    </div>
  )
  return (
    <div className="home-bg-container">
      <Header />
      {renderHome()}
    </div>
  )
}
export default Home
