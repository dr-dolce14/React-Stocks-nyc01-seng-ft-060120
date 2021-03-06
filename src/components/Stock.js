import React from 'react'

class Stock extends React.Component {
  
  stockAction = () => {
    console.log('clicked')
    this.props.stockAction(this.props.stock)
  }

  render () {
    return (
      <div>

      <div className="card">
        <div className="card-body" onClick={this.stockAction}>
          <h5 className="card-title">{
              this.props.stock.name
            }</h5>
          <p className="card-text">
            {this.props.stock.ticker}: {this.props.stock.price}</p>
        </div>
      </div>
  
  
    </div>


    )
}
}

export default Stock
