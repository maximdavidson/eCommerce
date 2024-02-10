import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair.jpg',
          desc: 'Lorem text is here.',
          category: 'chairs',
          price: '39.99'
        },
        {
          id: 2,
          title: 'Столик журнальный',
          img: 'table.jpg',
          desc: 'Lorem text is here.',
          category: 'tables',
          price: '99.99'
        },
        {
          id: 3,
          title: 'Диван бежевый',
          img: 'sofa.jpg',
          desc: 'Lorem text is here.',
          category: 'sofas',
          price: '397.99'
        },
        {
          id: 4,
          title: 'Лампа напольная',
          img: 'lamp.jpg',
          desc: 'Lorem text is here.',
          category: 'lamps',
          price: '25.99'
        },
        {
          id: 5,
          title: 'Плед белый',
          img: 'blanket.jpg',
          desc: 'Lorem text is here.',
          category: 'blankets',
          price: '16.99'
        },
      ]
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;