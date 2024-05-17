import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from './plugins/i18n/languagues'
import { useDispatch, useSelector } from 'react-redux'
import { updateLang } from './store/feature/applicationSlice'
import { Button } from 'react-bootstrap'

function App() {
  const { i18n, t } = useTranslation();

  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('text')
  const dispatch = useDispatch()
  const lang = useSelector(state => state.applicationSlice.lang)

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    dispatch(updateLang(lang_code))
  };

  const clickBtn = () => {
    setCount(count + 1)
    setMessage('this is count = 123123 ' + count)
  }
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 2000);
  }, [message])

  return (
    <>
      <RouterProvider router={router} />
      <Button variant='danger'>button</Button>
      <input type="text" className='form-control' />
      <button>asd</button>
      <select className='form-select' defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <h1 className="text-3xl font-bold underline">
        Hello world! {t("home")}
      </h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + {lang}</h1>
      <div className="card">
        <button onClick={clickBtn}>
          count is {count} {t("about")}
        </button>
        <div>{message}</div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
