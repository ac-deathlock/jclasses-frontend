import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Example2 = (props) => {
    return (
        <div style={{ width:"80vw",display:'inline-block'}}>

            <ListGroup>
                <ListGroupItem active>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
            </ListGroupItem>

                <ListGroupItem>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    </ListGroupItemText>
                </ListGroupItem>


            </ListGroup>



        </div>




    );
};

export default Example2;