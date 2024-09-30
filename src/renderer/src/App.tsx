import Versions from './components/Versions'
//import electronLogo from './assets/electron.svg'
import jccLogo from './assets/jcc.png'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={jccLogo} />
      <div className="text-pink-600 font-bold text-center">julio.corbaz@gmail.com</div>
      <div className="text">
        <span className="ts">App en Electron con React y TypeScript</span>
      </div>
      <p className="text-purple-500 font-bold text-center">Powered by JCC Producciones - 2024</p>
      <div className="actions">
        <div className="action">
          <a href="https://www.linkedin.com/in/julio-corbaz/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="text-red-600 action ">
          <a href="https://github.com/corbaz" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
      <Versions />
    </>
  )
}

export default App
