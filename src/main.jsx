import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournalApp } from './JournalApp';
import { Provider } from 'react-redux';
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <JournalApp/>
    </BrowserRouter>
    </Provider>
  </StrictMode>
)
