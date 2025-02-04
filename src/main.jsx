import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.jsx'
import './index.scss'
import { GlobalPRovider } from './Provider.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<GlobalPRovider>
				<App />
			</GlobalPRovider>
		</BrowserRouter>
	</StrictMode>
)
