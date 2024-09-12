import { useContextGlobal } from '../Components/utils/global.context'

const Footer = () => {
  const { theme } = useContextGlobal(); 
  return (
    <footer className={`footer ${theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <p>Theme: {theme}</p>
    </footer>
  )
}

export default Footer
