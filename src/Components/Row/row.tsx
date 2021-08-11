import "./row.css";
export default function Row({ img, title, description }: any) {
  return (
    <div
      className={"main-page-row"}
      style={{
        width: "90%",
        height: "20vh",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignContent: "space-around",
      }}
    >
      <img
        src={img}
        alt="img"
        style={{
          flex: 1,
          display: "flex",
          objectFit: "contain",
          height: "14rem",
          width: "20rem",
        }}
      />
      <div
        style={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="title-card"
          style={{
            alignSelf: "flex-start",
          }}
        >
          {title}
        </div>
        <div
          className="description-card"
          style={{
            alignSelf: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
