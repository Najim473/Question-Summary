/**
 * Title: survey introduction page
 * Description: this page leads to survey form
 */
// dependencies
import React from "react";
import siStyle from './styles.module.css';
import women from '../images/women.png';
import wave from '../images/Faethm footer wave 2.svg'
import dashboard from '../images/sample-page.png'
const SurveyIntro = () => {
    return (
        <div>
            {/* <div className="row">
                <div className="col-3 d-none d-md-block">
                    <img className="women-img h-75" src={women} alt="women" />
                </div>
                <div className="col-12 col-md-6 text-center pt-5">
                    <h2 className="mt-5">We’re here to help you.</h2>
                    <h3 className="pt-5">To do that, let’s get to know you better.</h3>
                    <h3 className="pt-5">Please complete a short survey to personalise your experience with us.</h3>
                    <button className="next-button border-0 text-light fs-4 mt-5">Next</button >
                </div>
                <div className="col-3 d-none d-md-block">
                    <img className="pt-3 pe-3" src={dashboard} alt="dashboard" />
                </div>
            </div>
            <img src={wave} alt="" /> */}
            <div className={`row ${siStyle.container}`}>
                <div className={`col-3 ${siStyle.women}`}>
                    <img src={women} alt="women" />
                </div>
                <div className={`col-6 col-md-6 text-center pt-3 p-0 ${siStyle.text}`}>
                    <h2 >We’re here to help you.</h2>
                    <h2 >To do that, let’s get to know you better.</h2>
                    <h4 >Please complete a short survey to personalise your experience with us.</h4>
                    <div className={siStyle.Btn}>
                        <button className={siStyle.nextBtn} type="button" >Next</button>
                    </div>
                </div>
                <div className={`col-3  ${siStyle.dashboard}`}>
                    <img className="pt-3 pe-3" src={dashboard} alt="dashboard" />
                </div>

            </div>
            <div className={siStyle.wave}>
                <img src={wave} alt="wave" />
            </div>
        </div >
    );
}


// export the page
export default SurveyIntro;

{/* <div className=`row ${styles.myCustomClassName}` /> */ }
