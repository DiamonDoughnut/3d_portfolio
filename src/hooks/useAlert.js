import {useState} from 'react'

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, type: 'danger', text: '' });

  const showAlert = ({text, type = 'danger'}) => {
    setAlert({show: true, type, text})
  }

  const hideAlert = () => {
    setAlert({show: false, type: 'danger', text: ''})
  }
    
  return { alert, showAlert, hideAlert }
}

export default useAlert