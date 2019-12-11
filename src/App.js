import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'

function App() {
  return (
    <div className="list">
	<div className="card">
            <div className="card-img">
	    	<img 
			src="https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg"			
			alt="BMW M2 Coupe">
		</img>
	    </div>	
	    <h3>BMW M2 Coupe</h3>
            <p>20000</p>
        </div>,
	
	<div className="card">
            <div className="card-img">
                <img
                        src="https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598"
                        alt="Audi TT">
                </img>
            </div>
            <h3>Audi TT</h3>
            <p>180000</p>
        </div>,
	
	<div className="card">
            <div className="card-img">
                <img
                        src="https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2"
                        alt="Mercedes amg coupe">
                </img>
            </div>
            <h3>Mercedes amg coupe</h3>
            <p>20000</p>
        </div>	
    </div>
  );
}

export default App;
