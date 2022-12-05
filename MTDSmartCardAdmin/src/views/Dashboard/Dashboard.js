import Icon from "@material-ui/core/Icon";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Accessibility from "@material-ui/icons/Accessibility";
// @material-ui/icons
import AttachMoney from "@material-ui/icons/AttachMoney";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Update from "@material-ui/icons/Update";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import React, { useState } from "react";




const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [unprocessed, setUnprocessed] = useState([]);
  const [processed, setProcessed] = useState([]);
  const [sold, setSold] = useState([]);
  const [timeUpdate, setTimeUpdate] = useState("");
  const classes = useStyles();
  React.useEffect(() => {
    fetch(
      "http://localhost:443/app/order/orders",
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Error creating User");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        var arrayU = [];
        var arrayP = [];
        var arrayS = [];
        resData.data.forEach((element) => {
          var id = element._id;
          var name = element.name;
          var lastName = element.lastName;
          var address = element.address;
          var city = element.city;
          var postCode = element.postCode;
          var phoneNumber = element.phoneNumber;
          var cardId = element.cardId;
          var obj = {
            id,
            name,
            lastName,
            address,
            city,
            postCode,
            phoneNumber,
            cardId,
          };
          switch (element.status) {
            case "Unprocessed":
              arrayU.push(obj);
              break;
            case "Processed":
              arrayP.push(obj);
              break;
            case "Sold":
              arrayS.push(obj);
              break;
          }
        });
        setUnprocessed(arrayU);
        setProcessed(arrayP);
        setSold(arrayS);
        var currentdate = new Date();
        var time =
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds();
        setTimeUpdate(time);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ marginTop: "80px", minHeight: "100vh" }}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Cards sold</p>
              <h3 className={classes.cardTitle}>{sold.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                {timeUpdate}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoney />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>
                ${parseInt(sold.length) * 25}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                {timeUpdate}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>To create</p>
              <h3 className={classes.cardTitle}>{unprocessed.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                {timeUpdate}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <LocalShipping />
              </CardIcon>
              <p className={classes.cardCategory}>To ship</p>
              <h3 className={classes.cardTitle}>{processed.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                {timeUpdate}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Title"]}
                tableData={[
                  ["1", "Milos Ciric", "CEO"],
                  ["2", "Aleksa Opačić", "CTO"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
