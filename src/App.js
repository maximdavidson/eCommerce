import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this)
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }


  }
}

export default App;