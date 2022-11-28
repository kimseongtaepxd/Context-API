/* Context의 action에 넣어 준 함수를 호출하는 컴포넌트 */
/* 마우스 왼쪽 버튼 클릭 : 큰 정사각형의 색상 변경 */
/* 마우스 오른쪽 버튼 클릭 : 작은 정사각형의 색상 변경 */

import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onCLick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>

        <hr />
      </div>
    );
  }
}

export default SelectColors;
