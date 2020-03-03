import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  regionData,
  reasonData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  Table, 
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';


const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const genRegionData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Game City Branch', 'Molepolole Branch', 'Francistown Branch', 'Ghanzi Branch'],
  };
};

const genReasonData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['9 month Tribesman', '3 month Tribesman', 'Inquiry', 'Complaint', 'Other'],
  };
};

const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: DAYS,
    datasets: [
      {
        label: 'Average team performance',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      }
    ],
  };
};

const genLineBarData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: DAYS,
    datasets: [
      {
        label: 'My Performance',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'Average Team Performance',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      }
    ],
  };
};

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <React.Fragment>

      <Page
        className="DashboardPage"
        title="Admin Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Number of Users"
              number="85"
             
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Number of Leads"
              number="123"
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Assigned Leads"
              number="50"
             
             
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Unassigned Leads"
              number="73"
             
            />
          </Col>
        </Row>

        <Row>

        <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Leads by Location</CardHeader>
              <CardBody>
                {regionData.map(
                  ({ id, image, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      image={image}
                      title={title}
                      description={description}
                      right={right}
                    />
                  ),
                )}
              </CardBody>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Leads by Location</CardHeader>
            <CardBody>
              <Pie data={genRegionData()} />
            </CardBody>
          </Card>
        </Col>

        </Row>

        <Row>

        <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Leads by Reason</CardHeader>
              <CardBody>
                {reasonData.map(
                  ({ id, image, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      image={image}
                      title={title}
                      description={description}
                      right={right}
                    />
                  ),
                )}
              </CardBody>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Leads by Reason</CardHeader>
            <CardBody>
              <Pie data={genReasonData()} />
            </CardBody>
          </Card>
        </Col>

        </Row>

        <Row>
          
        <Col xl={8} lg={12} md={12}>
          <Card>
            <CardHeader>Daily Aggregated Team Performance</CardHeader>
            <CardBody>
              <Line data={genLineData({ fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>

        <Col lg="4" md="4" sm="4" xs="5">
            <InfiniteCalendar
              selected={today}
              minDate={lastWeek}
              width="100%"
              theme={{
                accentColor: primaryColor,
                floatingNav: {
                  background: secondaryColor,
                  chevron: primaryColor,
                  color: '#FFF',
                },
                headerColor: primaryColor,
                selectionColor: secondaryColor,
                textColor: {
                  active: '#FFF',
                  default: '#333',
                },
                todayColor: secondaryColor,
                weekdayColor: primaryColor,
              }}
            />
          </Col>
      


        </Row>



        <Row>

          
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Top 5 Sales People</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'date',
                    'completion',
                    '%',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>

             
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Bottom 5 Sales People</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'date',
                    'completion',
                    '%',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>


       <Row>
       <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Add User</CardHeader>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label for="exampleName">Name</Label>
                  <Input
                    type="text"
                    name="text"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSurname">Surname</Label>
                  <Input
                    type="text"
                    name="text"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Branch</Label>
                  <Input type="select" name="select">
                    <option value="">Select Branch...</option>
                    <option value="Main Branch">Main Branch (Main Mall)</option>
                    <option value="Mall Branch">Mall Branch (Game City)</option>
                    <option value="Molepolole Branch">Molepolole Branch (Mafenyatlala Mall)</option>
                    <option value="Francistown Branch">Francistown Branch (Galo Mall)</option>
                    <option value="Ghanzi Branch">Ghanzi Branch</option>
                  </Input>
                </FormGroup>
                <Button type="submit">Add</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>              
       </Row>
   
       <Row>
        <Col md="12" sm="12" xs="12">
              <Card>
                <CardHeader>Sales Team</CardHeader>
                <CardBody>
                  <UserProgressTable
                    headers={[
                      <MdPersonPin size={25} />,
                      'name',
                      'date',
                      'completion',
                      '%',
                    ]}
                    usersData={userProgressTableData}
                  />
                </CardBody>
              </Card>
            </Col>
     
      </Row>  

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card className="mb-3">
            <CardHeader>Unassigned Leads</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Lead ID</th>
                    <th>Name</th>
                    <th>Cell no.</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark Lewis</td>
                    <td>71454454</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob Thornton</td>
                    <td>72255456</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>711454454</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Reasign Lead</CardHeader>
            <CardBody>
              <Form inline>
                <FormGroup>
                  <Label for="exampleEmail" hidden>
                    Lead ID
                  </Label>
                  <Input type="text" name="text" placeholder="Lead ID" />
                </FormGroup>{' '}
                <FormGroup>
                  <Label for="examplePassword" hidden>
                    User ID
                  </Label>
                  <Input
                    type="text"
                    name="text"
                    placeholder="User ID"
                  />
                </FormGroup>{' '}
                <Button>Assign</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Delete Lead</CardHeader>
            <CardBody>
              <Form inline>
                <FormGroup>
                  <Label for="exampleLead" hidden>
                    Lead ID
                  </Label>
                  <Input type="text" name="text" placeholder="Lead ID" />
                </FormGroup>{' '}
                <Button>Delete</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        
      </Row>

      </Page>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <Page
        className="DashboardPage"
        title="Sales Team Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >

      <Row>
        <Col lg={6} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Number of Assigned Leads"
              number="20"
             
            />
          </Col>

          <Col lg={6} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Completed"
              number="12 (60%)"
            />
          </Col>
           
      </Row>              

      <Row>
        
      <Col xl={6} lg={4} md={4}>
          <Card>
            <CardHeader>Pending Leads</CardHeader>

            <CardBody>
              <Row>
                    

              <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 1</CardHeader>
            <CardBody>
              <span>Name: Thabang Isaka</span><br/>
              <span>Phone no: 72661271</span><br/>
              <span>Reason: 9 month Tribesman</span><br/>
              <span>Location: Main Mall</span><br/><br/>

              <Form>
              <FormGroup>
                  <Input type="text" name="text" placeholder="Outcome" />
                </FormGroup>{' '}
                <Button>Mark Complete</Button>    
              </Form>  

            </CardBody>
          </Card>
        </Col>
        
        <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 2</CardHeader>
            <CardBody>
              <span>Name: Grace Mogami</span><br/>
              <span>Phone no: 72661271</span><br/>
              <span>Reason: 6 month Tribesman</span><br/>
              <span>Location: Main Mall</span><br/><br/>

              <Form>
              <FormGroup>
                  <Input type="text" name="text" placeholder="Outcome" />
                </FormGroup>{' '}
                <Button>Mark Complete</Button>    
              </Form>        

            </CardBody>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 3</CardHeader>
            <CardBody>
              <span>Name: Thapelo Robert</span><br/>
              <span>Phone no: 72661271</span><br/>
              <span>Reason: 9 month Tribesman</span><br/>
              <span>Location: Francistown</span><br/><br/>

              <Form>
              <FormGroup>
                  <Input type="text" name="text" placeholder="Outcome" />
                </FormGroup>{' '}
                <Button>Mark Complete</Button>    
              </Form>       


            </CardBody>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 4</CardHeader>
            <CardBody>
              <span>Name: Thato Radebe</span><br/>
              <span>Phone no: 72661271</span><br/>
              <span>Reason: 6 month Tribesman</span><br/>
              <span>Location: Main Mall</span><br/><br/>

              <Form>
              <FormGroup>
                  <Input type="text" name="text" placeholder="Outcome" />
                </FormGroup>{' '}
                <Button>Mark Complete</Button>    
              </Form>        

            </CardBody>
          </Card>
        </Col>

              </Row>

            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={4} md={4}>
          <Card>
            <CardHeader>Completed Leads</CardHeader>

            <CardBody>
              <Row>
                    

              <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 1</CardHeader>
            <CardBody>
              <span>Name: Thabiso Moeng</span><br/>
              <span>Phone no: 72661271</span><br/>
              <span>Reason: 6 month Tribesman</span><br/>
              <span>Location: Main Mall</span><br/>
              <span>Outcome: Asked for more information regarding savings accounts.</span>      
              <br/><br/>Status:<span style={{color:'#00FF25'}}> Confirmed</span>     


            </CardBody>
          </Card>
        </Col>
        
        <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 21</CardHeader>
            <CardBody>
              <span>Name: Gladys Moremi</span><br/>
              <span>Phone no: 74455443</span><br/>
              <span>Reason: 9 month Tribesman</span><br/>
              <span>Location: Francistown</span><br/>
              <span>Outcome: Meeting booked</span>      
              <br/><br/>Status: <span style={{color:'#FF002C'}}> Pending confirmation from lead</span>

            </CardBody>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 13</CardHeader>
            <CardBody>
              <span>Name: Resego T</span><br/>
              <span>Phone no: 73223322</span><br/>
              <span>Reason: 9 month Tribesman</span><br/>
              <span>Location: Francistown</span><br/>
              <span>Outcome: Meeting booked</span>      
              <br/><br/>Status:<span style={{color:'#00FF25'}}> Confirmed</span>     


            </CardBody>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={12}>
        <Card className="mb-3">
            <CardHeader>ID: 44</CardHeader>
            <CardBody>
              <span>Name: Tim Shaww</span><br/>
              <span>Phone no: 72661271</span><br/>
              <span>Reason: 6 month Tribesman</span><br/>
              <span>Location: Main Mall</span><br/>
              <span>Outcome: Signed up for 6 month Tribesman</span>      
              <br/><br/>Status: <span style={{color:'#FF002C'}}> Pending confirmation from lead</span>     

            </CardBody>
          </Card>
        </Col>

              </Row>

            </CardBody>
          </Card>
        </Col>

      </Row>     

      <Row>
        
      <Col xl={8} lg={12} md={12}>
          <Card>
            <CardHeader>My Performance vs Team Average</CardHeader>
            <CardBody>
              <Bar data={genLineBarData({ type: 'bar', fill: false })} />
            </CardBody>
          </Card>
        </Col>            
        
      </Row>         
              

      </Page>

      </React.Fragment>
    );
  }
}
export default DashboardPage;
