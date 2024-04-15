import Header from './components/header.jsx';
import Content from './components/content.jsx';
import SidePanel from './components/sidepanel.jsx';

function App() {
  return (
      <>
    <div className="top-level">
      <SidePanel/>
      <Header name="Shalom Castelino" title="Software Engineer" mail="shalom@mail.com" phone="8600959116" website="mail.shalom.com"/>
      <Content/>  
    </div>
    </>
  )
}

export default App
