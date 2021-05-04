import React, { FunctionComponent, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { MyCV } from './pages/MyCV'
import { CVEdit } from './pages/CV-Edit'
import { Profile } from './pages/Profile/information'
import { actionGetUserInfo } from './store/login/actions'
import { UserInfo } from './utils/types/user'
import { Header } from './components/Header'
import { actionSetLoading } from './store/ui/actions'
import { Loading } from './components/Loading'
import { AvatarPicker } from './components/AvatarPicker'
import { Landing } from './pages/Landing'

export interface Props { }

const Routes: FunctionComponent<Props> = () => {
  const loginInfo: UserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  console.log('====================================');
  console.log('loginInfo', loginInfo);
  console.log('====================================');
  const avatar = useMemo(() => loginInfo?.avatar, [loginInfo])
  return (
    <>
      <Loading />
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/landing">
          <Landing />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        {!avatar && <AvatarPicker />}
        <Route exact path="/my-profile">
          <Profile />
        </Route>
        <Route exact path="/my-cv">
          <MyCV />
        </Route>
        <Route exact path="/edit-cv">
          <CVEdit />
        </Route>
      </Switch>
    </>
  )
}

export default Routes
