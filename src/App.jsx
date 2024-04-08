import Header from './components/header.jsx';
import Content from './components/content.jsx';

function App() {
  return (
    <div>
      <Header name="Shalom Castelino" title="Software Engineer" mail="shalom@mail.com" phone="8600959116" website="mail.shalom.com"/>
      <Content/>  
      <SidePanel/>
    </div>
  )
}

export default App
