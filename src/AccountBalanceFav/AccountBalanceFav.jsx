import { Wrapper , AccountBalanceWrapper ,FavWrapper } from "./style";

const AccountBalanceFav = ()=>{
    return (

        <Wrapper>
        <AccountBalanceWrapper>
            <div style = {{'margin-bottom':'18px'}}>
                <h2>Account Balance</h2>
            </div>
            <div
            style = {{'margin-bottom':'18px' , 'color':'red' , 'font-size':'24px' , 'font-weight':'bold'}}
            >
                54567.90
            </div>
        </AccountBalanceWrapper>
        <FavWrapper>
            Favoutite
        </FavWrapper>
        </Wrapper>
       
    )

}

export default AccountBalanceFav;
