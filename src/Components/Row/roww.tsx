import "./row.css";
import Grid  from "@material-ui/core/Grid";
export default function Roww({ img, title, description, direction }: any) {
  return (
    <div className={"main-page-row"}>
      <Grid
        container
        direction={direction} //passing direction as a prop so that I can use the same component for 2 rows
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item md={4}>
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
        </Grid>
        <Grid item md={8}>
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
        </Grid>
      </Grid>
    </div>
  );
}
