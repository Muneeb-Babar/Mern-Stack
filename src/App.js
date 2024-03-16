import { PersistGate } from 'redux-persist/integration/react'
import './App.css';
import Router from './config/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {store,persistor} from './Store'



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App;
