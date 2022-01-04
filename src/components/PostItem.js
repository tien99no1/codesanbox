import React from "react";

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmtValue: []
    };
  }
  onChangeCmt = (e) => {
    this.setState({ cmtValue: e.target.value });
  };
  handleSubmitCmt = (e) => {
    e.preventDefault();
    const { onSaveCmt, id } = this.props;
    onSaveCmt(this.state.cmtValue, id);
    this.setState({ cmtValue: "" });
  };
  render() {
    const {
      id,
      content,
      onEdit,
      onDelete,
      cmt,
      onEditCmt,
      onDeleteCmt
    } = this.props;
    const { cmtValue } = this.state;
    const listComment = cmt.filter((item) => item.idPost === id);
    return (
      <li key={id} className="item">
        Trạng thái:
        <div className="item-ctn">
          <h4>{content}</h4>
          <hr />
        </div>
        <div className="item-cmt">
          <div className="cmtInput">
            <input
              placeholder="Viết bình luận..."
              value={cmtValue}
              autoFocus
              onChange={this.onChangeCmt}
            />
            <button type="submit" onClick={this.handleSubmitCmt}>
              {" "}
              Gửi
            </button>
          </div>
          <p className="allCmt">Bình luận :</p>
          <ul>
            {listComment.map((value) => (
              <li className="cmtItem" key={value.id}>
                <p>{value.value}</p>
                <div className="cmtButton">
                  <button
                    className="btn-change"
                    onClick={() => onEditCmt(value.id)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDeleteCmt(value.id)}
                  >
                    Xóa
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="cmtButton">
          <button className="btn-change" onClick={() => onEdit(id)}>
            <i class="fa fa-pencil" aria-hidden="true"></i> Chỉnh sửa bài viết
          </button>
          <button className="btn-delete" onClick={() => onDelete(id)}>
            <i class="fa fa-trash-o" aria-hidden="true"></i> Xóa bài viết
          </button>
        </div>
      </li>
    );
  }
}
