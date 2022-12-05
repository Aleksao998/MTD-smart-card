import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Update from "@material-ui/icons/Update";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MaterialTable from "material-table";
import React, { useState } from "react";
import card from "../../assets/img/card.jpg";
//Table
import tableIcons from "../../assets/table";

const useStyles = makeStyles(styles);
var QRCode = require("qrcode.react");

export default function Orders() {
  const [timeUpdate, setTimeUpdate] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [id, setId] = useState("");
  const [unprocessed, setUnprocessed] = useState([]);
  const [processed, setProcessed] = useState([]);
  const [sold, setSold] = useState([]);
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
          var holderName = element.holderName;
          var lastName = element.lastName;
          var address = element.address;
          var addressNum = element.addressNum;
          var city = element.city;
          var postCode = element.postCode;
          var phoneNumber = element.phoneNumber;
          var cardId = element.cardId;
          var obj = {
            id,
            name,
            holderName,
            lastName,
            address,
            addressNum,
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
  React.useEffect(() => {
    if (qrValue !== "") {
      const card = document.getElementById("card");

      const canvas = document.getElementById("123456");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.drawImage(card, 0, 0, 550, 366);
      ctx.drawImage(canvas, 400, 250, 50, 50);
      var link = document.createElement("a");
      link.download = id + ".png";
      link.href = document.getElementById("canvas").toDataURL();
      link.click();
    }
  }, [qrValue]);

  const deleteOrder = (id) => {
    fetch(
      "http://localhost:443/app/order/deleteOrder",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    )
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error("Error creating User");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (data) => {
    fetch(
      "http://localhost:443/app/order/updateOrder/" +
        data.id,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          lastName: data.lastName,
          address: data.address,
          city: data.city,
          postCode: data.postCode,
          email: data.email,
          phoneNumber: data.phoneNumber,
        }),
      }
    )
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error("Error creating User");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeTable = (data, tableName) => {
    fetch(
      "http://localhost:443/app/order/updateOrder/" +
        data.id,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: tableName,
        }),
      }
    )
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error("Error creating User");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="userTable">
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>local_shipping</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Unprocessed orders</p>
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
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>local_shipping</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Processed orders</p>
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

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AttachMoney />
              </CardIcon>
              <p className={classes.cardCategory}>Total sold</p>
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
      </GridContainer>

      <MaterialTable
        icons={tableIcons}
        columns={[
          { title: "Id", field: "cardId" },
          { title: "Name", field: "name" },

          { title: "Last name", field: "lastName" },
          { title: "Holder", field: "holderName" },
          { title: "Address", field: "address" },
          { title: "AdressNum", field: "addressNum" },
          { title: "City", field: "city" },
          { title: "Post code", field: "postCode" },
          { title: "Phone number", field: "phoneNumber" },
        ]}
        data={unprocessed}
        actions={[
          {
            icon: "arrow_downward",
            tooltip: "",
            onClick: (event, rowData) => {
              changeTable(rowData, "Processed");
              var array = [...unprocessed]; // make a separate copy of the array
              var index = array.indexOf(rowData);
              var newDatas = array[index];
              if (index !== -1) {
                array.splice(index, 1);
                setUnprocessed(array);
                var arrayP = [...processed];
                arrayP.push(newDatas);
                setProcessed(arrayP);
              }
            },
          },
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              updateUser(newData);
              var array = [...unprocessed];
              var index = array.indexOf(oldData);
              array[index] = newData;
              setUnprocessed(array);
              resolve();
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              deleteOrder(oldData.id);
              var array = [...unprocessed]; // make a separate copy of the array
              var index = array.indexOf(oldData);

              if (index !== -1) {
                array.splice(index, 1);
                setUnprocessed(array);
              }
              resolve();
            }),
        }}
        options={{
          pageSize: 5,
          paging: true,
        }}
        localization={{
          pagination: {
            labelRowsPerPage: "6",
          },
        }}
        title="Unprocessed orders"
      />
      <div style={{ marginTop: "30px" }}>
        <MaterialTable
          icons={tableIcons}
          columns={[
            { title: "Id", field: "cardId" },
            { title: "Name", field: "name" },
            { title: "Last name", field: "lastName" },
            { title: "Holder", field: "holderName" },
            { title: "Address", field: "address" },
            { title: "AdressNum", field: "addressNum" },
            { title: "City", field: "city" },
            { title: "Post code", field: "postCode" },
            { title: "Phone number", field: "phoneNumber" },
          ]}
          data={processed}
          actions={[
            {
              icon: "arrow_upward",
              tooltip: "",
              onClick: (event, rowData) => {
                changeTable(rowData, "Unprocessed");
                var array = [...processed]; // make a separate copy of the array
                var index = array.indexOf(rowData);
                var newDatas = array[index];
                if (index !== -1) {
                  array.splice(index, 1);
                  setProcessed(array);

                  var arrayU = [...unprocessed];
                  arrayU.push(newDatas);
                  setUnprocessed(arrayU);
                }
              },
            },
            {
              icon: "arrow_downward",
              tooltip: "",
              onClick: (event, rowData) => {
                changeTable(rowData, "Sold");
                var array = [...processed]; // make a separate copy of the array
                var index = array.indexOf(rowData);
                var newDatas = array[index];
                if (index !== -1) {
                  array.splice(index, 1);
                  setProcessed(array);
                  var arrayP = [...sold];
                  arrayP.push(newDatas);
                  setSold(arrayP);
                }
              },
            },
            {
              icon: "perm_media",
              tooltip: "QR image",
              onClick: (event, rowData) => {
                setQrValue(
                  "https://aleksao998.github.io/MTDSmartCard/profile-page/" +
                    rowData.cardId
                );
                setId(rowData.cardId);
              },
            },
          ]}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                updateUser(newData);
                var array = [...processed];
                var index = array.indexOf(oldData);
                array[index] = newData;
                setProcessed(array);
                resolve();
              }),

            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                deleteOrder(oldData.id);
                var array = [...processed]; // make a separate copy of the array
                var index = array.indexOf(oldData);

                if (index !== -1) {
                  array.splice(index, 1);
                  setProcessed(array);
                }
                resolve();
              }),
          }}
          options={{
            pageSize: 5,
            paging: true,
            exportButton: true,
          }}
          localization={{
            pagination: {
              labelRowsPerPage: "6",
            },
          }}
          title="Processed orders"
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <MaterialTable
          icons={tableIcons}
          columns={[
            { title: "Id", field: "cardId" },
            { title: "Name", field: "name" },
            { title: "Last name", field: "lastName" },
            { title: "Holder", field: "holderName" },
            { title: "Address", field: "address" },
            { title: "AdressNum", field: "addressNum" },
            { title: "City", field: "city" },
            { title: "Post code", field: "postCode" },
            { title: "Phone number", field: "phoneNumber" },
          ]}
          data={sold}
          actions={[
            {
              icon: "arrow_upward",
              tooltip: "",
              onClick: (event, rowData) => {
                changeTable(rowData, "Processed");
                var array = [...sold]; // make a separate copy of the array
                var index = array.indexOf(rowData);
                var newDatas = array[index];
                if (index !== -1) {
                  array.splice(index, 1);
                  setSold(array);

                  var arrayU = [...processed];
                  arrayU.push(newDatas);
                  setProcessed(arrayU);
                }
              },
            },
            {
              icon: "perm_media",
              tooltip: "QR image",
              onClick: (event, rowData) => {
                setQrValue(
                  "https://aleksao998.github.io/MTDSmartCard/" + rowData.cardId
                );
                setId(rowData.cardId);
              },
            },
          ]}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                updateUser(newData);
                var array = [...sold];
                var index = array.indexOf(oldData);
                array[index] = newData;
                setSold(array);
                resolve();
              }),

            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                deleteOrder(oldData.id);
                var array = [...sold]; // make a separate copy of the array
                var index = array.indexOf(oldData);

                if (index !== -1) {
                  array.splice(index, 1);
                  setSold(array);
                }
                resolve();
              }),
          }}
          options={{
            pageSize: 5,
            paging: true,
          }}
          localization={{
            pagination: {
              labelRowsPerPage: "6",
            },
          }}
          title="Sold cards"
        />
      </div>
      <div style={{ display: "none" }}>
        <canvas id="canvas" width="550" height="336"></canvas>
        <img src={card} alt={"logo"} id="card" />
        <QRCode
          id="123456"
          value={qrValue}
          size={50}
          level={"H"}
          includeMargin={true}
        />
      </div>
    </div>
  );
}
