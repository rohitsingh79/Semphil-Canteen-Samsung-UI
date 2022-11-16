import styled from "styled-components";
import HOC from '../HOC/HOC';
import Favorite from "./Favorite";

const AccountBalanceWrapper = styled.div`
  width: 100%;
  height: 100%;;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 48px;
  background:#fff;
  box-shadow:0px 0px 56px -8px rgb(0 0 0 / 17%);
  box-sizing: border-box;
  .dottedBorder {
    border: 1px dashed grey;
  }
  .accountBalancePadding {
    margin-bottom: 24px;
  }

  .accountBalanceText {
    font-size: 28px;
    font-weight: 500;
  }
  .priceText {
    color: red;
    font-size: 32px;
  }
  .lastUpdated {
    color: grey;
    font-size: 14px;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AccountBalance = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

const AccountDetails = styled.div`
  height: 50%;
`;

const ListDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px;
`;

function AccountBalanceList(){
    return (

        <AccountBalanceWrapper>
        <InnerWrapper>
          <AccountBalance>
            <div className="accountBalancePadding accountBalanceText">
              Account Balance
            </div>
            <div className="accountBalancePadding priceText">5947.99</div>
            <div className="accountBalancePadding lastUpdated">Last Updated:2019-05-20</div>
          </AccountBalance>
          <AccountDetails>
            <div className="dottedBorder"></div>
            <ListDetails>
              <div>2019-05-20</div>
              <div>FOSECA</div>
              <div>55.9</div>
            </ListDetails>
            <div className="dottedBorder"></div>
            <ListDetails>
              <div>2019-05-20</div>
              <div>FOSECA</div>
              <div>55.9</div>
            </ListDetails>
            <div className="dottedBorder"></div>
            <ListDetails>
              <div>2019-05-20</div>
              <div>FOSECA</div>
              <div>55.9</div>
            </ListDetails>
            <div className="dottedBorder"></div>
          </AccountDetails>
        </InnerWrapper>
      </AccountBalanceWrapper>
       
    )

}

export default AccountBalanceList = HOC(72 ,AccountBalanceList , Favorite );
