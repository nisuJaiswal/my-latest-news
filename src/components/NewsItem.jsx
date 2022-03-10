import { Card, Button, Badge } from 'react-bootstrap';
import './newsitem.css'

const NewsItem = ({ title, desc, imgUrl, readMore, author }) => {
    return (

        <Card style={{ width: '30rem' }} className='my-3' >
            <div className="badgeContainer my-1">
                <Badge bg="danger" style={{ width: 'inherit', fontSize: '16px' }}>{author}</Badge>
            </div>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title className='fs-2'>{title}...</Card.Title>
                <Card.Text className='fs-4'>
                    {desc}...
                </Card.Text>
                <Button href={readMore} variant="primary" className='fs-5'>Read More </Button>
            </Card.Body>
        </Card>
    )
}

export default NewsItem
