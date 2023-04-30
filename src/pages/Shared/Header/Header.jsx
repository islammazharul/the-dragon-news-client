
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Container } from 'react-bootstrap';



const Header = () => {



    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-primary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('LLLL')}</p>
            </div>

        </Container>

    );
};

export default Header;