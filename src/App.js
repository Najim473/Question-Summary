// import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

// import SurveyForm from './view/survey-form/survey-form';
import SurveyIntro from './view/survey-intro/survey-intro';
import QSummery from './components/QSummery/QSummery';
// import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <SurveyIntro />
      <QSummery />
      {/* <SurveyForm /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
