import React from "react";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  render() {
    const { showEdit } = this.props;
    const { content } = this.state;
    return (
      <>
        <div className={showEdit ? "overlay2" : "hidden"} />
        <div className={showEdit ? "editForm" : "hidden"}>
          <form>
            <h4>Chỉnh sửa bài viết</h4>
            <div className="input-content">
              <input
                value={content}
                placeholder="Bạn đang nghĩ gì thế?"
                onChange={(e) => this.onChangeContent(e)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <button
                className="btn-primary"
                style={{ marginRight: "10px" }}
                onClick={this.onSave}
              >
                Đăng
              </button>
              <button className="btn-cancel" onClick={this.onCancel}>
                Hủy
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
