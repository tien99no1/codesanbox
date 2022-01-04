import React from "react";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content2: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { id, content } = props;

    if (id) {
      return { content };
    }

    return null;
  }

  onSave = (e) => {
    e.preventDefault();
    const { onSave, id } = this.props;
    const { content2 } = this.state;
    onSave(id, content2);
    this.setState({ content: "" });
  };

  onCancel = (e) => {
    e.preventDefault();
    const { hideForm } = this.props;
    this.setState({ content: "" });
    hideForm();
  };
  onChangeContent = (e) => {
    this.setState({ content2: e.target.value });
  };
  render() {
    const { show, id } = this.props;
    const { content2 } = this.state;
    return (
      <>
        <div className={show ? "overlay" : "hidden"} />
        <div className={show ? "postForm" : "hidden"}>
          <form>
            <h4>{id ? "Chỉnh sửa bài viết " : "Tạo bài viết "}</h4>
            <br />
            <br />
            <div className="input-content">
              <textarea
                value={content2}
                placeholder="Bạn đang nghĩ gì?"
                onChange={(e) => this.onChangeContent(e)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <button
                className="btn-save"
                style={{ marginRight: "10px" }}
                onClick={this.onSave}
              >
                Đăng
              </button>
              <button className="btn-cancel" onClick={this.onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
