import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import StarRatings from "react-star-ratings";

// image
import carAvatar from "../../images/car-avatar.png";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

//Styles
import "./tileList.styles.scss";

const TileList = (props) => {
  let history = useHistory();
  const onClickDetail = (name, location) => {
    history.push({
      pathname: "/details",
      search: `?garageName=${name}`,
      state: { val: name, location: location },
    });
  };
  const { list } = props;

  return (
    list &&
    list.map((x) => (
      <List className="list-container" key={x.garageTitle}>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={4} className="description-panel">
              <h3>
                <img src={carAvatar} alt="car avatar" /> {x.garageTitle}
              </h3>
              <p>
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  className="offest-margin-right-10"
                />
                {x.address}
              </p>
              <p className="text-underline">
                <span>operating Hours:</span>
                {x.operatingHours}
              </p>
            </Grid>
            <Grid item xs={10} sm container>
              <Grid item container direction="column" spacing={2}>
                <Grid item xs>
                  <p>
                    {x.verified === true ? (
                      <button className="common-button verified-color">
                        Verified
                      </button>
                    ) : null}
                    <button className="common-button available-color">
                      {x.weekOff}
                    </button>
                  </p>
                  <h3>Customer Ratings & Reviews</h3>
                  <div>
                    {x.garageOverallRating.averageGarageRatings === "NaN" ? (
                      "No Reviews"
                    ) : (
                      <>
                        <StarRatings
                          rating={parseInt(
                            x.garageOverallRating.averageGarageRatings
                          )}
                          starRatedColor="rgb(2238, 255, 0)"
                          numberOfStars={5}
                          name="rating"
                          starDimension="20px"
                          starSpacing="3px"
                        />
                        <span>
                          {x.garageOverallRating.totalGarageReviews} reviews
                        </span>
                      </>
                    )}
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} className="text-center">
              <p>Services starting at</p>
              <p>
                <b>&#8377; {x.startingPrice}</b>
              </p>
              <p>
                <button
                  className="common-button book-now-btn cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${x.garageTitle},%20${x.location}`;
                  }}
                >
                  Book Now
                </button>
              </p>
              <div
                className="cursor-pointer text-underline"
                onClick={() => onClickDetail(x.garageTitle, x.location)}
              >
                know more about the service center and their offerings
              </div>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    ))
  );
};

export default TileList;
