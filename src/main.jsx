import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './plugins/i18n/index.js'
import {Provider} from 'react-redux'
import store from './store/index.js'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} >
      <App/>
    </RouterProvider>
  </Provider>
)
