
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';



const Header = () => {



    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-primary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('LLLL')}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee className='text-danger' speed={100} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.......I can be a React component, multiple React components, or just some text.......
                </Marquee>
            </div>
        </Container>

    );
};

export default Header;