
import logo from './logo.svg'; // Декларативный стиль. На прямую сообщаем, что хотим импортировать logo из logo.svg

import './App.css';

export const App = () => {
	return (
		<div className="App">

			<header className="App-header">{/* Императивный  стиль. Мы явно указываем, что у этого элемента должен быть класс  App-header*/}

				<img src={logo} className="App-logo" alt="logo" />{/* Декларативный стиль. Без указания точного способа загрузки или отображения изображения. Просто указываем, что хотим вывести изображение с именем logo */} {/* Императивный  стиль. Мы явно указываем, что у этого элемента должен быть класс  App-logo*/}

				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">{/* Императивный  стиль. Мы явно указываем, что у этого элемента должен быть класс  App-link. Также, мы явно устанавливаем значения в аттрибуты href, target и rel. Это явное указание того, как должна выглядеть ссылка и что она должна делать*/}
					Learn React
				</a>
			</header>
		</div>
	);
};
