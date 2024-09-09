import { useContextGlobal } from '../Components/utils/global.context'

const Footer = () => {
  const { theme } = useContextGlobal(); 
  return (
    <footer>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
        <p>Theme: {theme.theme}</p>
    </footer>
  )
}

export default Footer
