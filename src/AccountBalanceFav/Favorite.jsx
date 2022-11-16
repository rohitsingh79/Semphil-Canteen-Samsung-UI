import styled from "styled-components";

const MyFavoriteWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  opacity: 0.6;
  background: linear-gradient(to top, purple, blue);
  .favoriteText {
    margin-bottom: 15px;
    color: white;
    font-weight: bold;
  }
`;

const FavouriteDish = styled.div`
  display: flex;
  border: 1px solid white;
  margin-bottom: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  height: 20px;

  .flex1 {
    flex: 0.3;
    align-self: center;
  }
  .flex2 {
    flex-grow: 0.6;
    height: 20px;
  }
  .flex3 {
    flex-grow: 0.1;
  }
`;

const Dot = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  background: green;
  margin-left: 4px;
`;

function Favorite(){
    return (
        <div>
          <MyFavoriteWrapper>
            <div className="favoriteText">My Favourites</div>
            <FavouriteDish>
              <div className="flex1">
                <Dot />
              </div>
              <div className="flex2">Lumpiang Shangai</div>
              <div className="flex3"></div>
            </FavouriteDish>
    
            <div
              style={{
                "margin-left": "50px",
                "margin-bottom": "10px",
                color: "white"
              }}
            >
              Chicken afritada
            </div>
            <FavouriteDish>
              <div className="flex1">
                <Dot />
              </div>
              <div className="flex2">Ginataang papaya</div>
            </FavouriteDish>
          </MyFavoriteWrapper>
        </div>
      );
}

export default Favorite;