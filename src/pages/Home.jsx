import {Footer} from "../components/Footer";
import { Container, Tab, Tabs } from "react-bootstrap";
// import {logo} from '../logo.svg';

export const Home = () => {
  return(
  <div>
  <header>
    <h1 style={{textAlign:"center"}}>Soft Bank Private Ltd.</h1>
    <p style={{textAlign:"center"}}>Banking before is never eaiser !!</p>
		{/* <img src={logo}  alt="logo" /> */}
  </header>


    <Container className="p-5 mb-4 bg-light rounded-3">
				<Tabs
					defaultActiveKey="check-balance"
					id="justify-tab-example"
					className="mb-3"
					justify
		  >
					<Tab eventKey="check-balance" title="Check-Balance">
						<h1>Home</h1>
					</Tab>
          <Tab eventKey="open-new-fd" title="Open New FD">
						<h1>About</h1>
					</Tab>
					<Tab eventKey="change-atm-pin" title="Change Atm Pin">
            <h1>Menu</h1>
					</Tab>
          <Tab eventKey="open-new-fd" title="Open New FD">
						<h1>login</h1>
					</Tab>
          <Tab eventKey="fund-transfer" title="Fund Transfer">
						<h1>signup</h1>
					</Tab>
					<Tab eventKey="logout" title="Logout">
						<h1>Logout</h1>
					</Tab>
				</Tabs>
			</Container>
     <Footer/>           
  </div>
  
  );
}

