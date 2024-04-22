import React ,{lazy,Suspense} from 'react'
import { Route,Routes } from 'react-router-dom'
import Loading from '../Common/Loading';


const Dashboard = lazy(() => import("./pages/dashboard"));


function Navigat() {
  return (
    <>
        <Route
          path="/login2"
          element={
            <Suspense fallback={<Loading />}>
              <Login2 />
            </Suspense>
          }
        />
    </>
  )
}

export default Navigat
