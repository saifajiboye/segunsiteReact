import { Container, Row, Col} from 'reactstrap';
import CampsiteDetail from './CampsiteDetail';
import CampsitesList from './CampsitesList';
import { selectCampsiteById } from './campsitesSlice';
import { useState } from 'react';



const CampsitesDirectoryPage = () => {
   const [campsiteId, setCampsiteId] =useState(0);
   const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            <Row>
                <Col sm='5' md='12'>
                    <CampsitesList setCampsiteId={setCampsiteId}/>
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;