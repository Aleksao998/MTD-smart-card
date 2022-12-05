import React from "react";
import Modal from "react-modal";
import AvatarEditor from "react-avatar-editor";
import { Button } from "reactstrap";
const axios = require("axios");
var FormData = require("form-data");
var defaultConfig = require("../../../default");
//Modal Setting
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minheight: "450px",
    transform: "translate(-50%, -50%)",
  },
};

const customStylesAvatar = {};
Modal.setAppElement(document.getElementById("root"));

const ImageModal = (props) => {
  const [image, setImage] = React.useState(null);
  const [editor, setEditor] = React.useState(null);

  const saveImage = () => {
    const canvas2 = editor.getImageScaledToCanvas().toDataURL();
    const imageName = "profile-" + props.id + ".png";
    var bodyFormData = new FormData();
    bodyFormData.append("myImage", canvas2);
    bodyFormData.append("imageName", imageName);
    bodyFormData.append("id", props.id);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(
        defaultConfig.endpoint + "/profile/uploadImage",
        bodyFormData,
        config
      )
      .then((response) => {
        props.setImageUrl(canvas2);
        props.closeModal();
      })
      .catch((error) => {});
  };
  const onChange = (e) => {
    setImage(e.target.files[0]);
  };
  const setEditorRef = (editor) => setEditor(editor);
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <p className="modalImageTitle">Import your image</p>
      <div className="custom-file">
        <input
          type="file"
          name="myImage"
          className="custom-file-input"
          id="customFile"
          onChange={onChange}
        />
        <label className="custom-file-label" htmlFor="customFile">
          Choose file
        </label>
      </div>

      {image ? (
        <div className="avatarDiv">
          <AvatarEditor
            image={image}
            ref={setEditorRef}
            width={250}
            height={250}
            border={50}
            borderRadius={125}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1.2}
            rotate={0}
            style={customStylesAvatar}
          />
        </div>
      ) : null}

      <div className="modalButton">
        <Button
          style={{ marginRight: "5px", width: "80px" }}
          className="btn-round"
          color="danger"
          onClick={props.closeModal}
        >
          close
        </Button>
        <Button
          style={{ width: "80px" }}
          className="btn-round"
          color="success"
          onClick={saveImage}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default ImageModal;
