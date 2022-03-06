import { css } from "@emotion/css";

function PausedOverlay(props){
  return(
  <div>
    <img
      src={props.imageURL}
      alt=""
      className={css`
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        left: 0;
        object-fit: cover;
        filter: brightness(50%);
      `}
    />
    <div
      className={css`
        z-index: 1;
        font-family: sans-serif;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;
      `}
    >
    </div>
  </div>)
}

export default PausedOverlay;