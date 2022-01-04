import React from "react";
import PostItem from "./PostItem";

export default class List extends React.Component {
  onSaveCmt = (data, id) => {
    const { onSaveCmtData } = this.props;
    onSaveCmtData(data, id);
  };
  render() {
    const { onEdit, data, onDelete, cmt, onEditCmt, onDeleteCmt } = this.props;

    return (
      <ul className="list">
        {data.map((item) => (
          <PostItem
            key={item.id}
            onEdit={onEdit}
            id={item.id}
            content={item.content}
            onDelete={onDelete}
            cmt={cmt}
            onSaveCmt={this.onSaveCmt}
            onEditCmt={onEditCmt}
            onDeleteCmt={onDeleteCmt}
          />
        ))}
      </ul>
    );
  }
}
