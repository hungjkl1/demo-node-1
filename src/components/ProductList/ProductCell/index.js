import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './styles.scss'
const ProductCell = ({item}) => {
    return (
        <div className='col-md-3 p-2'>
        <Card className='product'>
            <Card.Img variant="top" src={item.image} className='product-img'/>
            <Card.Body>
            <Card.Title className='product-tittle'>{item.name}</Card.Title>
            <Card.Text>
              {item.price}
            </Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
        </div>
    );
}

export default ProductCell;
