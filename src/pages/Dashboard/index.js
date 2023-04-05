import PropTypes from 'prop-types';
import React, { useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import ".././Tables/datatables.scss";


//i18n
import { withTranslation } from "react-i18next";

const DatatableTables = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
      {
        label: "On-prem",
        field: "onprem",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        date: "2012/08/06",
        salary: "$137",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        date: "2010/10/14",
        salary: "$327",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        date: "2009/09/15",
        salary: "$205",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        date: "2008/12/13",
        salary: "$103",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        date: "2008/12/19",
        salary: "$90",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: "22",
        date: "2013/03/03",
        salary: "$342",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        date: "2008/10/16",
        salary: "$470",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London",
        age: "43",
        date: "2012/12/18",
        salary: "$313",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        age: "19",
        date: "2010/03/17",
        salary: "$385",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Michael Silva",
        position: "Marketing Designer",
        office: "London",
        age: "66",
        date: "2012/11/27",
        salary: "$198",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        office: "New York",
        age: "64",
        date: "2010/06/09",
        salary: "$725",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Gloria Little",
        position: "Systems Administrator",
        office: "New York",
        age: "59",
        date: "2009/04/10",
        salary: "$237",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Bradley Greer",
        position: "Software Engineer",
        office: "London",
        age: "41",
        date: "2012/10/13",
        salary: "$132",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Dai Rios",
        position: "Personnel Lead",
        office: "Edinburgh",
        age: "35",
        date: "2012/09/26",
        salary: "$217",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Jenette Caldwell",
        position: "Development Lead",
        office: "New York",
        age: "30",
        date: "2011/09/03",
        salary: "$345",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        office: "New York",
        age: "40",
        date: "2009/06/25",
        salary: "$675",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Caesar Vance",
        position: "Pre-Sales Support",
        office: "New York",
        age: "21",
        date: "2011/12/12",
        salary: "$106",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Doris Wilder",
        position: "Sales Assistant",
        office: "Sidney",
        age: "23",
        date: "2010/09/20",
        salary: "$85",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Angelica Ramos",
        position: "Chief Executive Officer (CEO)",
        office: "London",
        age: "47",
        date: "2009/10/09",
        salary: "$1",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Gavin Joyce",
        position: "Developer",
        office: "Edinburgh",
        age: "42",
        date: "2010/12/22",
        salary: "$92",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Jennifer Chang",
        position: "Regional Director",
        office: "Singapore",
        age: "28",
        date: "2010/11/14",
        salary: "$357",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: "28",
        date: "2011/06/07",
        salary: "$206",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: "48",
        date: "2010/03/11",
        salary: "$850",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Shou Itou",
        position: "Regional Marketing",
        office: "Tokyo",
        age: "20",
        date: "2011/08/14",
        salary: "$163",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Michelle House",
        position: "Integration Specialist",
        office: "Sidney",
        age: "37",
        date: "2011/06/02",
        salary: "$95",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Suki Burks",
        position: "Developer",
        office: "London",
        age: "53",
        date: "2009/10/22",
        salary: "$114",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Prescott Bartlett",
        position: "Technical Author",
        office: "London",
        age: "27",
        date: "2011/05/07",
        salary: "$145",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: "22",
        date: "2008/10/26",
        salary: "$235",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Martena Mccray",
        position: "Post-Sales support",
        office: "Edinburgh",
        age: "46",
        date: "2011/03/09",
        salary: "$324",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Unity Butler",
        position: "Marketing Designer",
        office: "San Francisco",
        age: "47",
        date: "2009/12/09",
        salary: "$85",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Howard Hatfield",
        position: "Office Manager",
        office: "San Francisco",
        age: "51",
        date: "2008/12/16",
        salary: "$164",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Hope Fuentes",
        position: "Secretary",
        office: "San Francisco",
        age: "41",
        date: "2010/02/12",
        salary: "$109",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Vivian Harrell",
        position: "Financial Controller",
        office: "San Francisco",
        age: "62",
        date: "2009/02/14",
        salary: "$452",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Timothy Mooney",
        position: "Office Manager",
        office: "London",
        age: "37",
        date: "2008/12/11",
        salary: "$136",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Jackson Bradshaw",
        position: "Director",
        office: "New York",
        age: "65",
        date: "2008/09/26",
        salary: "$645",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Olivia Liang",
        position: "Support Engineer",
        office: "Singapore",
        age: "64",
        date: "2011/02/03",
        salary: "$234",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Bruno Nash",
        position: "Software Engineer",
        office: "London",
        age: "38",
        date: "2011/05/03",
        salary: "$163",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Sakura Yamamoto",
        position: "Support Engineer",
        office: "Tokyo",
        age: "37",
        date: "2009/08/19",
        salary: "$139",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Thor Walton",
        position: "Developer",
        office: "New York",
        age: "61",
        date: "2013/08/11",
        salary: "$98",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",
        date: "2009/07/07",
        salary: "$87",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112",
        onprem:  <select className="form-control" style={{border: '0em'}}><option>On-prem</option><option>contractor</option><option>Trainee</option></select>
      
      },
    ],
  };
  document.title = "Dashborad | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          {/* <Breadcrumbs maintitle="Dashborad" title="Dashborad" breadcrumbItem="Dashborad" /> */}
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Datatable </CardTitle>
                  <p className="card-title-desc">
                    mdbreact DataTables has most features enabled by default, so
                    all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                    <code>&lt;MDBDataTable /&gt;</code>.
                  </p>

                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>

          
        </div>
      </div>
    </React.Fragment>
  );
};

export default DatatableTables;
