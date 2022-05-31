import { createRoot } from 'react-dom/client'
import HeroesApp from './HeroesApp'

const containerApp = document.getElementById('root')
const root = createRoot(containerApp)

root.render(
    <HeroesApp />
)