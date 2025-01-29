import "./Button.css";
export default function Button({ buttonClicked, children, width = 50, position, left }) {
    return (
        <button
            style={{
                width: `${width}px`,
                color: "white",
                borderRadius: "10px",
                padding: "10px 16px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: "black",
                position: position,
                left: left,
            }}
            className="universal-btn"
            onClick={buttonClicked}
        >
            {" "}
            {children}
        </button>
    );
}
