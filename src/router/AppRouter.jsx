import { Routes,Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import {useSelector} from 'react-redux';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckinAuth } from '../ui';

export const AppRouter = () => {

  const {status} = useSelector(state=>state.auth);

  if(status ==='cheking'){
    return <CheckinAuth/>
  }

  return (

    <Routes>
        {/*Login y Registro*/}
        <Route path='auth/*' element={<AuthRoutes/>}/>
        {/*JournalApp*/}
        <Route path='/*' element={<JournalRoutes/>}/>
    </Routes>

  )
}
