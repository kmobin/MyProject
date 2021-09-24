import Carousel from 'react-bootstrap/Carousel'
const Home=()=>{
    return (
        <>
        <div id="Main">
            <Carousel>
                <Carousel.Item>
                <img className="d-block w-100" src="./Images/walmart.jpg" alt="First slide" />
                <Carousel.Caption>
                    <h3 class="centered">WELCOME TO INVENTORY STORE</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="./Images/walmartsix.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="./Images/walmartseven.jpg" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            
        </div>
    </>
    )
}

export default Home