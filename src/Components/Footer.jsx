import { useContextGlobal } from '../Components/utils/global.context'

const Footer = () => {
  const { state } = useContextGlobal(); 
  return (
    <footer className={`footer ${state.theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <p>Theme: {state.theme === 'Dark' ? "🌙" : "🌞"}</p>
    </footer>
  )
}

export default Footer
