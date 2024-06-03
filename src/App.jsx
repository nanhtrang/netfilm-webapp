import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import LandingPage from './pages/landing/LandingPage.jsx';
import {updateLang} from './store/feature/applicationSlice';
import { useLocation } from 'react-router-dom';

function App() {
  // const { i18n, t } = useTranslation();
  //
  // const [count, setCount] = useState(0)
  // const [message, setMessage] = useState('text')
  // const dispatch = useDispatch()
  // const lang = useSelector(state => state.applicationSlice.lang)
  //
  // const onChangeLang = (e) => {
  //   const lang_code = e.target.value;
  //   i18n.changeLanguage(lang_code);
  //   dispatch(updateLang(lang_code))
  // };
  //
  // const clickBtn = () => {
  //   setCount(count + 1)
  //   setMessage('this is count = 123123 ' + count)
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //   }, 2000);
  // }, [message])
  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const location = useLocation()

  useEffect(() => {
    console.log('Location changed!', location.pathname);
  }, [location])

  return (
    <>
      {!isLogin && !isAdmin && (
        <LandingPage/>
      )}
    </>
  )
}

export default App
