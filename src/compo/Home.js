import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../reduxwork/CartSlice';
import { AllFood } from '../utils';
import requestInstance from '../utils/axios_instance';

const Home = () => {
    const [foodData, setfoodData] = useState([]);
    const dispatcher = useDispatch();
    const tokem = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTYxYmFmNWIxMTNlNThhNDZmMzY3YyIsImlhdCI6MTY4MzY0MTEwNn0.iiT0iQvdu0ILSEE2GLD7Q0UUipybXh_USVdB4xfFSQI"
    const { UserData } = useSelector((state) => state.user)
    useEffect(() => {

        requestInstance(UserData.idToken).get(AllFood)
            .then((result) => {
                setfoodData(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])


    return (
        <>
            <Container>
                <Row>
                    {
                        foodData.map((food) => {
                            return (
                                <Col sm={12} md={4} lg={3}>
                                    <Card className='card'>
                                        <Card.Img className='Image' src={"http://localhost:5000".concat(food.foodImage)} />
                                        <Card.Body className='card-body'>
                                            <Card.Title>{food.foodName}</Card.Title>
                                            <Card.Subtitle>{food.foodPrice}</Card.Subtitle>
                                            <Card.Text>{food.foodType}</Card.Text>
                                            <Card.Text>{food.foodCategory}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button onClick={() => { dispatcher(addItem(food)) }} >Add To Cart</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )

                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Home