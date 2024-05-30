import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './plugins/i18n/index.js'
import {Provider} from 'react-redux'
import store from './store/index.js'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
