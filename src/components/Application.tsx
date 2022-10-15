import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Application: React.FunctionComponent<any> = (props) => {

  let styles = {
    light: css`
  background: #ffffffde;
  min-width: 200px;
  min-height: 100px;
  max-width: 400px;
  border-radius: 5px;

  margin: 50px;
  .control-bar {
    background:#fff;
    display: flex;
    height: 15px;
    background: rgba(0, 0, 0, 0.25);
    padding: 2.5px;
  }

  .application-controls {
    display: flex;
    align-items: center;
  }

  .application-controls div {
    height: 14px;
    width: 14px;
    border-radius: 8px;
    background: #333;
    margin: 0px 2px;
  }

  .application-controls div.close {
    background: #f96057;
    border: 0.5px solid #d91717;
  }

  .application-controls .minimize {
    background: #f8ce52;
    border: 0.5px solid #cea017;
  }

  .application-controls .maximize {
    background: #5fcf65;
    border: 0.5px solid #29b629;

    
  }
`,
    dark: css`
background: rgba(0,0,0,0.15);
min-width: 200px;
min-height: 100px;
max-width: 400px;
border-radius: 5px;

margin: 50px;
.control-bar {
  background:#fff;
  display: flex;
  height: 15px;
  background: rgba(0, 0, 0, 0.25);
  padding: 2.5px;
}

.application-controls {
  display: flex;
  align-items: center;
}

.application-controls div {
  height: 14px;
  width: 14px;
  border-radius: 8px;
  background: #333;
  margin: 0px 2px;
}

.application-controls div.close {
  background: #f96057;
  border: 0.5px solid #d91717;
}

.application-controls .minimize {
  background: #f8ce52;
  border: 0.5px solid #cea017;
}

.application-controls .maximize {
  background: #5fcf65;
  border: 0.5px solid #29b629;

  
}
`
  }
  let theme = useSelector<RootState>(state => state.theme.currentTheme)
  return (
    <div className="application-container" css={styles[theme]}>
      <div className="control-bar">
        <div className="application-controls">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="maximize"></div>
        </div>
      </div>

      <div className="content"></div>
    </div>
  );
};
export default Application;
