import React, { useState } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
// reactstrap components
// core components

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections
import MainSection from "./MainSection/MainSection";
import MainSectionEdit from "./MainSectionEdit/MainSectionEdit";
import ContactSection from "./ContactSection/ContactSection";
import ContactSectionMobile from "./ContactSectionMobile/ContactSectionMobile";
import ContactSectionEdit from "./ContactSectionEdit/ContactSectionEdit";
import ContactSectionEditMobile from "./ContactSectionEditMobile/ContactSectionEditMobile";
var defaultConfig = require("../../default");
function ProfilePage(props) {
  document.documentElement.classList.remove("nav-open");
  const linkRef = React.createRef();
  //ReactState
  const [onPage, setOnPage] = React.useState(true);
  const [links, setLink] = React.useState(false);
  const [mobile, setIsMobile] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [EditMode, setEditMode] = useState(0);
  const [ButtonText, setButtonText] = useState("Edit profile");
  const [ButtonIcon, setButtonIcon] = useState("fa fa-edit");
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    mobileNumber: "",
    homeNumber: "",
    email: "",
    workEmail: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    snapchat: "",
    youtube: "",
    instagram: "",
    whatsapp: "",
    viber: "",
    address: "",
    birthday: "",
  });
  const [showData, setShowData] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {};
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleOnChangeSocial = (event) => {
    const { name, value } = event.target;
    if (name == "twitter" || name == "instagram" || name == "snapchat") {
      setState({ ...state, [name]: [value, state[name][1]] });
    } else {
      setState({ ...state, [name]: [state[name][0], value] });
    }
  };
  const handleOnChangeCheckBox = (event) => {
    const { name } = event.target;

    setShowData({ ...showData, [name]: event.target.checked });
  };
  const downloadContact = () => {
    console.log("test");
    console.log(showData.homeNumber);
    const Url =
      defaultConfig.endpoint +
      `/profile/createVCF?firstName=${state.firstName}&lastName=${
        state.lastName
      }&organization=MTD&jobTitle=software engineer&homePhone=${
        showData.homePhone ? state.homeNumber : ""
      }&mobileNumber=${showData.mobilePhone ? state.mobileNumber : ""}&email=${
        showData.email ? state.email : ""
      }&workEmail=${showData.workEmail ? state.workEmail : ""}&facebook=${
        showData.facebook ? state.facebook[1] : ""
      }&linkedIn=${showData.linkedIn ? state.linkedin[1] : ""}&twitter=${
        showData.twitter ? state.twitter[1] : ""
      }&snapchat=${showData.instagram ? state.snapchat[1] : ""}&youtube=${
        showData.youtube ? state.youtube[1] : ""
      }&instagram=${showData.instagram ? state.instagram[1] : ""}&address=${
        showData.adress ? state.address : ""
      }`;

    fetch(Url, {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing a post failed!");
        }

        return res.blob();
      })
      .then((blob) => {
        const href = URL.createObjectURL(blob);
        console.log(href);
        var link = document.createElement("a");
        link.href = href;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editProfile = () => {
    fetch(defaultConfig.endpoint + "/profile/updateProfile/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: state.firstName,
        lastName: state.lastName,
        companyName: state.companyName,
        jobTitle: state.jobTitle,
        mobileNumber: state.mobileNumber,
        homeNumber: state.homeNumber,
        email: state.email,
        workEmail: state.workEmail,
        twitter: state.twitter,
        instagram: state.instagram,
        linkedin: state.linkedin,
        facebook: state.facebook,
        snapchat: state.snapchat,
        youtube: state.youtube,
        whatsapp: state.whatsapp,
        viber: state.viber,
        address: state.address,
        birthday: state.birthday,
        showData: showData,
      }),
    })
      .then((res) => {
        window.scrollTo(0, 0);
        props.history.push("/profile-page/" + props.id);
        props.setEditProfileFromMenu(0);
        props.setRefresh(!props.refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    let params = queryString.parse(props.location.search);
    console.log("Usao u effect", props.editProfileFromMenu);
    if (params.edit === "true" || props.editProfileFromMenu === 1) {
      setButtonText("Save");
      setButtonIcon("fa fa-save");
      setEditMode(1);
    } else if (props.editProfileFromMenu === 0) {
      setButtonText("Edit profile");
      setButtonIcon("fa fa-edit");
      setEditMode(0);
    }
    if (props.userId === props.id) {
      setisAuthenticated(true);
    }

    fetch(defaultConfig.endpoint + "/profile/profileData/" + props.id)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts.");
        }
        return res.json();
      })
      .then((resData) => {
        
        setImageUrl(resData.profileImage);
        setState({
          ...state,
          firstName: resData.profileData.profileData.firstName,
          lastName: resData.profileData.profileData.lastName,
          companyName: resData.profileData.profileData.companyName,
          jobTitle: resData.profileData.profileData.jobTitle,
          mobileNumber: resData.profileData.profileData.contactInfo.mobilePhone,
          homeNumber: resData.profileData.profileData.contactInfo.homePhone,
          email: resData.profileData.profileData.contactInfo.email,
          workEmail: resData.profileData.profileData.contactInfo.workEmail,
          twitter: resData.profileData.profileData.socialNetwork.twitter,
          linkedin: resData.profileData.profileData.socialNetwork.linkedIn,
          facebook: resData.profileData.profileData.socialNetwork.facebook,
          instagram: resData.profileData.profileData.socialNetwork.instagram,
          snapchat: resData.profileData.profileData.socialNetwork.snapchat,
          youtube: resData.profileData.profileData.socialNetwork.youtube,
          whatsapp: resData.profileData.profileData.directMessage.whatsapp,
          viber: resData.profileData.profileData.directMessage.viber,
          address: resData.profileData.profileData.personalInfo.adress,
          birthday: resData.profileData.profileData.personalInfo.birthday,
        });

        setShowData(resData.profileData.showData);
      })
      .catch((err) => {
        console.log(err);
      });
    if (window.innerWidth < 700) {
      setIsMobile(true);
    }
  }, [props.editProfileFromMenu]);

  return (
    <>
      <ProfilePageHeader isAuthenticated={isAuthenticated} />
      <a ref={linkRef} />

      <div className="section profile-content">
        <div className="container noPaddingProfilePage">
          {EditMode ? (
            <MainSectionEdit
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              id={props.id}
              modalIsOpen={modalIsOpen}
              afterOpenModal={afterOpenModal}
              closeModal={closeModal}
              openModal={openModal}
              state={state}
              handleOnChange={handleOnChange}
            />
          ) : (
            <MainSection
              state={state}
              downloadContact={downloadContact}
              imageUrl={imageUrl}
            />
          )}

          {
            EditMode ? (
              mobile ? (
                <ContactSectionEditMobile
                  state={state}
                  handleOnChange={handleOnChange}
                  handleOnChangeSocial={handleOnChangeSocial}
                  showData={showData}
                  editProfile={editProfile}
                  handleOnChangeCheckBox={handleOnChangeCheckBox}
                  pageChange={props.pageChange}
                  setPageChange={props.setPageChange}
                />
              ) : (
                <ContactSectionEdit
                  state={state}
                  handleOnChange={handleOnChange}
                />
              )
            ) : mobile ? (
              <ContactSectionMobile
                state={state}
                showData={showData}
                pageChange={props.pageChange}
                setPageChange={props.setPageChange}
              />
            ) : null //<ContactSection state={state} />
          }
        </div>
      </div>
      <DemoFooter {...props} onPage={onPage} />
    </>
  );
}

export default withRouter(ProfilePage);
